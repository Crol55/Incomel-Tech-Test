import { Component } from '@angular/core';
import { EmpleadoModel } from 'src/app/data_models/EmpleadoModel';
import { EmpleadoData } from 'src/app/services/EmpleadoData.service';
import { EmpleadoService } from 'src/app/services/EmpleadoService.service';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})
export class UpdateUsuarioComponent {

  public empleadoInfo:EmpleadoModel = new EmpleadoModel; 

  private TASA_IGGS = 4.83/100;
  private TASA_IRTRA = 1/100;

  public igss = 0;
  public irtra = 0;
  public bonoPaternidadInterp = 0;
  public salarioTotalInterp = 0;
  public salarioLiquido = 0;

  constructor(private empleadoService:EmpleadoService, private empleadoData:EmpleadoData){

    this.empleadoInfo = this.empleadoService.getEmpleado();

    this.calcularCuotasLaboralesYPatronales();

    this.bonoPaternidadInterp = this.redondearDosDecimales(this.calcularBonoPaternidad(this.empleadoInfo.cantidad_de_hijos));
    this.salarioTotalInterp = this.redondearDosDecimales(
      this.calcularSalarioTotal(this.empleadoInfo.salario_base, this.bonoPaternidadInterp, this.empleadoInfo.bono_decreto)
    );
    this.salarioLiquido = this.redondearDosDecimales(
      this.calcularSalarioLiquido(this.salarioTotalInterp, this.igss, this.irtra)
    );

  }

  changeCantidadHijos(){
    
    this.bonoPaternidadInterp = this.redondearDosDecimales(this.calcularBonoPaternidad(this.empleadoInfo.cantidad_de_hijos));

    this.salarioTotalInterp = this.redondearDosDecimales(
      this.calcularSalarioTotal(this.empleadoInfo.salario_base, this.bonoPaternidadInterp, this.empleadoInfo.bono_decreto)
    );

    this.salarioLiquido = this.redondearDosDecimales(
      this.calcularSalarioLiquido(this.salarioTotalInterp, this.igss, this.irtra)
    );
  }

  changeSalarioBase(){
    
    this.calcularCuotasLaboralesYPatronales();

    this.salarioTotalInterp = this.redondearDosDecimales(
      this.calcularSalarioTotal(this.empleadoInfo.salario_base, this.bonoPaternidadInterp, this.empleadoInfo.bono_decreto)
    );

    this.salarioLiquido = this.redondearDosDecimales(
      this.calcularSalarioLiquido(this.salarioTotalInterp, this.igss, this.irtra)
    );
  }

  calcularCuotasLaboralesYPatronales(){
    this.igss = this.redondearDosDecimales( this.calcularIGGS() );
    this.irtra = this.redondearDosDecimales(this.calcularIRTRA());
  }

  calcularIGGS():number{
   
    if(this.empleadoInfo.dpi != ""){
      return this.empleadoInfo.salario_base * this.TASA_IGGS ;
    }
    return 0;
  }

  calcularIRTRA():number{

    if(this.empleadoInfo.dpi != ""){
      return this.empleadoInfo.salario_base * this.TASA_IRTRA ;
    }
    return 0;
  }

  calcularBonoPaternidad(cantidadHijos:number):number{
    return 133 * cantidadHijos;
  }

  calcularSalarioTotal(salarioBase:number, bonoPaternidad:number, bonoDecreto:number){
    return salarioBase + bonoPaternidad + bonoDecreto;
  }

  calcularSalarioLiquido(salarioTotal:number, igss:number, irtra:number){
    return (salarioTotal - igss - irtra);
  }

  redondearDosDecimales(dato:number):number{
    return Math.round(dato * 100) /100
  }

  updateEmpleado(){

    this.empleadoData.updateEmpleado(this.empleadoInfo)
    .subscribe(
      data =>{console.log(data); window.alert("usuario actualizado")},
      error =>{console.log(error);}
    );
  }
}

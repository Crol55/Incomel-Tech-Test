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

  constructor(private empleadoService:EmpleadoService, private empleadoData:EmpleadoData){

    this.empleadoInfo = this.empleadoService.getEmpleado();
  }

  updateEmpleado(){

    this.empleadoData.updateEmpleado(this.empleadoInfo)
    .subscribe(
      data =>{console.log(data);},
      error =>{console.log(error);}
    );

  }
}

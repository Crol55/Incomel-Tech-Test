import { Component } from '@angular/core';
import { EmpleadoModel } from 'src/app/data_models/EmpleadoModel';
import { EmpleadoData } from 'src/app/services/EmpleadoData.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent {

  empleado:EmpleadoModel = new EmpleadoModel; 


  constructor(private empleadoData:EmpleadoData){ }

  agregarUsuario(dpiInput:HTMLInputElement){
    
    
    if(dpiInput.value != ""){

      this.empleado.dpi = dpiInput.value;

      this.empleadoData.createEmpleado(this.empleado, 1)
      .subscribe(
        data => {console.log(data);},
        error =>{console.log(error);}
      );
    }
  }
}

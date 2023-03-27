import { Component } from '@angular/core';
import { EmpleadoModel } from 'src/app/data_models/EmpleadoModel';
import { EmpleadoData } from 'src/app/services/EmpleadoData.service';
import { EmpleadoService } from 'src/app/services/EmpleadoService.service';

@Component({
  selector: 'app-delete-empleado',
  templateUrl: './delete-empleado.component.html',
  styleUrls: ['./delete-empleado.component.css']
})
export class DeleteEmpleadoComponent {

  public empleadoInfo:EmpleadoModel = new EmpleadoModel;
  public showAlert = false;
  
  constructor(private empleadoService:EmpleadoService, private empleadoData:EmpleadoData){
    
    this.empleadoInfo = empleadoService.getEmpleado();
    
  }

  deleteEmpleado(){
    if(this.empleadoInfo.dpi == ""){
      return;
    }

    this.showAlert = true;
  }

  confirmDeleteEmpleado(button:HTMLButtonElement){

    
    if (button.id == "si"){
      
      this.empleadoData.deleteEmpleado(this.empleadoInfo.dpi)
      .subscribe(
        data =>{console.log(data);},
        error =>{console.log(error);}
      );

      this.empleadoInfo = new EmpleadoModel;
    }

    this.showAlert = false;
    return;
  }
}

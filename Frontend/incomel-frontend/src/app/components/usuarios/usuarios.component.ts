import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoModel } from 'src/app/data_models/EmpleadoModel';
import { EmpleadoData } from 'src/app/services/EmpleadoData.service';
import { EmpleadoService } from 'src/app/services/EmpleadoService.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  listaEmpleados: EmpleadoModel[] = []

  constructor(private empleadoData:EmpleadoData, private router:Router, private empleadoService:EmpleadoService){

    this.empleadoData.getAllEmpleados()
    .subscribe(
      (data)=>{
        //console.log(data[0]);
        this.listaEmpleados = data;
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }

  loadUpdateComponent(empleadoInfo:EmpleadoModel):void{
   
    this.empleadoService.setEmpleado(empleadoInfo);
    this.router.navigate(['usuarios/update']);
  }

  deleteEmpleado(empleadoInfo: EmpleadoModel){

    this.empleadoService.setEmpleado(empleadoInfo);
    this.router.navigate(['usuarios/delete']);
  }
}

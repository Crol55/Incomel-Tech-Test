import {HttpClient, HttpParams} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { EmpleadoModel } from '../data_models/EmpleadoModel';

@Injectable()
export class EmpleadoData{

    private EMPLEADO_URL = "http://localhost:5034/api/empleados";

    constructor(private httpClient:HttpClient){}

    getAllEmpleados(){
        return this.httpClient.get<[EmpleadoModel]>(this.EMPLEADO_URL);
    }

    updateEmpleado(empleado:EmpleadoModel){
        
        let body = {
            "dpi": empleado.dpi, 
            "nombre_completo": empleado.nombre_completo,
            "cantidad_de_hijos": empleado.cantidad_de_hijos,
            "salario_base": empleado.salario_base
        };

        return this.httpClient.put(this.EMPLEADO_URL, body);
    }

    deleteEmpleado(_dpi:string){

        let queryParams = new HttpParams({
            fromObject: {
                dpi: _dpi
            }
        });
        

        return this.httpClient.delete(this.EMPLEADO_URL, { params: queryParams} );
    }
}
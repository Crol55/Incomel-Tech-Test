import {HttpClient, HttpParams} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioData{

    
    private USUARIO_URL = "http://localhost:5034/api/usuarios/existeUsuario";
    constructor(private httpClient:HttpClient){

    }

    verificarExistenciaDeUsuario(email:string, password:string){
        
        let queryParams = new HttpParams({
            fromObject:{
                email: email, 
                password: password
            }
        })
        return this.httpClient.get<{existe:boolean}>(this.USUARIO_URL, { params: queryParams});
    }
}
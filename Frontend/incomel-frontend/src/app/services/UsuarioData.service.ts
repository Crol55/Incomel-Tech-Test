import {HttpClient, HttpParams} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioData{

    
    private USUARIO_URL = "http://localhost:5034/api/usuarios";
    constructor(private httpClient:HttpClient){

    }

    verificarExistenciaDeUsuario(email:string, password:string){
        
        let queryParams = new HttpParams({
            fromObject:{
                email: email, 
                password: password
            }
        })
        return this.httpClient.get<{existe:boolean}>(`${this.USUARIO_URL}/existeUsuario`, { params: queryParams});
    }

    recuperarContrasenia(email:string, fechaNacimiento:string){

        let body = {
            "email": email, 
            "fecha_nacimiento": fechaNacimiento
        };

        return this.httpClient.post<{existe:boolean}>(`${this.USUARIO_URL}/resetPassword`, body);
    }

    cambiarContrasenia(email:string, resetCode:string, newPassword:string){

        let body = {
            "email": email, 
            "reset_password_code": resetCode,
            "password": newPassword
        };

        return this.httpClient.put<{valid:boolean}>(`${this.USUARIO_URL}/confirmNewPassword`, body);
    }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioData } from 'src/app/services/UsuarioData.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private usuarioData:UsuarioData,  private router:Router){}

  login(inputEmail:HTMLInputElement, inputPassword:HTMLInputElement):void{

    this.usuarioData.verificarExistenciaDeUsuario( inputEmail.value, inputPassword.value)
    .subscribe(
      (data) =>{
        console.log(data)
        if(data.existe == true){
          this.router.navigate(['dashboard']);
          localStorage.setItem('userEmail', inputEmail.value);
        }
      }, 
      (error) =>{
        console.log(error);
        window.alert("Usuario o contraseña incorrectos");
      }
    );
   
  }
}

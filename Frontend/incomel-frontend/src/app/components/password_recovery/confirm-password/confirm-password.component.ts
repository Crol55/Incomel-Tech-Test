import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioData } from 'src/app/services/UsuarioData.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})

export class ConfirmPasswordComponent {

  private sub:any;

  private urlRouteParameters = {
    "email":"",
    "resetCode":""
  };
  
  constructor(private activatedRoute: ActivatedRoute, private usuarioData:UsuarioData){}

  ngOnInit(){
    
    this.sub = this.activatedRoute.params.subscribe(
      params =>{
        this.urlRouteParameters.email = params['email'];
        this.urlRouteParameters.resetCode = params['resetCode'];
      }
    );
  }

  cambiarPassword(psw1:HTMLInputElement, psw2:HTMLInputElement){
  // http://localhost:4200/usuario/recovery/confirmPassword/carlosorantes77@gmail.com/3f560bd6-9105-471b-a57f-6f6aad24e425
    if(psw1.value == "" && psw2.value == ""){
      window.alert("Los campos de password no pueden estar vacios");
      return;
    }
    if(psw1.value != psw2.value){
      window.alert("Error! Ambos password deben ser identicos!!");
      return;
    }
    //console.log(this.urlRouteParameters);
    this.usuarioData.cambiarContrasenia( this.urlRouteParameters.email, this.urlRouteParameters.resetCode, psw1.value)
    .subscribe(
      data =>{
        if(data.valid){
          window.alert("Su contrasenia fue actualizada correctamente!");
        }
      },
      error =>{console.log(error); window.alert("Su link ya no tiene validez!!");}
    );
  }
}

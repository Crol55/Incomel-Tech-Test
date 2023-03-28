import { Component } from '@angular/core';
import { UsuarioData } from 'src/app/services/UsuarioData.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private usuarioData:UsuarioData){}


  recuperarPassword(email:HTMLInputElement, fechaNacimiento:HTMLInputElement){
    
    
    if(email.value != "" && fechaNacimiento.value != ""){
      
      this.usuarioData.recuperarContrasenia(email.value, fechaNacimiento.value)
      .subscribe(
        data =>{
          if(data.existe){
            window.alert("Se envio a su correo electronico un enlace para recuperar su contraseña");
          }
        },
        error =>{console.log(error); window.alert("Su Email o fecha de nacimiento es incorrecto");}
      );

      return;
    }
    window.alert("Ambos campos son obligatorios para recuperar su contrase;");
  }
}

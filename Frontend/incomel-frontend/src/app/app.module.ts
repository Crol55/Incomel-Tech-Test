import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioData } from './services/UsuarioData.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { EmpleadoData } from './services/EmpleadoData.service';
import { UpdateUsuarioComponent } from './components/update-usuario/update-usuario.component';
import { EmpleadoService } from './services/EmpleadoService.service';
import { FormsModule } from '@angular/forms';
import { DeleteEmpleadoComponent } from './components/delete-empleado/delete-empleado.component';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { MainPageComponent } from './components/password_recovery/main-page/main-page.component';
import { ConfirmPasswordComponent } from './components/password_recovery/confirm-password/confirm-password.component';
import { LoginGuardian } from './guards/LoginGuardian.guard';
import { PalindromoComponent } from './components/palindromo/palindromo.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsuariosComponent,
    UpdateUsuarioComponent,
    DeleteEmpleadoComponent,
    AgregarEmpleadoComponent,
    MainPageComponent,
    ConfirmPasswordComponent,
    PalindromoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuarioData, EmpleadoData, EmpleadoService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }

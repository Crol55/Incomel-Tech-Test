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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsuariosComponent,
    UpdateUsuarioComponent,
    DeleteEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuarioData, EmpleadoData, EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

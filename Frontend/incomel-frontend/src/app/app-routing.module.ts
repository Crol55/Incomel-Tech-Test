import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeleteEmpleadoComponent } from './components/delete-empleado/delete-empleado.component';
import { LoginComponent } from './components/login/login.component';
import { ConfirmPasswordComponent } from './components/password_recovery/confirm-password/confirm-password.component';
import { MainPageComponent } from './components/password_recovery/main-page/main-page.component';
import { UpdateUsuarioComponent } from './components/update-usuario/update-usuario.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"login", component: LoginComponent}, 
  {path:"dashboard", component: DashboardComponent},
  {path:"empleado", component: AgregarEmpleadoComponent},
  {path:"empleado/update", component: UpdateUsuarioComponent},
  {path:"empleado/delete", component: DeleteEmpleadoComponent},
  {path:"usuario/recovery", component: MainPageComponent},
  {path:"usuario/recovery/confirmPassword/:email/:resetCode", component: ConfirmPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

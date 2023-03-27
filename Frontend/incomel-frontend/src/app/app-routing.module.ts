import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeleteEmpleadoComponent } from './components/delete-empleado/delete-empleado.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateUsuarioComponent } from './components/update-usuario/update-usuario.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"login", component: LoginComponent}, 
  {path:"dashboard", component: DashboardComponent},
  {path:"usuarios/update", component: UpdateUsuarioComponent},
  {path:"usuarios/delete", component: DeleteEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

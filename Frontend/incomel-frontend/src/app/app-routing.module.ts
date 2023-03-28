import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeleteEmpleadoComponent } from './components/delete-empleado/delete-empleado.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateUsuarioComponent } from './components/update-usuario/update-usuario.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"login", component: LoginComponent}, 
  {path:"dashboard", component: DashboardComponent},
  {path:"empleado", component: AgregarEmpleadoComponent},
  {path:"empleado/update", component: UpdateUsuarioComponent},
  {path:"empleado/delete", component: DeleteEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  showUsuariosComponent:boolean = true;

  mostrarUsuarios(){
    this.showUsuariosComponent = true;
  }

  logout(){
    localStorage.removeItem('userEmail');
  }
}

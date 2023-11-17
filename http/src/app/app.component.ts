import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    TablaClientesComponent,
    EditarClienteComponent,
    CrearClienteComponent,
    HttpClientModule 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
}

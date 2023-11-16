import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearClienteComponent } from '../crear-cliente/crear-cliente.component';
import { ClientesService } from '../servicios/clientes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-clientes',
  standalone: true,
  imports: [
    CommonModule,
    CrearClienteComponent,
    FormsModule
  ],
  templateUrl: './tabla-clientes.component.html',
  styleUrl: './tabla-clientes.component.css'
})
export class TablaClientesComponent implements OnInit {

  clientes: Array<any> = []

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.clientesService.getClientes();
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-crear-cliente',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './crear-cliente.component.html',
  styleUrl: './crear-cliente.component.css'
})
export class CrearClienteComponent implements OnInit {

  cliente: any = {
    nombre: '',
    cif: '',
    localidad: '',
  }

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
  }

  addCliente(): void {
    this.clientesService.setCliente(this.cliente);
    this.cliente = {
      nombre: '',
      cif: '',
      localidad: '',
    }
  }

}

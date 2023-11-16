import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../models/cliente.model';
import { Proveedor } from '../models/proveedor.model';

@Component({
  selector: 'app-directiva-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directiva-ng-for.component.html',
  styleUrl: './directiva-ng-for.component.css'
})
export class DirectivaNgForComponent implements OnInit {

  // Hardcoeando los valores (normalmente vendrán de un servicio)
  proveedores: Array<Proveedor> = [ // Tipado con Clase TypeScript
    new Proveedor('Gas Natural', 'A12344342'),
    new Proveedor('Iberdrola', 'A768276387'),
    new Proveedor('Jazztl', 'A63873688'),
    new Proveedor('Jazztl', 'A63873688')
  ]

  clientes: Array<Cliente> = [ // Tipado con Interfaz TypeScript
    {nombre: 'Telefónica', cif: 'A1234567'},
    {nombre: 'Orange', cif: 'A63876438'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
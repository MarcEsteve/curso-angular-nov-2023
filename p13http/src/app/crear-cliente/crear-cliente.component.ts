import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientesService } from '../servicios/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cliente',
  standalone: true,
  imports: [
    CommonModule,
    FormControl,
    FormGroup
  ],
  templateUrl: './crear-cliente.component.html',
  styleUrl: './crear-cliente.component.css'
})
export class CrearClienteComponent implements OnInit {

  formCliente: FormGroup = new FormGroup({});

  constructor(private clientesService: ClientesService,
              private router: Router) { }

  ngOnInit(): void {
    this.formCliente = new FormGroup({
      nombre: new FormControl(''),
      actividades: new FormControl(''),
      direccion: new FormControl(''),
      localidad: new FormControl(''),
    })
  }

  addCliente() {
    // posible transformación del objeto del formulario
    this.clientesService.createCliente(this.formCliente.value)
                        .subscribe({
                          next: (resp: any) => {
                            this.router.navigate(['/']);
                          },
                          error: (error: any) => {console.log(error)} // Lógica de presentación de error
                        })
  }

}
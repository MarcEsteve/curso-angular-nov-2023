import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
  }

  addProducto(producto: any): void {
    this.productosService.addProducto(producto);
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  productsCounter: number = 0;
  suscripcionProductos!: Subscription;
  
  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    // this.productsCounter = this.productosService.getNumeroProductos(); //Sin RxJS
    this.suscripcionProductos = this.productosService.getNumeroProductos()
                                                      .subscribe((data: any) => {
                                                        this.productsCounter = data.counter;
                                                      })
  }

  ngOnDestroy(): void {
    this.suscripcionProductos.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponenteEnLineaComponent } from './componente-en-linea/componente-en-linea.component';
import { MarcadorComponent } from './marcador/marcador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ComponenteEnLineaComponent, MarcadorComponent], 
  template: `
  <!-- <div class="card m">
     <h1>Ejemplo de componente en línea</h1>
     <p>{{mensaje}}</p>
     <app-componente-en-linea ></app-componente-en-linea>
  </div> -->
  <app-marcador></app-marcador>
  `,
  styles: [ // Array de bloques css
    'p {color: tomato}',
    'h1 {color: blue}'
  ]
})
export class AppComponent implements OnInit {

  mensaje = 'Hola Mundo!';

  constructor() { }

  ngOnInit(): void {
  }

}
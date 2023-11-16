import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-componente-en-linea',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      componente-en-linea works!
    </p>
  `,
  styles: `
    p { color: green; }
  `
})
export class ComponenteEnLineaComponent {

}

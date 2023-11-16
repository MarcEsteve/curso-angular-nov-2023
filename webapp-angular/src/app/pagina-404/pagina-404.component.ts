import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina-404',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './pagina-404.component.html',
  styleUrl: './pagina-404.component.css'
})
export class Pagina404Component {

}

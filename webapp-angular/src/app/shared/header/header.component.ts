import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InfoPaginaService } from '../../info-pagina.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    HttpClientModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  //Inyección de dependencias del servicio que captura el "data-pagina.json"
  constructor( public pepito:InfoPaginaService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  logoRojo: string = 'https://i.ibb.co/6m6hJwy/santander-red.png';
  logoBlanco: string = 'https://i.ibb.co/48RWS1F/santander-white.png';
  imagen: string = this.logoRojo;

  constructor() { }

  ngOnInit(): void {
    this.cambiarImagen();
  }

  cambiarImagen() {
    setInterval(() => {
      this.imagen === this.logoRojo ? this.imagen = this.logoBlanco : this.imagen = this.logoRojo;
    }, 2000)
  }

}
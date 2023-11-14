import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [
    BrowserModule,
    FormsModule
  ],
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  actor: any = {
    nombre: '',
    apellidos: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
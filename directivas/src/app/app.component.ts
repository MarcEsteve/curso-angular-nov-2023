import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true, 
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'directivas';
  puntuacion: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }
}

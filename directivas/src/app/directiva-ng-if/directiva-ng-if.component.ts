import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directiva-ng-if',
  standalone:true, 
  imports: [
    BrowserModule, 
    FormsModule
  ],
  templateUrl: './directiva-ng-if.component.html',
  styleUrls: ['./directiva-ng-if.component.css']
})
export class DirectivaNgIfComponent implements OnInit {

  puntuacion: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
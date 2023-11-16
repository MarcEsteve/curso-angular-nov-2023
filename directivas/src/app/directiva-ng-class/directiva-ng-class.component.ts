import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directiva-ng-class',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './directiva-ng-class.component.html',
  styleUrl: './directiva-ng-class.component.css'
})
export class DirectivaNgClassComponent implements OnInit {

  jugadores: Array<any> = [
    {nombre: 'Magic Johnson', equipo: 'lakers'},
    {nombre: 'Larry Bird', equipo: 'celtics'},
    {nombre: 'Michael Jordan', equipo: 'bulls'},
    {nombre: 'Pedro Jiménez'},
    {nombre: 'Marc Esteve', equipo: 'bulls'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

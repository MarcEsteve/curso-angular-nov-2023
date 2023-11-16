import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directiva-ng-style',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './directiva-ng-style.component.html',
  styleUrl: './directiva-ng-style.component.css'
})
export class DirectivaNgStyleComponent implements OnInit {

  puntuacion: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  getColorTexto(): string {
    if (this.puntuacion !==  null && this.puntuacion >= 7) {
      return 'green';
    } else if (this.puntuacion !==  null && this.puntuacion >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  }

}

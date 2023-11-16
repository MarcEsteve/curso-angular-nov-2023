import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directiva-ng-if',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directiva-ng-if.component.html',
  styleUrl: './directiva-ng-if.component.css'
})
export class DirectivaNgIfComponent implements OnInit{
  puntuacion: number | null = null;
  ngOnInit(): void {
  }

}

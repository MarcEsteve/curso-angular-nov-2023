import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directiva-ng-switch',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './directiva-ng-switch.component.html',
  styleUrl: './directiva-ng-switch.component.css'
})
export class DirectivaNgSwitchComponent {
  
  mensaje: string = 'danger';

}

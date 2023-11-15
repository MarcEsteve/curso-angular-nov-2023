import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Componentes
import { HeaderComponent } from "./header/header.component";
import { SizerComponent } from "./sizer/sizer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, HeaderComponent, SizerComponent,FormsModule]
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void {
  }

  title = 'Prueba 3';
  fontSizePx = 16;
  currentItem: any = {
    name: ''
  }
}

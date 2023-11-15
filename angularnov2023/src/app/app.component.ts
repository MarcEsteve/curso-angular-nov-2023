//Módulos
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Componentes
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DataBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent, 
    HeaderComponent, 
    FooterComponent, 
    BrowserModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Nov';
  fecha = 2023;
  mensaje = "Hola mundo";
}

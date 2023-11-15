import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DirectivaDirective } from './directiva.directive';

//Componentes


@NgModule({
  declarations: [
  
    DirectivaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

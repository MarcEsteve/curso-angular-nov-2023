//Módulos
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

//Pipes
import { NumeroPipe } from './numero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NumeroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

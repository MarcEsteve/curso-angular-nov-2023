import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivaNgIfComponent } from './directiva-ng-if/directiva-ng-if.component';
import { DirectivaNgSwitchComponent } from './directiva-ng-switch/directiva-ng-switch.component';
import { DirectivaNgForComponent } from './directiva-ng-for/directiva-ng-for.component';
import { DirectivaNgClassComponent } from './directiva-ng-class/directiva-ng-class.component';
import { DirectivaNgStyleComponent } from './directiva-ng-style/directiva-ng-style.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    DirectivaNgIfComponent, 
    DirectivaNgSwitchComponent,
    DirectivaNgForComponent,
    DirectivaNgClassComponent,
    DirectivaNgStyleComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivas';
}

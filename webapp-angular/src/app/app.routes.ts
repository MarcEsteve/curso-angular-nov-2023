import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { Pagina404Component } from './pagina-404/pagina-404.component';
import { TerminosComponent } from './pages/terminos/terminos.component';

export const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'terminos', component: TerminosComponent},
    {path: '', redirectTo: 'portfolio', pathMatch: 'full'},
    {path: '**', component: Pagina404Component}
];

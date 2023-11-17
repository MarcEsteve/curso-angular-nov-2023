import { Routes } from '@angular/router';
import { CrearFacturaComponent } from './facturas/crear-factura/crear-factura.component';

export const routes: Routes = [
    {path: 'home', component: CrearFacturaComponent},
    {path: '', redirectTo: 'home',pathMatch:'full'}
];

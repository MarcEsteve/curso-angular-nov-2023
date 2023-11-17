import { Routes } from '@angular/router';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';

export const routes: Routes = [
    {path: '', component: TablaClientesComponent},
    {path: 'crear-cliente', component: CrearClienteComponent},
    {path: 'editar-cliente/:_id', component: EditarClienteComponent}
];

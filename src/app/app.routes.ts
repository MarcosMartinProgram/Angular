import { Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados/empleados.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    {
        path: 'empleados',
        component: EmpleadosComponent
    },
    {
        path: '**',
        redirectTo: '/AppComponent'
    }
];

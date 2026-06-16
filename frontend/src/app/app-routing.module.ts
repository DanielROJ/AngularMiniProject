import { Routes } from '@angular/router';
import { UCEmpleadoComponent } from './components/uc-empleado/uc-empleado.component';
import { RDEmpleadoComponent } from './components/rd-empleado/rd-empleado.component';

export const routes: Routes = [
  { path: 'UCempleados', component: UCEmpleadoComponent },
  { path: 'RDEmpleados', component: RDEmpleadoComponent },
  { path: '', redirectTo: 'UCempleados', pathMatch: 'full' },
];

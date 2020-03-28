import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UCEmpleadoComponent} from './components/uc-empleado/uc-empleado.component';
import {RDEmpleadoComponent} from './components/rd-empleado/rd-empleado.component';


const routes: Routes = [
  {path:'UCempleados', component:UCEmpleadoComponent},
  {path:'RDEmpleados', component:RDEmpleadoComponent},
  {path:'',redirectTo:'UCempleados', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

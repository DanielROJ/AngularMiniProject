import { Component, OnInit } from '@angular/core';
import { ConsumoAPIService } from 'src/app/Services/consumo-api.service';
import { Empleado } from 'src/app/Model/empleado';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-uc-empleado',
  templateUrl: './uc-empleado.component.html',
  styleUrls: ['./uc-empleado.component.css'],
  providers:[ConsumoAPIService]
})
export class UCEmpleadoComponent implements OnInit {
  private empleado:Empleado;
  public tiposID =["cc","nit","pass"];
  public items:any;
  constructor(private apiService:ConsumoAPIService, private formBuilder:FormBuilder, private matSnackBar:MatSnackBar ) {
    this.items = this.formBuilder.group({
      idEmp:'',
      nombres:'',
      apellidos:'',
      type:"",
      correo:'',
      tel1:'',
      tel2:'',
      tel3:'',
      salario:''
    })
  }

  ngOnInit() {
  }

  CrearEmpleado(data):void{
  try {
    if(data.status !== 'INVALID' && data.value.type!== ""){
    this.empleado = new Empleado(data.value);
    this.apiService.CreateEmpleado(this.empleado);
    this.items.reset();
    }else{
      this.setStatus('Error Verifique Los Capos Ingresados')
    }
  } catch (error) {
    console.log('ERROR '+ error);
    this.setStatus('Error Verifique Los Capos Ingresados')
  }
  
  }

  ActualizarEmpleado(data):void{
  try {
    if(data.status !== 'INVALID' && data.value.type !== ""){
      this.empleado = new Empleado(data.value);
      this.apiService.UpdateEmpleado(this.empleado);
    }else{
      this.setStatus('Error Verifique Los Capos Ingresados')
    } 
  } catch (error) {
    this.setStatus('Error Verifique Los Capos Ingresados')
  }
  }

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 5000});
  }
}

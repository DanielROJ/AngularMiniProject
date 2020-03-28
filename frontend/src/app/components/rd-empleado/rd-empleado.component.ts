import { Component, OnInit } from '@angular/core';
import { ConsumoAPIService } from 'src/app/Services/consumo-api.service';
import { Empleado } from 'src/app/Model/empleado';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-rd-empleado',
  templateUrl: './rd-empleado.component.html',
  styleUrls: ['./rd-empleado.component.css'],
  providers:[ConsumoAPIService]
})
export class RDEmpleadoComponent implements OnInit {
  public listEmpleados : Empleado[];
  public items:any;
  public tiposID =["cc","nit","pass"];
  constructor(private apiService:ConsumoAPIService,private formBuilder:FormBuilder,private matSnackBar:MatSnackBar) {
    this.items = this.formBuilder.group({
      idEmpleado:0,
      type:''
    });

   }

  ngOnInit() {
    this.allEmpleados();
  }




ReadEmpleado(data):void{
   if(data.idEmpleado !== 0 && data.type !== ''){
   this.apiService.readEmpleado(data.idEmpleado,data.type).then(emp=>{
    if(emp){
    this.listEmpleados = [];   
    this.listEmpleados.push(emp);
    }else{
      this.setStatus('Empleado no Encontrado');
    }
   });   
    
   }else{
     this.setStatus('ERROR verifique Los campos');
   }
}

allEmpleados():void{
  this.listEmpleados = [];
  this.apiService.readAllEmpleados().then(data=>{
    this.listEmpleados = data;
  });
}

deleteEmpleado(data):void{
  if(data.idEmpleado !== 0 && data.type !== ''){
  this.apiService.deleteEmpleado(data.idEmpleado,data.type).then(data=>{
    if(data){
      this.allEmpleados();
    }
  });
}else{
    this.setStatus('ERROR verifique Los campos');
  }
}


setStatus(status) {
  
  this.matSnackBar.open(status, null, {duration: 5000});
}

}

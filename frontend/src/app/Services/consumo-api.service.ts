import { Injectable, Host } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from '../Model/empleado';
import { MatSnackBar} from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class ConsumoAPIService {
//El host puede ser cambiado por uno remoto, en este caso el ejemplo sera Local 
private HOST = "http://localhost:3000";

private address={
    create:this.HOST+"/create",
    update:this.HOST+"/update",
    delete:this.HOST+"/delete",
    read:this.HOST+"/read",
    all:this.HOST+"/all"
  }

constructor(private http:HttpClient, private matSnackBar:MatSnackBar) { }

CreateEmpleado(empleado:Empleado){
try {
  let js = JSON.stringify(empleado);
  let headers = new HttpHeaders().set('Content-Type','application/json');
  this.http.post(this.address.create,js,{headers:headers}).subscribe(data=>{
    this.setStatus('Empleado Creado Correctamente')
  },err=>{
    if(err.status === 400){
      this.setStatus('ERROR verifique Los Datos Ingresados')
    }else{
      this.setStatus('El Servicio No Se encuentra Disponible')   
  }    
  });
} catch (error) {
  console.log(error)
  return false;
}
}

 UpdateEmpleado(empleado:Empleado){
  try {
    let js = JSON.stringify(empleado);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    this.http.put(this.address.update,js,{headers:headers}).subscribe(data=>{
      this.setStatus('Empleado Actualizado Correctamente')
    },err=>{
      if(err.status === 400){
        this.setStatus('ERROR verifique Los Datos Ingresados')
      }else{
        this.setStatus('El Servicio No Se encuentra Disponible')   
    }   
    });
  } catch (error) {
    console.log(error)
    return false;
  }
}

 readEmpleado(id:number,tipoID:string){
  try {
    let res: Empleado;
    let js = JSON.stringify({id,tipoID});
  return  this.http.get(this.address.read+'/'+id+'/'+tipoID).toPromise().then(data=>{
      res= <Empleado>  data;
      this.setStatus('Empleado Leido Correctamente')
      return res;
    }).catch(err=>{
      if(err.status === 400){
        this.setStatus('ERROR verifique Los Datos Ingresados')
      }else{
        if(err.status === 404){
          this.setStatus('No se Encuentra el Empleado')
        }else{
          this.setStatus('El Servicio No Se encuentra Disponible')   
        }
      }
      return undefined;
    })
    

  } catch (error) {
    console.log(error)
    return undefined;
  }
}
 deleteEmpleado(id:Number,tipoID:string){
  try {

   return this.http.delete(this.address.delete+'/'+id+'/'+tipoID).toPromise().then(data=>{
      this.setStatus('Lista De Empleado Obetida Correctamente');
      return true;
    }).catch(err=>{
      console.log(err)
      this.setStatus('Error Al Ejecutar Transaccion')
      return false;
    })
        
  } catch (error) {
    console.log(error)
    return undefined;
  }
}
 readAllEmpleados(){
  try {
    let listEMP : Empleado[];   
  return   this.http.get(this.address.all).toPromise().then(data=>{
      listEMP = <Empleado[]> data;
      this.setStatus('Lista De Empleados leidos Correctamente')
      return listEMP;
  }).catch(err=>{
    console.log(err)
    this.setStatus('Error Al Ejecutar Transaccion')
    return undefined;
  });
  } catch (error) {
    console.log(error)
    return undefined;
  }
}


setStatus(status) {
  this.matSnackBar.open(status, null, {duration: 5000});
}

}

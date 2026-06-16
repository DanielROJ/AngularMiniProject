import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from '../model/empleado';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ConsumoAPIService {
  // El host puede ser cambiado por uno remoto, en este caso el ejemplo será Local
  private HOST = 'http://localhost:3000';

  private address = {
    create: this.HOST + '/create',
    update: this.HOST + '/update',
    delete: this.HOST + '/delete',
    read: this.HOST + '/read',
    all: this.HOST + '/all',
  };

  constructor(
    private http: HttpClient,
    private matSnackBar: MatSnackBar
  ) {}

  CreateEmpleado(empleado: Empleado): void {
    try {
      const js = JSON.stringify(empleado);
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      this.http
        .post(this.address.create, js, { headers: headers })
        .subscribe({
          next: (data) => {
            this.setStatus('Empleado Creado Correctamente');
          },
          error: (err) => {
            if (err.status === 400) {
              this.setStatus('ERROR verifique Los Datos Ingresados');
            } else {
              this.setStatus('El Servicio No Se encuentra Disponible');
            }
          },
        });
    } catch (error) {
      console.log(error);
    }
  }

  UpdateEmpleado(empleado: Empleado): void {
    try {
      const js = JSON.stringify(empleado);
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      this.http
        .put(this.address.update, js, { headers: headers })
        .subscribe({
          next: (data) => {
            this.setStatus('Empleado Actualizado Correctamente');
          },
          error: (err) => {
            if (err.status === 400) {
              this.setStatus('ERROR verifique Los Datos Ingresados');
            } else {
              this.setStatus('El Servicio No Se encuentra Disponible');
            }
          },
        });
    } catch (error) {
      console.log(error);
    }
  }

  readEmpleado(id: number, tipoID: string): Promise<Empleado | undefined> {
    try {
      return this.http
        .get<Empleado>(this.address.read + '/' + id + '/' + tipoID)
        .toPromise()
        .then((data) => {
          if (data) {
            this.setStatus('Empleado Leido Correctamente');
            return data;
          }
          return undefined;
        })
        .catch((err) => {
          if (err.status === 400) {
            this.setStatus('ERROR verifique Los Datos Ingresados');
          } else if (err.status === 404) {
            this.setStatus('No se Encuentra el Empleado');
          } else {
            this.setStatus('El Servicio No Se encuentra Disponible');
          }
          return undefined;
        });
    } catch (error) {
      console.log(error);
      return Promise.resolve(undefined);
    }
  }

  deleteEmpleado(id: number, tipoID: string): Promise<boolean> {
    try {
      return this.http
        .delete(this.address.delete + '/' + id + '/' + tipoID)
        .toPromise()
        .then((data) => {
          this.setStatus('Empleado Eliminado Correctamente');
          return true;
        })
        .catch((err) => {
          console.log(err);
          this.setStatus('Error Al Ejecutar Transaccion');
          return false;
        });
    } catch (error) {
      console.log(error);
      return Promise.resolve(false);
    }
  }

  readAllEmpleados(): Promise<Empleado[] | undefined> {
    try {
      return this.http
        .get<Empleado[]>(this.address.all)
        .toPromise()
        .then((data) => {
          if (data) {
            this.setStatus('Lista De Empleados leidos Correctamente');
            return data;
          }
          return undefined;
        })
        .catch((err) => {
          console.log(err);
          this.setStatus('Error Al Ejecutar Transaccion');
          return undefined;
        });
    } catch (error) {
      console.log(error);
      return Promise.resolve(undefined);
    }
  }

  setStatus(status: string): void {
    this.matSnackBar.open(status, undefined, { duration: 5000 });
  }
}

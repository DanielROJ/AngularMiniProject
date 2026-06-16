import { Component, OnInit } from '@angular/core';
import { ConsumoAPIService } from 'src/app/services/consumo-api.service';
import { Empleado } from 'src/app/model/empleado';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rd-empleado',
  templateUrl: './rd-empleado.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [ConsumoAPIService],
})
export class RDEmpleadoComponent implements OnInit {
  public listEmpleados: Empleado[] = [];
  public items!: FormGroup;
  public tiposID = ['cc', 'nit', 'pass'];

  constructor(
    private apiService: ConsumoAPIService,
    private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar
  ) {
    this.items = this.formBuilder.group({
      idEmpleado: 0,
      type: '',
    });
  }

  ngOnInit(): void {
    this.allEmpleados();
  }

  ReadEmpleado(data: any): void {
    if (data.idEmpleado !== 0 && data.type !== '') {
      this.apiService.readEmpleado(data.idEmpleado, data.type).then((emp) => {
        if (emp) {
          this.listEmpleados = [];
          this.listEmpleados.push(emp);
        } else {
          this.setStatus('Empleado no Encontrado');
        }
      });
    } else {
      this.setStatus('ERROR verifique Los campos');
    }
  }

  allEmpleados(): void {
    this.listEmpleados = [];
    this.apiService.readAllEmpleados().then((data) => {
      if (data) {
        this.listEmpleados = data;
      }
    });
  }

  deleteEmpleado(data: any): void {
    if (data.idEmpleado !== 0 && data.type !== '') {
      this.apiService.deleteEmpleado(data.idEmpleado, data.type).then((data) => {
        if (data) {
          this.allEmpleados();
        }
      });
    } else {
      this.setStatus('ERROR verifique Los campos');
    }
  }

  setStatus(status: string): void {
    this.matSnackBar.open(status, undefined, { duration: 5000 });
  }
}

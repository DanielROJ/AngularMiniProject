import { Component, OnInit } from '@angular/core';
import { ConsumoAPIService } from 'src/app/services/consumo-api.service';
import { Empleado } from 'src/app/model/empleado';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { ErrorValidatorFrom } from 'src/app/util/errorValidatorFrom';

@Component({
  selector: 'app-uc-empleado',
  templateUrl: './uc-empleado.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [ConsumoAPIService],
})
export class UCEmpleadoComponent implements OnInit {
  private empleado!: Empleado;
  public tiposID = ['cc', 'nit', 'pass'];
  public items!: FormGroup;

  constructor(
    private apiService: ConsumoAPIService,
    private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar
  ) {
    this.items = this.formBuilder.group({
      idEmp: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      type: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      tel1: ['', Validators.required],
      tel2: ['', Validators.required],
      tel3: '',
      salario: '',
    });
  }

  ngOnInit(): void {}

  CrearEmpleado(): void {
    try {
      if (this.items.status !== 'INVALID' && this.items.value.type !== '') {
        this.empleado = new Empleado(this.items.value);
        this.apiService.CreateEmpleado(this.empleado);
        this.items.reset();
      } else {
        this.setStatus('Error Verifique Los Campos Ingresados');
      }
    } catch (error) {
      console.log('ERROR ' + error);
      this.setStatus('Error Verifique Los Campos Ingresados');
    }
  }

  ActualizarEmpleado(): void {
    try {
      if (this.items.status !== 'INVALID' && this.items.value.type !== '') {
        this.empleado = new Empleado(this.items.value);
        this.apiService.UpdateEmpleado(this.empleado);
      } else {
        this.setStatus('Error Verifique Los Campos Ingresados');
      }
    } catch (error) {
      this.setStatus('Error Verifique Los Campos Ingresados');
    }
  }

  setStatus(status: string): void {
    this.matSnackBar.open(status, undefined, { duration: 5000 });
  }

  checkError(controlName: string): boolean {
    return ErrorValidatorFrom.isFieldInvalid(this.items.get(controlName));
  }

  getErrorMessage(controlName: string): string {
    return ErrorValidatorFrom.getErrorMessage(this.items.get(controlName));
  }
}


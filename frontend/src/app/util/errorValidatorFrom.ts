//generate a class to check a form for errors and return a string with the error message if there are any errors based yn validators in the form

import { AbstractControl, FormGroup } from '@angular/forms';

export class ErrorValidatorFrom {
  static validateControlForm(formControl: AbstractControl | null): boolean {
    if (!formControl) return false;
    return formControl.invalid && (formControl.touched || formControl.dirty);
  }

  static getErrorMessage(formControl: AbstractControl | null): string {
    if (!formControl || !formControl.errors) return '';

    const errors = formControl.errors;

    if (errors['required']) {
      return 'Este campo es requerido';
    }
    if (errors['email']) {
      return 'Correo electrónico no válido';
    }
    if (errors['minlength']) {
      return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
    }
    if (errors['maxlength']) {
      return `Máximo ${errors['maxlength'].requiredLength} caracteres`;
    }
    if (errors['pattern']) {
      return 'Formato no válido';
    }

    return 'Campo inválido';
  }


  static isFieldInvalid(formControl: AbstractControl | null): boolean {
    return this.validateControlForm(formControl);
  }
}
export class Empleado {
  public idEmpleado!: number;
  public tipoIdentificacion!: string;
  public nombres!: string;
  public apellidos!: string;
  public correoElectronico!: string;
  public tel1!: number;
  public tel2!: number;
  public tel3!: number;
  public salarioMensual!: number;

  constructor(data: any) {
    this.idEmpleado = Number(data.idEmp);
    this.tipoIdentificacion = data.type;
    this.nombres = data.nombres;
    this.apellidos = data.apellidos;
    this.correoElectronico = data.correo;
    this.tel1 = Number(data.tel1);
    this.tel2 = Number(data.tel2);
    this.tel3 = Number(data.tel3);
    this.salarioMensual = Number(data.salario);
  }
}

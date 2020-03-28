export class Empleado {
    private idEmpleado:Number;
    private tipoIdentificacion:string;
    private nombres:string;
    private apellidos:string;
    private correoElectronico:string;
    private tel1:number;
    private tel2:number;
    private tel3:number;
    private salarioMensual:number;
    
    constructor(data:any){
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

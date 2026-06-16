/**
 * Modelo de Empleado - ORM Sequelize
 */
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/config.js';

export interface IEmpleado {
  idEmpleado: bigint;
  tipoIdentificacion: string;
  nombres: string;
  apellidos: string;
  correoElectronico: string;
  tel1?: string;
  tel2?: string;
  tel3?: string;
  salarioMensual: number;
}

export class Empleado extends Model<IEmpleado> implements IEmpleado {
  public idEmpleado!: bigint;
  public tipoIdentificacion!: string;
  public nombres!: string;
  public apellidos!: string;
  public correoElectronico!: string;
  public tel1?: string;
  public tel2?: string;
  public tel3?: string;
  public salarioMensual!: number;
}

Empleado.init(
  {
    idEmpleado: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      field: 'idempleado',
    },
    tipoIdentificacion: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'tipoidentificacion',
    },
    nombres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correoElectronico: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'correoelectronico',
      validate: {
        isEmail: true,
      },
    },
    tel1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tel2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tel3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salarioMensual: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'salariomensual',
    },
  },
  {
    sequelize,
    tableName: 'empleado',
    timestamps: false,
  }
);

export default Empleado;

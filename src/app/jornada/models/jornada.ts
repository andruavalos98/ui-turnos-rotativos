import { Empleado } from './../../empleado/models/empleado';
import { TipoJornada } from './../../tipo-jornada/models/tipo-jornada';

export interface Jornada {
  id?: number;
  empleado: Empleado;
  tipoDeJornadaLaboral: TipoJornada;
  fecha: Date;
  horaEntrada: Date;
  horaSalida: Date;
}

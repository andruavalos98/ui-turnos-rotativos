import { Empleado } from './empleado';

interface HoraPorTipoJornada {
  tipoDeJornada: string;
  horas: Date;
}

export interface EmpleadoViewModel {
  empleado: Empleado;
  horasPorCadaTipoJornada: Array<HoraPorTipoJornada>;
}

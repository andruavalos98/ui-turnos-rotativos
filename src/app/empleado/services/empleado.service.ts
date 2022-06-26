import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Empleado } from './../models/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(
      environment.apiUrl + '/jornada/listar/horas-cargadas-por-jornada'
    );
  }

  create(empleado: Empleado): Observable<any> {
    return this.http.post(environment.apiUrl + '/empleado/crear', empleado);
  }
}

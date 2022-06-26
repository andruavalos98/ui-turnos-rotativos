import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { TipoJornada } from './../models/tipo-jornada';

@Injectable({
  providedIn: 'root',
})
export class TipoJornadaService {
  endPoint: string = environment.apiUrl + '/jornada/tipo';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.endPoint + '/listar');
  }

  create(tipoJornada: TipoJornada): Observable<any> {
    return this.http.post(this.endPoint + '/crear', tipoJornada);
  }
}

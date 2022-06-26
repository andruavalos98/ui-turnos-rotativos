import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Jornada } from './../models/jornada';

@Injectable({
  providedIn: 'root',
})
export class JornadaService {
  endPoint: string = environment.apiUrl + '/jornada';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.endPoint + '/listar');
  }

  getById(id: number): Observable<any> {
    return this.http.get(this.endPoint + '/listar/' + id);
  }

  create(jornada: Jornada): Observable<any> {
    return this.http.post(this.endPoint + '/crear', jornada);
  }

  update(jornada: Jornada): Observable<any> {
    return this.http.patch(this.endPoint + '/modificar', jornada);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.endPoint + '/borrar/' + id);
  }
}

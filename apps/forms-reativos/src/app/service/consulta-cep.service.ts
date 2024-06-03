import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cep } from '../interfaces/cep';
@Injectable({
  providedIn: 'root',
})
export class ConsultaCepService {
  private endPoint = 'https://viacep.com.br/ws';

  constructor(private httpClient: HttpClient) {}

  consultarCep(cep: string): Observable<Cep> {
    return this.httpClient.get<Cep>(`${this.endPoint}/${cep}/json`);
  }
}

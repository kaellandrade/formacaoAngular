import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cep } from '../interfaces/cep';
import { Observable } from 'rxjs';
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

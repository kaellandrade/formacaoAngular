import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from '../../../interfaces/Pensamento';
import { Observable } from 'rxjs';

/**
 * Utilizando a injeção de dependência
 * Quando criamos no nível da raiz, o Angular irá criar uma instância
 * única e compartilhada de PensamentoService (singleton)
 */
@Injectable({
  // Classe pode ser injetada.
  providedIn: 'root', // Disponível para toda aplicação
})
export class PensamentoService {
  private readonly API: string = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  public listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(`${this.API}/pensamentos`);
  }

  public criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(`${this.API}/pensamentos`, pensamento);
  }

  public editar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.put<Pensamento>(
      `${this.API}/pensamentos/${pensamento.id}`,
      pensamento
    );
  }

  public excluir(pensamentoID: string): Observable<Pensamento> {
    return this.http.delete<Pensamento>(
      `${this.API}/pensamentos/${pensamentoID}`
    );
  }

  public buscarPorId(id: string): Observable<Pensamento> {
    return this.http.get<Pensamento>(`${this.API}/pensamentos/${id}`);
  }
}

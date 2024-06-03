import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pensamento } from '../../../interfaces/Pensamento';

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

  public listar(
    pagina: number,
    busca: string,
    favoritos: boolean,
  ): Observable<HttpResponse<Pensamento[]>> {
    const ITENS_POR_PAGINA = 6;
    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', ITENS_POR_PAGINA)
      .set('q', busca);

    if (favoritos) {
      params = params.set('favorito', favoritos);
    }

    return this.http.get<Pensamento[]>(`${this.API}/pensamentos`, {
      params,
      observe: 'response',
    });
  }

  public criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(`${this.API}/pensamentos`, pensamento);
  }

  public editar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.put<Pensamento>(
      `${this.API}/pensamentos/${pensamento.id}`,
      pensamento,
    );
  }

  public excluir(pensamentoID: string): Observable<Pensamento> {
    return this.http.delete<Pensamento>(
      `${this.API}/pensamentos/${pensamentoID}`,
    );
  }

  public buscarPorId(id: string): Observable<Pensamento> {
    return this.http.get<Pensamento>(`${this.API}/pensamentos/${id}`);
  }
}

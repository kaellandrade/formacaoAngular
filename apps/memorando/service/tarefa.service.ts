import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Tarefa } from '../interface/tarefa';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  tarefa$: Observable<Tarefa[]>;
  private readonly API = 'http://localhost:3333/memorando-back';
  private tarefasSubject = new BehaviorSubject<Tarefa[]>([]);

  constructor(private http: HttpClient) {
    this.tarefa$ = this.tarefasSubject.asObservable();
  }

  listar(): void {
    const params = new HttpParams().appendAll({
      _sort: 'id',
      _order: 'desc',
    });

    this.http.get<Tarefa[]>(this.API, { params }).subscribe((tarefas) => {
      let tarefasTemp = this.tarefasSubject.getValue();
      tarefasTemp = tarefasTemp.concat(tarefas);
      this.tarefasSubject.next(tarefasTemp);
    });
  }

  criar(tarefa: Tarefa): void {
    this.http.post<Tarefa>(this.API, tarefa).subscribe((novaTarefa) => {
      const tarefas = this.tarefasSubject.getValue();
      tarefas.unshift(novaTarefa);
    });
  }

  editar(tarefa: Tarefa): void {
    const url = `${this.API}/${tarefa.id}`;
    this.http.put<Tarefa>(url, tarefa).subscribe((tarefaEditada) => {
      const tarefas = this.tarefasSubject.getValue();
      const index = tarefas.findIndex(
        (tarefa) => tarefa.id === tarefaEditada.id,
      );
      if (index !== -1) {
        tarefas[index] = tarefaEditada;
        this.tarefasSubject.next(tarefas);
      }
    });
  }

  excluir(id: number): void {
    const url = `${this.API}/${id}`;
    this.http.delete<Tarefa>(url).subscribe(() => {
      const tarefas = this.tarefasSubject.getValue();
      const index = tarefas.findIndex((tarefa) => tarefa.id === id);
      if (index !== -1) {
        tarefas.splice(index, 1);
        this.tarefasSubject.next(tarefas);
      }
    });
  }

  buscarPorId(id: number): Observable<Tarefa> {
    const url = `${this.API}/${id}`;
    return this.http.get<Tarefa>(url);
  }

  atualizarStatusTarefa(tarefa: Tarefa): void {
    tarefa.statusFinalizado = !tarefa.statusFinalizado;
    this.editar(tarefa);
  }
}

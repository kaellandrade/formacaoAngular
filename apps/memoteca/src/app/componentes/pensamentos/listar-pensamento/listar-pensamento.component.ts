import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';

import { Pensamento } from '../../../../interfaces/Pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: [
    './listar-pensamento.component.scss',
    '../pensamento/pensamento.component.scss',
  ],
})
export class ListarPensamentoComponent implements OnInit {
  public listaPensamentos: Array<Pensamento> = [];
  public totalPensamentos = 0;
  public next = false;
  public filtro = '';
  public apenasFavoritos = false;
  public listaFavoritos: Pensamento[] = [];
  public isLoading = false;

  private paginaAtual = 1;
  private readonly TAMANHO_MINIMO_PALAVRA_BUSCA = 4;

  constructor(private service: PensamentoService) {}

  /**
   * Ciclo de vida do componente.
   */
  public ngOnInit(): void {
    this.carregarTodosPensamentos();
  }

  public atualizarPensamento(): void {
    this.carregarTodosPensamentos();
  }

  public filtrarPensamentosFavoritos() {
    this.paginaAtual = 1;
    this.carregarTodosPensamentos();
  }

  public getTitulo(): string {
    if (this.filtro.length && this.apenasFavoritos) {
      return `Busca por '${this.filtro}' favoritados`;
    }
    if (this.apenasFavoritos) {
      return 'Apenas favoritos';
    }
    if (this.filtro.length) {
      return `Busca por '${this.filtro}'`;
    }
    return 'Todos os pensamentos';
  }

  public carregarMaisPensamentos(): void {
    if (this.next) {
      this.isLoading = true;
      this.service
        .listar(++this.paginaAtual, this.filtro.trim(), this.apenasFavoritos)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe((response: HttpResponse<Pensamento[]>) => {
          if (response.body) {
            this.totalPensamentos = this.listaPensamentos.length;
            this.listaPensamentos.push(...response.body);
            this.next = this.hasNext(response.headers);
          }
        });
    }
  }

  public filtrarPensamentos(): void {
    if (this.filtro.trim().length >= this.TAMANHO_MINIMO_PALAVRA_BUSCA) {
      this.service
        .listar(1, this.filtro.trim(), this.apenasFavoritos)
        .subscribe((response: HttpResponse<Pensamento[]>) => {
          if (response.body) {
            this.listaPensamentos = response.body;
            this.totalPensamentos = this.listaPensamentos.length;
            this.next = this.hasNext(response.headers);
          }
        });
    }
    if (this.filtro.trim().length === 0) {
      this.carregarTodosPensamentos();
    }
  }

  private hasNext(httpsHeaders: HttpHeaders): boolean {
    if (httpsHeaders.get('Link')?.length) {
      const links: Array<string> = httpsHeaders.get('Link')?.split(', ') || [];
      return links.some((link) => link.includes('rel="next"'));
    }
    return false;
  }

  private carregarTodosPensamentos(): void {
    this.isLoading = true;
    this.service
      .listar(1, this.filtro, this.apenasFavoritos)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((response: HttpResponse<Pensamento[]>) => {
        if (response.body) {
          this.listaPensamentos = response.body;
          this.totalPensamentos = this.listaPensamentos.length;
          this.next = this.hasNext(response.headers);
          if (this.apenasFavoritos) {
            this.listaFavoritos = response.body;
          }
        }
      });
  }
}

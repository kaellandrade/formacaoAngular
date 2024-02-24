import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../../../interfaces/Pensamento';
import { PensamentoService } from '../pensamento.service';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
	selector: 'app-listar-pensamento',
	templateUrl: './listar-pensamento.component.html',
	styleUrls: ['./listar-pensamento.component.scss'],
})
export class ListarPensamentoComponent implements OnInit {
	private paginaAtual: number = 1;
	private readonly TAMANHO_MINIMO_PALAVRA_BUSCA = 4;
	public listaPensamentos: Array<Pensamento> = [];
	public totalPensamentos: number = 0;
	public next: boolean = false;
	public filtro: string = '';

	constructor(private service: PensamentoService) {}

	/**
	 * Ciclo de vida do componente.
	 */
	public ngOnInit(): void {
		this.carregarTodosPensamentos();
	}

	public carregarMaisPensamentos(): void {
		if (this.next) {
			this.service
				.listar(++this.paginaAtual, this.filtro.trim())
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
				.listar(1, this.filtro.trim())
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
			return links.some(link => link.includes('rel="next"'));
		}
		return false;
	}

	private carregarTodosPensamentos(): void {
		this.service
			.listar(1, '')
			.subscribe((response: HttpResponse<Pensamento[]>) => {
				if (response.body) {
					this.listaPensamentos = response.body;
					this.totalPensamentos = this.listaPensamentos.length;
					this.next = this.hasNext(response.headers);
				}
			});
	}
}

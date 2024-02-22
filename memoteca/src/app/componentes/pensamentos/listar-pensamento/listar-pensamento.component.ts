import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../../../interfaces/Pensamento';
import { PensamentoService } from '../pensamento.service';
import { PensamentoRequestShape } from 'src/interfaces/PensamentoRequestShape';

@Component({
	selector: 'app-listar-pensamento',
	templateUrl: './listar-pensamento.component.html',
	styleUrls: ['./listar-pensamento.component.scss'],
})
export class ListarPensamentoComponent implements OnInit {
	listaPensamentos: Array<Pensamento> = [];
	totalPensamentos: number = 0;
	paginaAtual: number = 1;
	next: boolean = false;

	constructor(private service: PensamentoService) {}

	/**
	 * Ciclo de vida do componente.
	 */
	public ngOnInit(): void {
		this.service
			.listar(this.paginaAtual)
			.subscribe((listaPensamentos: PensamentoRequestShape) => {
				this.totalPensamentos = listaPensamentos.items;
				this.listaPensamentos = listaPensamentos.data;
				this.next = Boolean(listaPensamentos.next);
			});
	}

	public carregarMaisPensamentos(): void {
		this.service
			.listar(++this.paginaAtual)
			.subscribe((listaPensamentos: PensamentoRequestShape) => {
				this.totalPensamentos = listaPensamentos.items;
				this.listaPensamentos.push(...listaPensamentos.data);
				this.next = Boolean(listaPensamentos.next);
			});
	}
}

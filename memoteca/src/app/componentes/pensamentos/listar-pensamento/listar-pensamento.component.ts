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
	listaPensamentos: ReadonlyArray<Pensamento> = [];
	totalPensamentos: number = 0;
	paginaAtual: number = 1;

	constructor(private service: PensamentoService) {}

	/**
	 * Ciclo de vida do componente.
	 */
	ngOnInit(): void {
		this.service
			.listar(this.paginaAtual)
			.subscribe((listaPensamentos: PensamentoRequestShape) => {
				this.totalPensamentos = listaPensamentos.items;
				this.listaPensamentos = listaPensamentos.data;
			});
	}
}

import { Component, Input, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../../../../interfaces/Pensamento';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
	selector: 'app-excluir-pensamento',
	templateUrl: './excluir-pensamento.component.html',
	styleUrls: ['./excluir-pensamento.component.scss'],
})
export class ExcluirPensamentoComponent implements OnInit {
	public pensamento!: Pensamento;

	constructor(
		private service: PensamentoService,
		private router: Router, // Para o redirect
		private route: ActivatedRoute // Fornece informações sobre os parâmetros das rotas.
	) {}

	public ngOnInit(): void {
		// Snapshot -> Captura a rota no momento que foi acessado
		// paramMap  ->  Informações dos parâmetros opcionais e obrigatórios.

		const id: string = String(this.route.snapshot.paramMap.get('id'));
		this.service.buscarPorId(id).subscribe((pensamento: Pensamento) => {
			this.pensamento = pensamento;
		});
	}

	public excluirPensamento(): void {
		if (this.pensamento.id) {
			this.service.excluir(this.pensamento.id).subscribe(() => {
				this.router.navigate(['/listarPensamento']).then(r => {});
			});
		}
	}

	public cancelar(): void {
		this.router.navigate(['/listarPensamento']).then(r => {});
	}
}

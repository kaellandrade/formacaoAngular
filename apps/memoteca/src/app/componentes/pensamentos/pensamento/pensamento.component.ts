import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../../../../interfaces/Pensamento';
import { ModelosPensamentos } from '../../../../interfaces/ModelosPensamentos';
import { PensamentoService } from '../pensamento.service';

@Component({
	selector: 'app-pensamento',
	templateUrl: './pensamento.component.html',
	styleUrls: ['./pensamento.component.scss'],
})
export class PensamentoComponent implements OnInit {
	private static readonly TAMANHO_MAXIMO_STRING = 256;
	@Input()
	public pensamento: Pensamento;
	@Input()
	public listaFavoritos: Pensamento[] = [];

	constructor(private service: PensamentoService) {
		this.pensamento = {
			id: '0',
			conteudo: '',
			modelo: ModelosPensamentos.MODELO1,
			autoria: '',
			favorito: false,
		};
	}

	ngOnInit(): void {
		return;
	}

	public larguraPensamento(): string {
		if (
			this.pensamento.conteudo.length >=
			PensamentoComponent.TAMANHO_MAXIMO_STRING
		) {
			return 'pensamento-g';
		}
		return 'pensamento-p';
	}

	public toggleFavoritar(): void {
		let pensamento: Pensamento = {
			...this.pensamento,
			favorito: !this.pensamento.favorito,
		};

		this.service.editar(pensamento).subscribe(pensamentoAtualizado => {
			if (pensamentoAtualizado.favorito === pensamento.favorito) {
				// Foi atualizado com sucesso!
				this.pensamento.favorito = pensamentoAtualizado.favorito;
				this.listaFavoritos.splice(
					this.listaFavoritos.indexOf(this.pensamento),
					1
				);
			}
		});
	}
	public getSrcFavoritoImgIcon(): string {
		if (this.pensamento.favorito) {
			return 'pi pi-heart-fill';
		}
		return 'pi pi-heart';
	}
}

import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroVolumeInfo } from 'src/app/models/LivroVolumeInfo';
import { Item, Livro } from 'src/app/models/interfaces';
import { LivroService } from 'src/app/service/livro.service';

@Component({
	selector: 'app-lista-livros',
	templateUrl: './lista-livros.component.html',
	styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent implements OnDestroy {
	listaLivros: Livro[];
	campoBusca: string = '';
	subscription: Subscription;

	constructor(private serviceGoogleAPIBook: LivroService) {}
	buscarLivros(): void {
		this.subscription = this.serviceGoogleAPIBook
			.buscar(this.campoBusca)
			.subscribe({
				next: items => {
					this.listaLivros = this.parseToLivros(items);
				},
			});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	private parseToLivros(items: Item[]): Livro[] {
		return items.reduce((acumulador: Livro[], atual: Item) => {
			let livro: Livro = new LivroVolumeInfo(atual);
			return acumulador.concat(livro);
		}, []);
	}
}

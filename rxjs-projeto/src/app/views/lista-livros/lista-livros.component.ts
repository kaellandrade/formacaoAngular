import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Livro } from 'src/app/models/interfaces';
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

	private parseToLivros(items: any[]): Livro[] {
		return items.reduce(
			(acumulador: Livro[], atual: { [key: string]: any }) => {
				return acumulador.concat({
					title: atual['volumeInfo']?.title,
					authors: atual['volumeInfo']?.authors,
					publishedDate: atual['volumeInfo']?.publishedDate,
					description: atual['volumeInfo']?.description,
					thumbnail: atual['volumeInfo']['imageLinks'],
					language: atual['volumeInfo']?.language,
					categories: atual['volumeInfo']?.categories,
					publisher: atual['volumeInfo']?.publisher,
				});
			},
			[]
		);
	}
}

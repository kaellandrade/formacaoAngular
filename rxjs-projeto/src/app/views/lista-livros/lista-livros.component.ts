import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
	EMPTY,
	catchError,
	debounceTime,
	distinctUntilChanged,
	filter,
	map,
	switchMap,
	tap,
	throwError,
} from 'rxjs';
import { LivroVolumeInfo } from 'src/app/models/LivroVolumeInfo';
import { Item, Livro } from 'src/app/models/interfaces';
import { LivroService } from 'src/app/service/livro.service';

const TAMANHO_MIN_BUSCA = 3;
const DELAY_BUSCA = 500;
@Component({
	selector: 'app-lista-livros',
	templateUrl: './lista-livros.component.html',
	styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
	campoBusca = new FormControl();
	mensagemErro = '';

	constructor(private serviceGoogleAPIBook: LivroService) {}

	livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
		debounceTime(DELAY_BUSCA),
		filter((valorDigital: string) => valorDigital.length >= TAMANHO_MIN_BUSCA), // filtrando para buscar apenas com 3 ou mais char
		distinctUntilChanged(),
		switchMap(valorDigitado => this.serviceGoogleAPIBook.buscar(valorDigitado)),
		tap(resp => console.log(resp)),
		map((items: Item[]) => items && this.parseToLivros(items)),
		catchError(() => {
			this.mensagemErro = 'Ops, ocorreu um erro. Recarregue a aplicação!';
			return EMPTY; // callback de inscrição para quando não queremos utilizar o error.
		})
	);

	private parseToLivros(items: Item[]): Livro[] {
		return items.reduce((acumulador: Livro[], atual: Item) => {
			let livro: Livro = new LivroVolumeInfo(atual);
			return acumulador.concat(livro);
		}, []);
	}
}

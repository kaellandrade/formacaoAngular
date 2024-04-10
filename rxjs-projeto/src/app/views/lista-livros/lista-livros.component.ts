import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
	debounceTime,
	distinctUntilChanged,
	filter,
	map,
	switchMap,
	tap,
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

	constructor(private serviceGoogleAPIBook: LivroService) {}

	/*
	TODO: Documentar os operadores
	- Busca type ahead
	- switchmap
	- a ideia desse operador é trocaar os valores e passar ao servidor só o último valor 'D', desconsiderando os valores anteirores A,B,C
	A -> B -> C -> D (apenas o D será o valor passado)
	*/
	livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
		debounceTime(DELAY_BUSCA),
		filter((valorDigital: string) => valorDigital.length >= TAMANHO_MIN_BUSCA), // filtrando para buscar apenas com 3 ou mais char
		distinctUntilChanged(),
		switchMap(valorDigitado => this.serviceGoogleAPIBook.buscar(valorDigitado)),
		tap(resp => console.log(resp)),
		map(items => items && this.parseToLivros(items))
	);

	buscarLivros(): void {
		console.log('ok');
		// 	this.subscription = this.serviceGoogleAPIBook
		// 		.buscar(this.campoBusca)
		// 		.subscribe({
		// 			next: items => {
		// 				this.listaLivros = this.parseToLivros(items);
		// 			},
		// 		});
	}

	private parseToLivros(items: Item[]): Livro[] {
		return items.reduce((acumulador: Livro[], atual: Item) => {
			let livro: Livro = new LivroVolumeInfo(atual);
			return acumulador.concat(livro);
		}, []);
	}
}

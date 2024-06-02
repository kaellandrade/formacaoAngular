import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  EMPTY,
  filter,
  map,
  of,
  share,
  switchMap
} from 'rxjs';

import { Item, Livro, LivrosResultado } from '../../models/interfaces';
import { LivroVolumeInfo } from '../../models/LivroVolumeInfo';
import { LivroService } from '../../service/livro.service';


const TAMANHO_MIN_BUSCA = 3;
const DELAY_BUSCA = 500;

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {
	campoBusca = new FormControl();
	mensagemErro = '';
	livrosResutado: LivrosResultado;
	comum$ = this.campoBusca.valueChanges.pipe(
		debounceTime(DELAY_BUSCA),
		filter((valorDigital: string) => valorDigital.length >= TAMANHO_MIN_BUSCA),
		distinctUntilChanged(),
		switchMap(valorDigitado => this.serviceGoogleAPIBook.buscar(valorDigitado)),
		share()
	);

	totalDeLivros$ = this.comum$.pipe(
		map((result: LivrosResultado) => {
			this.livrosResutado = result;
		}),
		catchError(erro => {
			console.warn(erro);
			return of();
		})
	);

	livrosEncontrados$ = this.comum$.pipe(
		map((resultado: LivrosResultado) => resultado.items ?? []),
		map((items: Item[]) => this.parseToLivros(items)),
		catchError(() => {
			this.mensagemErro = 'Ops, ocorreu um erro. Recarregue a aplicação!';
			return EMPTY; // callback de inscrição para quando não queremos utilizar o error.
		})
	);

	constructor(private serviceGoogleAPIBook: LivroService) {}

	private parseToLivros(items: Item[]): Livro[] {
		return items.reduce((acumulador: Livro[], atual: Item) => {
			const livro: Livro = new LivroVolumeInfo(atual);
			return acumulador.concat(livro);
		}, []);
	}
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Item, Livro, LivrosResultado } from '../models/interfaces';

@Injectable({
	providedIn: 'root',
})
export class LivroService {
	private readonly API_GOOGLE = 'https://www.googleapis.com/books/v1/volumes';

	constructor(private http: HttpClient) {}
	public buscar(termoDigitado: string): Observable<Array<Item>> {
		const params = new HttpParams().append('q', termoDigitado);
		return this.http
			.get<LivrosResultado>(this.API_GOOGLE, { params })
			.pipe(map(resultado => resultado.items));
	}
}
// PIPE Agrupar diversos outros tipos de operadores
// TAP utilizado pra debugar não modifica os dados, serve apenas para visualizá-los

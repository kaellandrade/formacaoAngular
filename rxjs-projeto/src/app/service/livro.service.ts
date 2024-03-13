import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LivroService {
	private readonly API_GOOGLE = 'https://www.googleapis.com/books/v1/volumes';

	constructor(private http: HttpClient) {}

	public buscar(termoDigitado: string): Observable<any> {
		const params = new HttpParams().append('q', termoDigitado);
		return this.http.get(this.API_GOOGLE, { params });
	}
}

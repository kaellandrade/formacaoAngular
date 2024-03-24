import { Component, Input, OnInit } from '@angular/core';
import { IdiomaLivro, Livro } from 'src/app/models/interfaces';

@Component({
	selector: 'app-livro',
	templateUrl: './livro.component.html',
	styleUrls: ['./livro.component.css'],
})
export class LivroComponent implements OnInit {
	@Input() livro: Livro;
	modalAberto: boolean;
	@Input() isCountrySuported: boolean = false;

	ngOnInit(): void {
		this.isCountrySuported = Object.values(IdiomaLivro).includes(
			this.livro.language
		);
	}

	onModalChange(evento: boolean): void {
		this.modalAberto = evento;
	}
}

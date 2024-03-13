import { Component } from '@angular/core';
import { LivroService } from 'src/app/service/livro.service';

@Component({
	selector: 'app-lista-livros',
	templateUrl: './lista-livros.component.html',
	styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
	listaLivros: [];
	campoBusca: string = '';

	constructor(private serviceGoogleAPIBook: LivroService) {}
	buscarLivros(): void {
		this.serviceGoogleAPIBook.buscar(this.campoBusca).subscribe(testes => {
			console.log('ok');
		});
	}
}

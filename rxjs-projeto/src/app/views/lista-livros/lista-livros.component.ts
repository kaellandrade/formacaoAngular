import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroService } from 'src/app/service/livro.service';

@Component({
	selector: 'app-lista-livros',
	templateUrl: './lista-livros.component.html',
	styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent implements OnDestroy {
	listaLivros: [];
	campoBusca: string = '';
	subscription: Subscription;

	constructor(private serviceGoogleAPIBook: LivroService) {}
	buscarLivros(): void {
		this.subscription = this.serviceGoogleAPIBook
			.buscar(this.campoBusca)
			.subscribe({
				next: retornoAPI => console.log(retornoAPI.totalItems),
				error: error => console.error(error), // Encerra o clico de vida do Observlable
				complete: () => console.log('Observable completado!'),
			});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}

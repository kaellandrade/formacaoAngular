import { Component, DoCheck, OnInit, SimpleChanges } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
	listaCompra!: Item[];
	editItem!: Item;

	constructor(private listaService: ListaDeCompraService) {}
	ngDoCheck(): void {
		console.log('ngDoCheck foi chamado!');
		this.listaService.persistirNoLocalStorage();
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log('ok');
	}
	ngOnInit(): void {
		this.listaCompra = this.listaService.getListaDeCompra();
	}
	editarItem(item: Item) {
		this.editItem = item;
	}

	deleteItem(idItem: number) {
		this.listaService.deletarItem(idItem);
	}
	apagarTudo() {
		const resposta = confirm('Remover todos os itens ?');
		if (resposta) {
			this.listaService.deletarTodaLista();
		}
	}
}

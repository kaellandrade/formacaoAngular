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

	constructor(private listaSercice: ListaDeCompraService) {}
	ngDoCheck(): void {
		console.log('ngDoCheck foi chamado!');
		this.listaSercice.persistirNoLocalStorage();
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log('ok');
	}
	ngOnInit(): void {
		this.listaCompra = this.listaSercice.getListaDeCompra();
	}
	editarItem(item: Item) {
		this.editItem = item;
	}
}

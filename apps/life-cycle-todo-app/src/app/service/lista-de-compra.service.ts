import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';
const KEY_LOCAL_STORAGE = 'ITENS';

@Injectable({
	providedIn: 'root',
})
export class ListaDeCompraService {
	private listaDeCompra: Item[] = [];

	constructor() {
		this.listaDeCompra = JSON.parse(
			localStorage.getItem(KEY_LOCAL_STORAGE) || '[]'
		).map((item: any): Item => {
			return {
				comprado: Boolean(item['comprado']),
				data: new Date(item['data']),
				editado: Boolean(item['editado']),
				nome: item['nome'],
				dataEdicao: item['dataEdicao'] ? new Date(item['dataEdicao']) : null,
				id: item['id'],
			};
		});
	}

	getListaDeCompra() {
		return this.listaDeCompra;
	}
	private criarItem(nomeDoItem: string): Item {
		const id = this.listaDeCompra.length + 1;
		return this.configurarTodo(id, nomeDoItem, false, false, new Date());
	}

	adicionarItemLista(nomeDoItem: string): void {
		const item = this.criarItem(nomeDoItem);
		this.listaDeCompra.push(item);
	}
	atualizarItemInLoco(editItem: Item, novoNome: string) {
		for (let index = 0; index < this.listaDeCompra.length; index++) {
			if (this.listaDeCompra[index].id === editItem.id) {
				this.listaDeCompra[index] = this.configurarTodo(
					Number(editItem.id),
					novoNome,
					this.listaDeCompra[index].comprado,
					true,
					new Date(this.listaDeCompra[index].data),
					new Date()
				);
				break;
			}
		}
	}

	deletarItem(itemId: number) {
		const index = this.listaDeCompra.findIndex(item => item.id === itemId);
		this.listaDeCompra.splice(index, 1);
	}

	deletarTodaLista() {
		this.listaDeCompra.splice(0);
	}

	public persistirNoLocalStorage() {
		localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(this.listaDeCompra));
	}

	private configurarTodo(
		id: number,
		nome: string,
		comprado: boolean,
		editado: boolean,
		data: Date,
		dataEdicao?: Date
	): Item {
		return {
			id,
			nome,
			data,
			comprado,
			editado,
			dataEdicao,
		};
	}
}

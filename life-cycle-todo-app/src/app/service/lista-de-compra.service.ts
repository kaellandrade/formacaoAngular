import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ListaDeCompraService {
	private listaDeCompra: Item[] = [
		{
			id: 1,
			nome: 'Queijo prato',
			data: 'Segunda-feira (31/10/2022) às 08:30',
			comprado: false,
			editado: false,
		},
		{
			id: 2,
			nome: 'Leite integral',
			data: 'Segunda-feira (31/10/2022) às 08:30',
			comprado: false,
			editado: false,
		},
		{
			id: 3,
			nome: 'Mamão papaia',
			data: 'Segunda-feira (31/10/2022) às 08:30',
			comprado: true,
			editado: false,
		},
	];

	constructor() {
		console.log('Instanciando dependências necessárias para o serviço.');
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
					this.listaDeCompra[index].data,
					new Date().toLocaleString('pt-BR')
				);
				break;
			}
		}
	}

	private configurarTodo(
		id: number,
		nome: string,
		comprado: boolean,
		editado: boolean,
		data: Date | string,
		dataEdicao?: Date | string
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

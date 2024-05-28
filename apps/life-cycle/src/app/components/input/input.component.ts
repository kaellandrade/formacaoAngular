import {
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../../interfaces/iItem';
import { ListaDeCompraService } from '../../service/lista-de-compra.service';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges {
	@Input() editItem!: Item;
	@Input()
	editando = false;
	textoBtn = 'Salvar';

	valorItem!: string;
	disabled = true;

	constructor(private listaCompraService: ListaDeCompraService) {}
	// Preparando minhas props
	ngOnChanges(changes: SimpleChanges): void {
		this.setupEdit(changes);
	}

	ngOnInit(): void {
		// console.log('INPUT ngOnInit');
	}
	handleSubmit(form: NgForm) {
		if (!form.valid) {
			return;
		}
		if (!this.editando) {
			this.adicionarItem();

			return;
		}
		this.atualizarItem();
	}

	private atualizarItem(): void {
		this.listaCompraService.atualizarItemInLoco(this.editItem, this.valorItem);
		this.setupBtnSubmit();
		this.limparCampo();
	}
	private adicionarItem(): void {
		this.listaCompraService.adicionarItemLista(this.valorItem);
		this.limparCampo();
		this.setupBtnSubmit();
	}

	private limparCampo(): void {
		this.valorItem = '';
	}
	private setupEdit(changes: SimpleChanges): void {
		if (!changes['editItem'].firstChange) {
			this.editando = true;
			this.textoBtn = 'Atualizar item';
			this.valorItem = this.editItem?.nome;
		}
	}

	private setupBtnSubmit(): void {
		this.editando = false;
		this.textoBtn = 'Salvar';
	}
}

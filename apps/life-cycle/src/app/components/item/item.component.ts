import {
	Component,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
	EventEmitter,
	OnDestroy,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../../interfaces/iItem';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
	@Input() item!: Item;
	@Input()
	optionsDate: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		weekday: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	};

	@Output() emitindoItemParaEditar = new EventEmitter();
	@Output() emitindoIdDelete = new EventEmitter();

	faPen = faPen;
	faTrash = faTrash;

	constructor() {}

	editarItem(): void {
		this.emitindoItemParaEditar.emit(this.item); // Emitindo uma informação
	}
	toggleCheck() {
		this.item.comprado = !this.item.comprado;
	}
	deletarItem() {
		this.emitindoIdDelete.emit(this.item.id);
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log('onChanges');
	}

	ngOnInit(): void {
		// console.log('onInit');
	}
	ngOnDestroy(): void {
		console.log('Lógica de limpeza...');
	}
}

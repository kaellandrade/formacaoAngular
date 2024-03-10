import {
	Component,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
	EventEmitter,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges {
	@Input() item!: Item;
	@Output() emitindoItemParaEditar = new EventEmitter();
	faPen = faPen;
	faTrash = faTrash;

	constructor() {}
	ngOnChanges(changes: SimpleChanges): void {
		// console.log('onChanges');
	}

	ngOnInit(): void {
		// console.log('onInit');
	}

	editarItem(): void {
		this.emitindoItemParaEditar.emit(this.item); // Emitindo uma informação
		console.log('click!!');
	}
}

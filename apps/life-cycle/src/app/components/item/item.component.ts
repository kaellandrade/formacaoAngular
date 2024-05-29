import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../../interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item!: Item;
  @Input()
  optionsDate: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdDelete = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;


  editarItem(): void {
    this.emitindoItemParaEditar.emit(this.item); // Emitindo uma informação
  }

  toggleCheck() {
    this.item.comprado = !this.item.comprado;
  }

  deletarItem() {
    this.emitindoIdDelete.emit(this.item.id);
  }
}

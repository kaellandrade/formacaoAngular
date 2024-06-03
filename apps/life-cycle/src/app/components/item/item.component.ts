import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Item } from '../../interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
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
    second: 'numeric',
  };

  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdDelete = new EventEmitter();
  @Input() editItem: Item;
  @Input() readOnly!: boolean;
  @Output() bloquearItens = new EventEmitter();

  editarItem(): void {
    this.emitindoItemParaEditar.emit(this.item);
    this.bloquearItens.emit();
  }

  toggleCheck(readOnly: boolean) {
    if (!readOnly) {
      this.item.comprado = !this.item.comprado;
    }
  }

  deletarItem() {
    this.emitindoIdDelete.emit(this.item.id);
  }
}

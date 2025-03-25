import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { Product } from '../../../types/product.inteface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input()
  product: Product | null = null;

  @Input()
  isManagable = false;

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onDelete = new EventEmitter<Product | null>();

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onEdit = new EventEmitter<Product | null>();

  onDeleteClick(): void {
    this.onDelete.emit(this.product);
  }

  onEditClick(): void {
    this.onEdit.emit(this.product);
  }
}

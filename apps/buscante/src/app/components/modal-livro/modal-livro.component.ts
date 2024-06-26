import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LivroVolumeInfo } from '../../models/LivroVolumeInfo';

const body = document.querySelector('body');

@Component({
  selector: 'app-modal-livro',
  templateUrl: './modal-livro.component.html',
  styleUrls: ['./modal-livro.component.css'],
})
export class ModalLivroComponent {
  @Input() livro: LivroVolumeInfo;
  @Input() statusModal = true;
  @Output() mudouModal = new EventEmitter();

  fecharModal(): void {
    this.statusModal = false;
    this.mudouModal.emit(this.statusModal);
    body.style.overflow = 'scroll';
  }

  esconderScroll(): void {
    if (this.statusModal) {
      body.style.overflow = 'hidden';
    }
  }

  lerPrevia(): void {
    window.open(this.livro.previewLink, '_blank');
  }
}
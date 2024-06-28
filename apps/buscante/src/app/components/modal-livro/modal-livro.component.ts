import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LivroVolumeInfo } from '../../models/LivroVolumeInfo';

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
  }

  lerPrevia(): void {
    window.open(this.livro.previewLink, '_blank');
  }
}

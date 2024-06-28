import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LivroVolumeInfo } from '../../models/LivroVolumeInfo';

@Component({
  selector: 'app-modal-livro',
  templateUrl: './modal-livro.component.html',
  styleUrls: ['./modal-livro.component.css'],
})
export class ModalLivroComponent {
  @Input() livro: LivroVolumeInfo;
  @Input() visivel = false;
  @Output() closeModal = new EventEmitter<boolean>();

  fecharModal(): void {
    this.visivel = false;
    this.closeModal.emit(this.visivel);
  }

  lerPrevia(): void {
    window.open(this.livro.previewLink, '_blank');
  }
}

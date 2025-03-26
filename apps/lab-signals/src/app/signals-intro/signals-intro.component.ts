import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

import { Elemento, LISTA_INICIAL } from '../../shared/models';

@Component({
  selector: 'app-signals-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals-intro.component.html',
  styleUrl: './signals-intro.component.css',
})
export class SignalsIntroComponent {
  // signal gravável (writable signal)
  elementoSelecionado: WritableSignal<Elemento | null> =
    signal<Elemento | null>(null);

  elementos: Elemento[] = LISTA_INICIAL;

  selecionarElemento(elemento: Elemento): void {
    this.elementoSelecionado.set(elemento);
  }
}

import { CommonModule } from '@angular/common';
import { Component, computed, signal, WritableSignal } from '@angular/core';

import { Elemento, LISTA_INICIAL } from '../../shared/models';

@Component({
  selector: 'app-signals-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals-intro.component.html',
  styleUrl: './signals-intro.component.css',
})
export class SignalsIntroComponent {
  elementos: Elemento[] = LISTA_INICIAL;

  // signal gravável (writable signal)
  elementoSelecionado: WritableSignal<Elemento | null> =
    signal<Elemento | null>(null);

  elementoInfo = computed(() => {
    const elemento = this.elementoSelecionado();
    if (!elemento) return 'Nenhum elemento selecionado';

    const { simbolo, nome, numeroMassa } = elemento;
    return `Nome: ${nome}, Símbolo: ${simbolo}, Número de massa: ${numeroMassa}`;
  });

  public selecionarElemento(elemento: Elemento): void {
    this.elementoSelecionado.set(elemento);
  }
}

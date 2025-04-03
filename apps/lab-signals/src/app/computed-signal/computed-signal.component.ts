import { Component } from '@angular/core';

import { Elemento } from '../../shared/models';
import { ElementoService } from '../../shared/service/elemento.service';

@Component({
  selector: 'app-computed-signal',
  templateUrl: './computed-signal.component.html',
  styleUrl: './computed-signal.component.css',
})
export class ComputedSignalComponent {
  elementos: Elemento[];

  constructor(public elementoService: ElementoService) {
    this.elementos = elementoService.elementos;
  }

  public selecionarElementoA(elemento: Elemento): void {
    this.elementoService.selecionarElementoA(elemento);
  }

  public selecionarElementoB(elemento: Elemento): void {
    this.elementoService.selecionarElementoB(elemento);
  }

  elementoCalculadoA(): Elemento | null {
    return this.elementoService.elementoSelecionadoA();
  }

  elementoCalculadoB(): Elemento | null {
    return this.elementoService.elementoSelecionadoB();
  }

  massaAtomicaTotal(): number {
    return this.elementoService.massaAtomicaTotal();
  }
}

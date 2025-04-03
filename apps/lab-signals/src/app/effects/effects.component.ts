import { Component } from '@angular/core';

import { Elemento } from '../../shared/models';
import { ElementoService } from '../../shared/service/elemento.service';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.css'],
})
export class EffectsComponent {
  constructor(public elementoService: ElementoService) {}

  selecionarElemento(elemento: Elemento): void {
    this.elementoService.selecionarElemento(elemento);
  }
}

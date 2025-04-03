import { Component } from '@angular/core';

import { Elemento } from '../../shared/models';
import { ElementoService } from '../../shared/service/elemento.service';

@Component({
  selector: 'app-signals-intro',
  templateUrl: './signals-intro.component.html',
  styleUrl: './signals-intro.component.css',
})
export class SignalsIntroComponent {
  constructor(public elementoService: ElementoService) {}

  public selecionarElemento(elemento: Elemento): void {
    this.elementoService.selecionarElemento(elemento);
  }
}

import { Component } from '@angular/core';

import { Elemento } from '../../shared/models';
import { ElementoService } from '../../shared/service/elemento.service';

@Component({
  selector: 'app-element-list-component',
  templateUrl: './element-list.component.html',
  styleUrl: './element-list.component.css',
})
export class ElementListComponent {
  constructor(public elementoService: ElementoService) {}

  selecionarElemento(elemento: Elemento): void {
    this.elementoService.selecionarElemento(elemento);
  }

  toggleFavorito(elemento: Elemento): void {
    if (this.elementoService.jaEstaNaLista(elemento)) {
      this.elementoService.removerFavoritos(elemento);
      return;
    }
    this.elementoService.adicionarFavoritos(elemento);
  }
}

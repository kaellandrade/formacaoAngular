import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrls: ['./botao-carregar-mais.component.scss'],
})
export class BotaoCarregarMaisComponent {
  @Input()
  haMaisPensamentos = false;

  @Input()
  totalPensamentos = 0;
}

import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../../../../interfaces/Pensamento';
import { ModelosPensamentos } from '../../../../interfaces/ModelosPensamentos';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss'],
})
export class PensamentoComponent implements OnInit {
  private static readonly TAMANHO_MAXIMO_STRING = 256;
  @Input()
  public pensamento: Pensamento;

  constructor() {
    this.pensamento = {
      id: '0',
      conteudo: '',
      modelo: ModelosPensamentos.MODELO1,
      autoria: '',
    };
  }

  ngOnInit(): void {
    return;
  }

  public larguraPensamento(): string {
    if (
      this.pensamento.conteudo.length >=
      PensamentoComponent.TAMANHO_MAXIMO_STRING
    ) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}

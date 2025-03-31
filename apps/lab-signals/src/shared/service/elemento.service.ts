import {
  computed,
  effect,
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';

import {
  Elemento,
  EstadoFisico,
  LISTA_INICIAL,
  VALOR_INICIAL_CELSIUS,
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class ElementoService {
  elementos: Elemento[] = LISTA_INICIAL;
  elementoSelecionado: WritableSignal<Elemento | null> =
    signal<Elemento | null>(null);
  temperatura: WritableSignal<number> = signal<number>(VALOR_INICIAL_CELSIUS);
  estadoFisico: WritableSignal<EstadoFisico> = signal<EstadoFisico>('');
  sharedTemp = VALOR_INICIAL_CELSIUS;
  elementoInfo = computed(() => {
    const elemento = this.elementoSelecionado();
    if (!elemento) return 'Nenhum elemento selecionado';

    const { simbolo, nome, numeroMassa } = elemento;
    return `Nome: ${nome}, Símbolo: ${simbolo}, Número de massa: ${numeroMassa}`;
  });

  constructor() {
    this.initEffect();
  }

  public selecionarElemento(elemento: Elemento): void {
    this.elementoSelecionado.set(elemento);
    this.ajustarTemperatura(VALOR_INICIAL_CELSIUS);
  }

  public ajustarTemperatura(novaTemperatura: number): void {
    this.temperatura.set(novaTemperatura);
  }

  private initEffect(): void {
    effect(
      (): void => {
        // Está observando dois signals....
        const elemento: Elemento | null = this.elementoSelecionado();
        this.sharedTemp = this.temperatura();

        if (!elemento) return;
        const { pontoEbulicao, pontoFusao } = elemento;
        let estadoFisico: EstadoFisico = '';
        if (this.sharedTemp < pontoFusao) {
          estadoFisico = 'Sólido';
          this.estadoFisico.set(estadoFisico);
          return;
        }
        if (this.sharedTemp >= pontoFusao && this.sharedTemp < pontoEbulicao) {
          estadoFisico = 'Líquido';
          this.estadoFisico.set(estadoFisico);
          return;
        }
        estadoFisico = 'Gasoso';
        this.estadoFisico.set(estadoFisico);
      },
      { allowSignalWrites: true },
    );
  }
}

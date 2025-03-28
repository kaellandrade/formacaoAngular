import { Component, effect, signal, WritableSignal } from '@angular/core';

import { Elemento, EstadoFisico, LISTA_INICIAL } from '../../shared/models';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.css'],
})
export class EffectsComponent {
  elementos: Elemento[] = LISTA_INICIAL;
  elementoSelecionado: WritableSignal<Elemento | null> =
    signal<Elemento | null>(null);
  temperatura: WritableSignal<number> = signal<number>(25);
  estadoFisico: WritableSignal<EstadoFisico> = signal<EstadoFisico>('');

  constructor() {
    this.initEffect();
  }

  selecionarElemento(elemento: Elemento): void {
    this.elementoSelecionado.set(elemento);
  }

  ajustarTemperatura(novaTemperatura: number): void {
    this.temperatura.set(novaTemperatura);
  }

  private initEffect(): void {
    effect(
      (): void => {
        // Está observando dois signals....
        const elemento: Elemento | null = this.elementoSelecionado();
        const temp: number = this.temperatura();

        if (!elemento) return;
        const { pontoEbulicao, pontoFusao } = elemento;
        let estadoFisico: EstadoFisico = '';
        if (temp < pontoFusao) {
          estadoFisico = 'Sólido';
          this.estadoFisico.set(estadoFisico);
          return;
        }
        if (temp >= pontoFusao && temp < pontoEbulicao) {
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

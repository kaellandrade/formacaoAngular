import {
  computed,
  effect,
  Injectable,
  Signal,
  signal,
  untracked,
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

  elementoSelecionadoA: WritableSignal<Elemento | null> =
    signal<Elemento | null>(null);

  elementoSelecionadoB: WritableSignal<Elemento | null> =
    signal<Elemento | null>(null);

  temperatura: WritableSignal<number> = signal<number>(VALOR_INICIAL_CELSIUS);
  estadoFisico: WritableSignal<EstadoFisico> = signal<EstadoFisico>('');
  sharedTemp: number = VALOR_INICIAL_CELSIUS;
  elementoInfo: Signal<string> = computed(() => {
    const elemento = this.elementoSelecionado();
    if (!elemento) return 'Nenhum elemento selecionado';

    const { simbolo, nome, numeroMassa } = elemento;
    return `Nome: ${nome}, Símbolo: ${simbolo}, Número de massa: ${numeroMassa}`;
  });
  favoritos = signal<Elemento[]>([]);

  massaAtomicaTotal = computed(() => {
    const elementoA = this.elementoSelecionadoA();
    const elementoB = this.elementoSelecionadoB();

    const massaA = untracked(() =>
      elementoA ? elementoA.numeroAtomico + elementoA.numeroNeutrons : 0,
    );
    const massaB = untracked(() =>
      elementoB ? elementoB.numeroAtomico + elementoB.numeroNeutrons : 0,
    );

    return massaA + massaB;
  });

  constructor() {
    this.initEffect();
  }

  public selecionarElemento(elemento: Elemento): void {
    this.elementoSelecionado.set(elemento);
    this.ajustarTemperatura(VALOR_INICIAL_CELSIUS);
  }

  public selecionarElementoA(elemento: Elemento): void {
    this.elementoSelecionadoA.set(elemento);
  }

  public selecionarElementoB(elemento: Elemento): void {
    this.elementoSelecionadoB.set(elemento);
  }

  public ajustarTemperatura(novaTemperatura: number): void {
    this.temperatura.set(novaTemperatura);
  }

  public obterFavoritos(): Elemento[] {
    return this.favoritos();
  }

  public obterObjetoSelecionado(): Elemento | null {
    return this.elementoSelecionado();
  }

  adicionarFavoritos(elemento: Elemento): void {
    this.favoritos.update((fav) => [...fav, elemento]);
  }

  removerFavoritos(elemento: Elemento): void {
    this.favoritos.update((fav) =>
      fav.filter((fav) => fav.simbolo !== elemento.simbolo),
    );
  }

  jaEstaNaLista(elemento: Elemento): boolean {
    const { simbolo } = elemento;
    const favoritosNaLista = this.obterFavoritos();
    return favoritosNaLista.some((fav) => fav.simbolo === simbolo);
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

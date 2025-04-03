export type Elemento = {
  nome: string;
  simbolo: string;
  numeroMassa: number;
  pontoFusao: number;
  pontoEbulicao: number;
  numeroNeutrons: number;
  numeroAtomico: number;
};

export const LISTA_INICIAL: Elemento[] = [
  {
    nome: 'Hidrogênio',
    simbolo: 'H',
    numeroAtomico: 1,
    numeroNeutrons: 0,
    numeroMassa: 1,
    pontoFusao: -259,
    pontoEbulicao: -253,
  },
  {
    nome: 'Carbono',
    simbolo: 'C',
    numeroAtomico: 6,
    numeroNeutrons: 6,
    numeroMassa: 12,
    pontoFusao: 3550,
    pontoEbulicao: 4027,
  },
  {
    nome: 'Nitrogênio',
    simbolo: 'N',
    numeroAtomico: 7,
    numeroNeutrons: 7,
    numeroMassa: 14,
    pontoFusao: -210,
    pontoEbulicao: -196,
  },
  {
    nome: 'Oxigênio',
    simbolo: 'O',
    numeroAtomico: 8,
    numeroNeutrons: 8,
    numeroMassa: 16,
    pontoFusao: -218,
    pontoEbulicao: -183,
  },
  {
    nome: 'Sódio',
    simbolo: 'Na',
    numeroAtomico: 11,
    numeroNeutrons: 12,
    numeroMassa: 23,
    pontoFusao: 98,
    pontoEbulicao: 883,
  },
  {
    nome: 'Cloro',
    simbolo: 'Cl',
    numeroAtomico: 17,
    numeroNeutrons: 18,
    numeroMassa: 35,
    pontoFusao: -101,
    pontoEbulicao: -34,
  },
];

export type EstadoFisico = 'Sólido' | 'Líquido' | 'Gasoso' | '';

export const VALOR_INICIAL_CELSIUS = 25;

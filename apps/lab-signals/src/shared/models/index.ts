export type Elemento = {
  nome: string;
  simbolo: string;
  numeroMassa: number;
  pontoFusao: number;
  pontoEbulicao: number;
};

export const LISTA_INICIAL: Elemento[] = [
  {
    nome: 'Hidrogênio',
    simbolo: 'H',
    numeroMassa: 1,
    pontoFusao: -259,
    pontoEbulicao: -253,
  },
  {
    nome: 'Carbono',
    simbolo: 'C',
    numeroMassa: 12,
    pontoFusao: 3550,
    pontoEbulicao: 4027,
  },
  {
    nome: 'Nitrogênio',
    simbolo: 'N',
    numeroMassa: 14,
    pontoFusao: -210,
    pontoEbulicao: -196,
  },
  {
    nome: 'Oxigênio',
    simbolo: 'O',
    numeroMassa: 16,
    pontoFusao: -218,
    pontoEbulicao: -183,
  },
  {
    nome: 'Sódio',
    simbolo: 'Na',
    numeroMassa: 23,
    pontoFusao: 98,
    pontoEbulicao: 883,
  },
  {
    nome: 'Cloro',
    simbolo: 'Cl',
    numeroMassa: 35,
    pontoFusao: -101,
    pontoEbulicao: -34,
  },
];

export type EstadoFisico = 'Sólido' | 'Líquido' | 'Gasoso' | '';

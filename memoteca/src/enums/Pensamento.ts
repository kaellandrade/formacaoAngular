import { ModelosPensamentos } from './ModelosPensamentos';

export interface Pensamento{
  conteudo: string,
  autoria: string,
  modelo: ModelosPensamentos,
}
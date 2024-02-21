import { ModelosPensamentos } from './ModelosPensamentos';

export interface Pensamento {
	id?: string;
	conteudo: string;
	autoria: string;
	modelo: ModelosPensamentos;
}

import { Pensamento } from './Pensamento';

export interface PensamentoRequestShape {
	first: number;
	prev?: number;
	next?: number;
	last: number;
	pages: number;
	items: number;
	data: Pensamento[];
}

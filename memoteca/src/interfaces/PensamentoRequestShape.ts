import { Pensamento } from './Pensamento';

export interface PensamentoRequestShape {
	first: number;
	prev: number | null;
	next: number | null;
	last: number;
	pages: number;
	items: number;
	data: Pensamento[];
}

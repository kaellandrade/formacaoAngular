export interface Item {
	id?: number | string;
	nome: string;
	data: Date | string;
	comprado: boolean;
	editado: boolean;
	dataEdicao?: Date | string;
}

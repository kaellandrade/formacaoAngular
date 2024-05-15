export interface Item {
	id?: number | string;
	nome: string;
	data: Date;
	comprado: boolean;
	editado: boolean;
	dataEdicao?: Date | null;
}

export interface Livro {
	title?: string;
	subtitle?: string;
	authors?: string[];
	publishedDate?: Date;
	description?: string;
	thumbnail?: ImageLinks;
	pageCount?: number;
	language: string;
	categories: string[];
	publisher: string;
}

export interface ImageLinks {
	smallThumbnail: string;
	thumbnail: string;
}

export interface Item {
	volumeInfo: Livro;
}

export interface LivrosResultado {
	items: Item[];
	totalItems: number;
}

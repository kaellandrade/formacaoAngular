export interface Livro {
  title?: string;
  subtitle?: string;
  authors?: string[];
  publishedDate?: Date;
  description?: string;
  imageLinks?: ImageLinks;
  pageCount?: number;
  language: IdiomaLivro;
  categories: string[];
  publisher: string;
  previewLink: string;
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

export enum IdiomaLivro {
  PT = 'pt',
  PT_BR = 'pt-BR',
  EN = 'en',
  ES = 'es',
}

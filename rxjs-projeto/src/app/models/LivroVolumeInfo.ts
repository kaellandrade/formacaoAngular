import { IdiomaLivro, ImageLinks, Item } from './interfaces';

export class LivroVolumeInfo {
	title?: string;
	subtitle?: string;
	authors?: string[];
	publishedDate?: Date;
	description?: string;
	thumbnail?: ImageLinks;
	pageCount?: number;
	language: IdiomaLivro;
	categories: string[];
	publisher: string;
	previewLink: string;

	constructor(item: Item) {
		this.title = item.volumeInfo?.title;
		this.authors = item.volumeInfo?.authors;
		this.publishedDate = item.volumeInfo?.publishedDate;
		this.description = item.volumeInfo?.description;
		this.thumbnail = item.volumeInfo['imageLinks'];
		this.language = item.volumeInfo?.language;
		this.categories = item.volumeInfo?.categories;
		this.publisher = item.volumeInfo?.publisher;
		this.previewLink = item.volumeInfo?.previewLink;
	}
}

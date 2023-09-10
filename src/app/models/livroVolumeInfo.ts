import { ImageLinks, Item } from "./interfaces";

export class LivroVolumeInfo {
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  previewLink?: string;
  thumbnail?: ImageLinks;

  constructor(item: any){
    this.title = item.volumeInfo?.title,
    this.authors = item.volumeInfo?.authors,
    this.publisher = item.volumeInfo?.publisher,
    this.publishedDate = item.volumeInfo?.publishedDate,
    this.description = item.volumeInfo?.description,
    this.previewLink = item.volumeInfo?.previewLink,
    this.thumbnail = item.volumeInfo?.imageLinks?.thumbnail
  }

}

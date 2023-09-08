export interface Livro {
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: Date;
  description?: string;
  previewLink?: string;
  thumnail?: string;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: Date;
  description: string;
  pageCount: number;
  printType: string;
  mainCategory: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  contentVersion: string;
  imageLinks: ImageLinks;
  language: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail:      string;
  small:          string;
  medium:         string;
  large:          string;
  extraLarge:     string;
}

export interface Item {
  volumeInfo: VolumeInfo
}

export interface LivrosResultado {
  itens: Item[];
  totalItems: number;
}

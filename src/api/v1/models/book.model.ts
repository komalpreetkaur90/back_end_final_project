export interface Book {
  id?: string;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
  availableCopies: number;
  totalCopies: number;
}

import { BookshelfPage } from "@/components/BookshelfPage";
import { books, shelves } from "@/data/books";

export default function Home() {
  return <BookshelfPage books={books} shelves={shelves} />;
}

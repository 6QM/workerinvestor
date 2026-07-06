import { Book3D } from "@/components/Book3D";
import type { Book, Shelf } from "@/data/books";

type ShelfRowProps = {
  books: Book[];
  onSelectBook: (book: Book) => void;
  shelf: Shelf;
  shelfIndex: number;
};

export function ShelfRow({ books, onSelectBook, shelf, shelfIndex }: ShelfRowProps) {
  return (
    <article className="shelf-row" aria-labelledby={`${shelf.id}-label`}>
      <div className="shelf-scroller">
        <div className="shelf-stage">
          <div className="book-line" role="list" aria-label={shelf.label}>
            {books.map((book, index) => (
              <Book3D
                book={book}
                index={index}
                key={book.id}
                onSelect={onSelectBook}
                shelfIndex={shelfIndex}
              />
            ))}
          </div>
          <div className="wood-shelf" aria-hidden="true" />
        </div>
      </div>
      <p className="shelf-marker" id={`${shelf.id}-label`}>
        <span>{shelf.label}</span>
        <span>{shelf.labelZh}</span>
      </p>
    </article>
  );
}

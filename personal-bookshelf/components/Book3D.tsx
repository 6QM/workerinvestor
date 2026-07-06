import Image from "next/image";
import type { CSSProperties } from "react";
import type { Book } from "@/data/books";

type Book3DProps = {
  book: Book;
  index: number;
  onSelect: (book: Book) => void;
  shelfIndex: number;
};

type BookStyle = CSSProperties & {
  "--book-color": string;
  "--book-depth": string;
  "--book-height": string;
  "--book-width": string;
};

const heightSteps = [132, 146, 158, 140, 152];
const widthSteps = [78, 86, 92, 82, 88];

export function Book3D({ book, index, onSelect, shelfIndex }: Book3DProps) {
  const height = heightSteps[(index + shelfIndex) % heightSteps.length];
  const width = widthSteps[(index * 2 + shelfIndex) % widthSteps.length];
  const depth = 11 + ((index + shelfIndex) % 3);

  const style: BookStyle = {
    "--book-color": book.color,
    "--book-depth": `${depth}px`,
    "--book-height": `${height}px`,
    "--book-width": `${width}px`
  };

  return (
    <div className="book-slot" role="listitem" style={style}>
      <button
        aria-label={`Open details for ${book.title} by ${book.author}`}
        className="book-button"
        onClick={() => onSelect(book)}
        type="button"
      >
        <span className="book-object" aria-hidden="true">
          <span className="book-face book-front">
            {book.cover ? (
              <Image
                alt={`${book.title} cover`}
                className="book-cover-image"
                fill
                loading="lazy"
                sizes="(max-width: 720px) 82px, 96px"
                src={book.cover}
                unoptimized
              />
            ) : (
              <span className="book-cover-fallback">
                <span className="cover-rule" />
                <span className="cover-category">{book.category.replace("-", " / ")}</span>
                <span className="cover-title">{book.title}</span>
                <span className="cover-author">{book.author}</span>
              </span>
            )}
          </span>
          <span className="book-spine">
            <span>{book.title}</span>
          </span>
          <span className="book-pages" />
        </span>
      </button>
    </div>
  );
}

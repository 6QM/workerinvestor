"use client";

import { useCallback, useMemo, useState } from "react";
import { BookDetailDrawer } from "@/components/BookDetailDrawer";
import { ShelfRow } from "@/components/ShelfRow";
import type { Book, Shelf } from "@/data/books";

type BookshelfPageProps = {
  books: Book[];
  shelves: Shelf[];
};

export function BookshelfPage({ books, shelves }: BookshelfPageProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const closeDrawer = useCallback(() => setSelectedBook(null), []);

  const shelfRows = useMemo(
    () =>
      shelves.map((shelf) => ({
        ...shelf,
        books: books.filter((book) => book.category === shelf.id)
      })),
    [books, shelves]
  );

  return (
    <main className="bookshelf-page">
      <header className="bookshelf-hero" aria-labelledby="bookshelf-title">
        <div>
          <p className="bookshelf-eyebrow">Personal reading map</p>
          <h1 id="bookshelf-title">Personal bookshelf for worker-investor thinking</h1>
          <p className="bookshelf-intro">
            Books I return to when making judgment, writing, building, owning assets, and
            deciding how to spend a finite life.
          </p>
        </div>
        <div className="hero-bookmark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </header>

      <section className="reading-map" aria-label="Theme-based bookshelf">
        {shelfRows.map((shelf, shelfIndex) => (
          <ShelfRow
            key={shelf.id}
            books={shelf.books}
            onSelectBook={setSelectedBook}
            shelf={shelf}
            shelfIndex={shelfIndex}
          />
        ))}
      </section>

      <BookDetailDrawer book={selectedBook} onClose={closeDrawer} />
    </main>
  );
}

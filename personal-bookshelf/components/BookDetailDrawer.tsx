"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import type { Book } from "@/data/books";

type BookDetailDrawerProps = {
  book: Book | null;
  onClose: () => void;
};

export function BookDetailDrawer({ book, onClose }: BookDetailDrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!book) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    document.body.classList.add("drawer-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("drawer-open");
      window.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [book, onClose]);

  if (!book) {
    return null;
  }

  const coverStyle = { "--book-color": book.color } as CSSProperties;
  const isExternalNote = book.noteUrl.startsWith("http");

  return (
    <div className="drawer-layer">
      <button className="drawer-scrim" onClick={onClose} type="button" aria-label="Close details" />
      <aside
        aria-labelledby="drawer-title"
        aria-modal="true"
        className="book-drawer"
        role="dialog"
      >
        <button
          aria-label="Close details"
          className="drawer-close"
          onClick={onClose}
          ref={closeButtonRef}
          type="button"
        >
          x
        </button>

        <div className="drawer-cover" style={coverStyle}>
          {book.cover ? (
            <Image
              alt={`${book.title} cover`}
              className="drawer-cover-image"
              fill
              loading="lazy"
              sizes="160px"
              src={book.cover}
              unoptimized
            />
          ) : (
            <div className="drawer-cover-fallback">
              <span>{book.category.replace("-", " / ")}</span>
              <strong>{book.title}</strong>
              <small>{book.author}</small>
            </div>
          )}
        </div>

        <div className="drawer-content">
          <p className="drawer-kicker">{book.year} reading note</p>
          <h2 id="drawer-title">{book.title}</h2>
          <p className="drawer-author">{book.author}</p>

          <dl className="book-meta">
            <div>
              <dt>Category</dt>
              <dd>{book.category.replace("-", " / ")}</dd>
            </div>
            <div>
              <dt>Rating</dt>
              <dd>{book.rating == null ? "Not rated yet" : `${book.rating.toFixed(1)} / 5`}</dd>
            </div>
          </dl>

          <section className="takeaway-block" aria-label="One sentence takeaway">
            <h3>One sentence takeaway</h3>
            <p>{book.takeaway}</p>
          </section>

          <a
            className="note-link"
            href={book.noteUrl}
            rel={isExternalNote ? "noreferrer" : undefined}
            target={isExternalNote ? "_blank" : undefined}
          >
            {book.noteUrl.includes("69mike.com") ? "Open 69mike bookshelf" : "Open reading note"}
          </a>
        </div>
      </aside>
    </div>
  );
}

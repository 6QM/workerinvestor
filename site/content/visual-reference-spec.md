# Visual Reference Spec

This file replaces the unavailable `taste` skill for the current environment. It records the taste direction before implementation.

## Direction

Modern Paperback + Research Archive + Practical Toolkit.

The site should look like a serious modern nonfiction book project, not a generic AI landing page or finance funnel.

## Visual Principles

1. **Book first.** The first visual asset is a real book object: cover, spine, contents page, and physical proportions.
2. **Paper plus system.** Use paper warmth, grid lines, ledgers, diagrams, and restrained technical structure.
3. **One accent, not decoration.** Deep purple is a signal for optionality and future time. It should not become a full-page gradient.
4. **Diagrams explain transformation.** Graphics should show wages becoming assets, skills becoming leverage, and content becoming compounding memory.
5. **Readable before impressive.** Chinese and English text must remain legible on mobile.
6. **Assets are reusable.** Cover, mockup, and social card should live as separate files, not be trapped inside page CSS.

## Palette

- Paper: `#f6f4ed`
- Ink: `#101114`
- Graphite: `#343842`
- Rule: `rgba(16, 17, 20, 0.14)`
- Deep purple: `#4b3fb4`
- Asset green: `#0d6b57`
- Wage orange: `#b85f3b`
- Time gold: `#c6a64f`

## Type Direction

- Large title: serious serif or strong modern sans with Chinese fallback.
- Body: readable sans/serif mix.
- Labels, chapter numbers, ledgers: mono.

## Asset Set

The first asset pass should produce:

- `twi-cover-front.svg`
- `twi-cover-front.png`
- `twi-book-mockup.svg`
- `twi-book-mockup.png`
- `twi-social-card.svg`
- `twi-social-card.png`
- `twi-web-reference.svg`
- `twi-web-reference.png`

These assets are concept assets. They are not final print-ready KDP/IngramSpark files because final spine width depends on page count, paper type, and trim size.

## Page Reference

The reference image should show:

- left side: book name, core line, CTAs;
- right side: 3D book object;
- below: identity cards and resource cards;
- visual rhythm: paper, grid, strong typography, restrained purple highlight.

## Anti-Patterns

Avoid:

- purple-blue gradient hero;
- dark fintech dashboard;
- fake metrics;
- fake testimonials;
- decorative 3D unrelated to the book;
- overly warm beige nostalgia;
- cheap card-heavy template feeling.

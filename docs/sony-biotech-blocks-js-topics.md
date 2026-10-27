# JavaScript topics used in Sony Biotech `blocks/`

Learning reference based on a scan of **75 JS files** under  
`sony-biotech/sony-biotech-dev-fork/blocks/`.

Use this list to decide what to learn (and what to search on YouTube) before working on Edge Delivery block code. Topics are ordered for learning. Skip items marked rare until you open those blocks.

---

## 1. Core language (used in almost every block)

Learn these first. Without them you cannot read `decorate()`.

| Topic | Why it shows up here |
|---|---|
| **ES modules** (`import` / `export default`) | Almost every block imports helpers and exports `decorate` |
| **`export default function decorate(block)`** | The EDS block contract. ~66 files |
| **Arrow functions** | Callbacks everywhere |
| **`const` / `let`** | No `var` style |
| **Template literals** | Building HTML strings and URLs |
| **Destructuring** | `const { title, image } = config` |
| **Spread / rest** (`...`) | Cloning arrays, appending nodes, merging objects |
| **Optional chaining / nullish coalescing** (`?.` `??`) | Safe reads on authored or API data |
| **Ternary and `&&` / `\|\|`** | Short UI conditionals |
| **Default parameters** | `decorate(block, options = {})` style helpers |
| **`if` / `switch` / early `return`** | Guard clauses in almost every block |
| **`try` / `catch` / `throw`** | Fetch and GraphQL error paths |

---

## 2. Arrays, objects, and strings (very common)

| Topic | Used for |
|---|---|
| **Array methods**: `map`, `filter`, `find`, `forEach`, `some`, `every`, `includes`, `flat` / `flatMap`, `reduce` | Turning authored rows or API lists into cards |
| **`Array.from` / spread on NodeLists** | `[...block.querySelectorAll(...)]` |
| **Object methods**: `Object.keys`, `values`, `entries`, `assign`, `freeze` | Config maps, immutable lookups |
| **`Map` and `Set`** | Tabs section maps, deduping links |
| **String methods**: `trim`, `split`, `slice`, `startsWith`, `endsWith`, `replace`, `replaceAll`, `toLowerCase`, `includes` | Paths, labels, store codes |
| **RegExp** | Matching URLs, video extensions, cleaning text |
| **`Number` / `parseInt` / `parseFloat` / `Math` / `Date` / `toLocaleDateString`** | Prices, pagination, publication dates |
| **`JSON.parse` / `JSON.stringify`** | Config dumps, index fields, wishlists |

---

## 3. DOM APIs (this is the real job of blocks)

Blocks are DOM scripts. This section matters more than frameworks.

| Topic | Used for |
|---|---|
| **`querySelector` / `querySelectorAll`** | Read authored cells |
| **`createElement`** | Build new UI |
| **`append` / `prepend` / `after` / `before` / `replaceWith` / `replaceChildren` / `remove`** | Restructure the block |
| **`innerHTML` / `textContent` / `insertAdjacentHTML`** | Inject markup (know XSS risk with `innerHTML`) |
| **`classList` add/remove/toggle/contains** | Block states: open, active, sticky |
| **`setAttribute` / `getAttribute` / `removeAttribute` / `dataset`** | `data-*`, href, ids |
| **`closest` / `matches` / `contains`** | Walk up to section or wrapper |
| **`style` / `className` / `getComputedStyle`** | Inline styles, sticky offsets |
| **ARIA attributes** (`aria-expanded`, `aria-hidden`, `role`) | Accordion, tabs, menus |
| **`DocumentFragment` / `createRange().createContextualFragment()`** | Build HTML from a string safely-ish |
| **`DOMParser`** | Strip HTML from product names / Sidekick tools |

---

## 4. Events and browser behavior

| Topic | Used for |
|---|---|
| **`addEventListener` / `removeEventListener`** | Clicks, submit, scroll, resize |
| **`preventDefault` / `stopPropagation`** | Tabs, forms, menu links |
| **`CustomEvent` + `dispatchEvent`** | Video ready, PLP URL change, category change |
| **`window.location` / `URL` / `URLSearchParams`** | Store code, search `q`, pagination |
| **`history.pushState` / `replaceState`** | Tabs hash, PLP filters without full reload |
| **`Proxy` on `history` methods** | Detect URL changes from Live Search widget (`product-list-page`, `content-list`) |
| **Scroll APIs**: `scrollTo`, `scrollIntoView`, `getBoundingClientRect`, `offsetHeight` | Sticky tabs, carousel, lazy sections |
| **`setTimeout` / `clearTimeout` / `requestAnimationFrame`** | Debounce scroll correction, layout waits |
| **`matchMedia`** (if you hit responsive header/carousel paths) | Breakpoint behavior |

---

## 5. Async and data loading

| Topic | Used for |
|---|---|
| **`async` / `await`** | Almost every non-trivial block |
| **`Promise` / `Promise.all`** | Load several fragments or cards together |
| **`fetch`** | Fragments (`.plain.html`), indexes, forms, Magento |
| **Dynamic `import()`** | Lazy-load heavy helpers only when needed |
| **`FormData` and form field `.value`** | Account, address, forgot-password posts |
| **`localStorage` / `sessionStorage` / cookies** | Auth token, locale, Magento messages |

---

## 6. Observers (learn when you open these blocks)

| Topic | Where |
|---|---|
| **`IntersectionObserver`** | `embed`, `articles` — load when visible |
| **`MutationObserver`** | `article`, `product-list-page` — react when widget DOM changes |
| **`ResizeObserver`** | `carousel` — recalculate on size change |

---

## 7. EDS helpers you must understand as APIs

These are not “JavaScript language,” but every block depends on them. Learn what each does:

| Helper | Import from | Purpose |
|---|---|---|
| `readBlockConfig` | `scripts/aem.js` | Turn a config table into an object |
| `getMetadata` | `scripts/aem.js` | Read `<meta>` (hero title, template) |
| `createOptimizedPicture` | `scripts/aem.js` | Build responsive `<picture>` |
| `toClassName` | `scripts/aem.js` | “Worldwide Contacts” → `worldwide-contacts` |
| `decorateBlock` / `loadBlock` / `buildBlock` | `scripts/aem.js` | Nest or invent blocks at runtime |
| `loadFragment` | `blocks/fragment/fragment.js` | Fetch `/path.plain.html` and decorate it |
| `fetchIndex` | `scripts/scripts.js` | Read query-index JSON for listings |
| Commerce helpers | `scripts/commerce.js` | Store code, GraphQL, prices (shop blocks) |
| Auth helpers | `scripts/loginDropdown/helpers.js` | Logged-in checks for account blocks |

---

## 8. Patterns used as design habits (not separate syntax)

Learn these as “how this codebase thinks”:

1. **Decorate pattern** — page HTML is input; JS rewrites it.
2. **Config-from-table** — authors put key/value rows; `readBlockConfig` parses them.
3. **Guard clauses** — if required content is missing, `return` early.
4. **Class-based variants** — `accordion compact`, `columns video` via `classList`.
5. **Fragment composition** — accordion/columns load other pages into themselves.
6. **Lazy enhancement** — observe first, then inject iframe or widget.
7. **Widget DOM patching** — PLP watches third-party markup and adjusts it.

---

## What you can skip for now

- React / Vue / Angular — not used in blocks
- TypeScript — blocks are plain JS
- Node.js backend / Express — browser only
- Generators, `Proxy` theory (beyond “wrap history”), `WeakMap`, `AbortController` — barely or not used
- Magento PHP — only GraphQL/fetch usage from the browser

---

## Suggested learning order for YouTube

1. **Modern JavaScript ES6+** — modules, arrow, destructuring, spread, optional chaining, template literals
2. **DOM manipulation** — querySelector, createElement, classList, events
3. **Async JavaScript** — promises, async/await, fetch
4. **Browser Web APIs** — URLSearchParams, history, localStorage, IntersectionObserver
5. **Array methods deep dive** — map/filter/find/reduce
6. Then open a real block: start with `embed`, then `accordion`, then `tabs`, then a `*-preview` listing block

If you learn sections **1 → 5** well, you can work on most content blocks. Section **6–7** plus commerce helpers is what you need before PDP, PLP, and account blocks.

---

## Analysis notes

- Source scanned: `sony-biotech-dev-fork/blocks/**/*.js` (75 files)
- Largest files (line counts at scan time): `product-list-page.js` (~1501), `header.js` (~718), `articles-preview.js` (~666), `product-details.js` (~616), `article.js` (~583)
- This doc lives in `aem-learning-site` only. No Sony Biotech source files were changed for this note.

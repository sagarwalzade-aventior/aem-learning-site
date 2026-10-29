# Core JavaScript Language Fundamentals

This guide introduces JavaScript syntax used throughout this project, especially in AEM Edge Delivery Services (EDS) block files. Each topic has a plain-language explanation, a normal example, and a tricky case to help you recognize common mistakes.

> Examples are modern JavaScript (ES modules). Block examples use the project's EDS convention. Snippets are illustrative unless shown as complete modules.

## Learning progress

The guide follows your topic groups. Mark a group complete when you feel comfortable explaining and using its topics; the checkbox tracks your learning progress, not just whether the notes exist.

- [ ] **Group 1 — Core JavaScript Language** · [Study topics](#group-1--core-javascript-language)
- [ ] **Group 2 — Arrays, Objects and Strings** · [Study topics](#group-2--arrays-objects-and-strings)
- [ ] **Group 3 — DOM APIs** · [Study topics](#group-3--dom-apis)
- [ ] **Group 4 — Events and Browser Behavior** · [Study topics](#group-4--events-and-browser-behavior)
- [ ] **Group 5 — Asynchronous JavaScript and Data Loading** · [Study topics](#group-5--asynchronous-javascript-and-data-loading)
- [ ] **Group 6 — Observers** · [Study topics](#group-6--observers)
- [ ] **Group 7 — EDS Helpers and APIs** · [Study topics](#group-7--eds-helpers-and-apis)
- [ ] **Group 8 — EDS Design Patterns** · [Study topics](#group-8--eds-design-patterns)
- [ ] **Group 9 — Review and Apply in the Real Project** · [Study topics](#group-9--review-and-apply-in-the-real-project)

## Contents

- [Group 1 — Core JavaScript Language](#group-1--core-javascript-language)
  - [1. ES modules: `import` and `export default`](#1-es-modules-import-and-export-default)
  - [2. EDS block function: `export default function decorate(block)`](#2-eds-block-function-export-default-function-decorateblock)
  - [3. Arrow functions](#3-arrow-functions)
  - [4. `const` and `let`](#4-const-and-let)
  - [5. Template literals](#5-template-literals)
  - [6. Destructuring](#6-destructuring)
  - [7. Spread and rest: `...`](#7-spread-and-rest-)
  - [8. Optional chaining: `?.`](#8-optional-chaining-)
  - [9. Nullish coalescing: `??`](#9-nullish-coalescing-)
  - [10. Ternary operator](#10-ternary-operator)
  - [11. Logical operators: `&&` and `||`](#11-logical-operators--and-)
  - [12. Default parameters](#12-default-parameters)
  - [13. Promises, `async`, and `await`](#13-asynchronous-javascript-promises-async-and-await)
  - [14. `if`, `switch`, and early return](#14-if-switch-and-early-return)
  - [15. Error handling: `try`, `catch`, and `throw`](#15-error-handling-try-catch-and-throw)
  - [16. Project patterns: arrays, DOM, and safe rendering](#16-project-patterns-arrays-dom-and-safe-rendering)
- [Group 2 — Arrays, Objects and Strings](#group-2--arrays-objects-and-strings)
  - [17.1 Array methods](#171-array-methods)
  - [17.2 DOM collections: `Array.from()` and spread](#172-dom-collections-arrayfrom-and-spread)
  - [17.3 Object methods](#173-object-methods)
  - [17.4 `Map` and `Set`](#174-map-and-set)
  - [17.5 String methods](#175-string-methods)
  - [17.6 Regular expressions: `RegExp`](#176-regular-expressions-regexp)
  - [17.7 Number conversion](#177-number-conversion)
  - [17.8 `Math`](#178-math)
  - [17.9 Dates and `toLocaleDateString()`](#179-dates-and-tolocaledatestring)
  - [17.10 JSON: `JSON.parse()` and `JSON.stringify()`](#1710-json-jsonparse-and-jsonstringify)
- [Group 3 — DOM APIs](#group-3--dom-apis)
  - [18.1 Finding elements](#181-finding-elements)
  - [18.2 Creating elements and inserting nodes](#182-creating-elements-and-inserting-nodes)
  - [18.3 Text and HTML insertion](#183-text-and-html-insertion)
  - [18.4 Classes, styles, and attributes](#184-classes-styles-and-attributes)
  - [18.5 DOM relationships and selectors](#185-dom-relationships-and-selectors)
  - [18.6 Accessibility attributes](#186-accessibility-attributes-aria-expanded-aria-hidden-and-role)
  - [18.7 `DocumentFragment`](#187-documentfragment)
  - [18.8 `createRange().createContextualFragment()`](#188-createrangecreatecontextualfragment)
  - [18.9 `DOMParser`](#189-domparser)
- [Group 4 — Events and Browser Behavior](#group-4--events-and-browser-behavior)
  - [19.1 Event listeners](#191-event-listeners)
  - [19.2 Event flow and cancellation](#192-event-flow-and-cancellation)
  - [19.3 Custom events](#193-custom-events)
  - [19.4 Current location and URL parsing](#194-current-location-and-url-parsing)
  - [19.5 History API and URL state](#195-history-api-and-url-state)
  - [19.6 Scrolling and geometry](#196-scrolling-and-geometry)
  - [19.7 Timers and animation frames](#197-timers-and-animation-frames)
  - [19.8 Responsive behavior: `matchMedia()`](#198-responsive-behavior-matchmedia)
- [Group 5 — Asynchronous JavaScript and Data Loading](#group-5--asynchronous-javascript-and-data-loading)
  - [20.1 `Promise`](#201-promise)
  - [20.2 `async` and `await`](#202-async-and-await)
  - [20.3 `Promise.all()`](#203-promiseall)
  - [20.4 `fetch()`](#204-fetch)
  - [20.5 Dynamic `import()`](#205-dynamic-import)
  - [20.6 `FormData`](#206-formdata)
  - [20.7 Form field `.value`](#207-form-field-value)
  - [20.8 `localStorage`](#208-localstorage)
  - [20.9 `sessionStorage`](#209-sessionstorage)
  - [20.10 Cookies](#2010-cookies)
- [Group 6 — Observers](#group-6--observers)
  - [21.1 `IntersectionObserver`](#211-intersectionobserver)
  - [21.2 `MutationObserver`](#212-mutationobserver)
  - [21.3 `ResizeObserver`](#213-resizeobserver)
- [Group 7 — EDS Helpers and APIs](#group-7--eds-helpers-and-apis)
  - [22.1 `readBlockConfig`](#readblockconfigblock-options)
  - [22.2 `getMetadata`](#getmetadataname-doc--document)
  - [22.3 `createOptimizedPicture`](#createoptimizedpicturesrc-alt-eager-breakpoints)
  - [22.4 `toClassName`](#toclassnamename)
  - [22.5 `decorateBlock`](#decorateblockblock)
  - [22.6 `loadBlock`](#loadblockblock)
  - [22.7 `buildBlock`](#buildblockblockname-content)
  - [22.8 `loadFragment`](#loadfragmenthref--blocksfragmentfragmentjs)
  - [22.9 `fetchIndex`](#fetchindexindexfile-pagesize-sheet--scriptsscriptsjs)
  - [22.10 Commerce helpers](#commerce-helpers--scriptscommercejs)
  - [22.11 Authentication helpers](#authentication-helpers--scriptslogindropdownhelpersjs)
  - [22.12 How to learn a project helper](#how-to-learn-a-project-helper)
- [Group 8 — EDS Design Patterns](#group-8--eds-design-patterns)
  - [23.1 Decorate pattern](#decorate-pattern--authored-html-is-the-input)
  - [23.2 Config-from-table pattern](#config-from-table-pattern--readblockconfig)
  - [23.3 Guard clauses](#guard-clauses--return-early-when-required-content-is-missing)
  - [23.4 Class-based variants](#class-based-variants--one-block-alternate-behavior)
  - [23.5 Fragment composition](#fragment-composition--load-other-pages-into-blocks)
  - [23.6 Lazy enhancement](#lazy-enhancement--wait-for-visibility-then-load-heavy-content)
  - [23.7 Widget DOM patching](#widget-dom-patching--adapt-third-party-markup-carefully)
  - [23.8 How the patterns work together](#how-the-patterns-work-together)
- [Group 9 — Review and Apply in the Real Project](#group-9--review-and-apply-in-the-real-project)
  - [9.1 Study the embed block](#91-study-the-embed-block)
  - [9.2 Study the accordion block](#92-study-the-accordion-block)
  - [9.3 Study the tabs block](#93-study-the-tabs-block)
  - [9.4 Study a `*-preview` listing block](#94-study-a-preview-listing-block)
  - [9.5 Find examples of learned topics](#95-find-examples-of-each-learned-topic-in-the-project)
  - [9.6 Explain a block from start to finish](#96-practice-explaining-a-block-from-start-to-finish)

---

## Group 1 — Core JavaScript Language

This group introduces the language syntax and programming patterns used as building blocks in the rest of the guide.

### 1. ES modules: `import` and `export default`

An ES module is a JavaScript file that can share values with other files. `export` makes a value available to other modules; `import` brings it into the current file. Project JavaScript files commonly use this system.

### Default export

A module can have one default export. The importing file chooses the local name, so the name need not match the original function or value.

```js
// greeting.js
export default function greet(name) {
  return `Hello, ${name}!`;
}

// app.js
import sayHello from './greeting.js';

sayHello('Mina'); // "Hello, Mina!"
```

### Named exports

Named exports keep their names (unless you explicitly rename them during import). A module may have multiple named exports.

```js
// math.js
export const add = (a, b) => a + b;
export const double = (value) => value * 2;

// app.js
import { add, double as twice } from './math.js';
```

You can combine a default export and named exports, but consumers must use the appropriate import syntax:

```js
import mainThing, { add } from './math-tools.js';
```

**Tricky:** braces distinguish named imports from the default import. `import { greet }` asks for a named export called `greet`; it will not import a default export. File paths are also significant: `./greeting.js` is relative to the importing file.

---

### 2. EDS block function: `export default function decorate(block)`

In EDS, a block JavaScript file commonly exports a default function named `decorate`. The EDS page-loading code imports that function and calls it with the block's DOM element. The function then changes that element's contents or behavior.

```js
// blocks/example/example.js
export default function decorate(block) {
  const message = document.createElement('p');
  message.textContent = 'This block has been decorated.';
  block.append(message);
}
```

Here, `block` is a parameter: the actual HTML element supplied by EDS when it runs the block. `decorate` is a conventional function name used by the project; `export default` makes it the module's main export.

### A realistic pattern

```js
export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    row.classList.add('example-block-row');
  });
}
```

The spread expression turns the live `HTMLCollection` of children into an array, which supports array methods such as `forEach`.

**Tricky:** this function does not run just because the file is imported. EDS (or another caller) must invoke it. Also, `block` is not a selector string; it is an element. To find a child, use something like `block.querySelector('.title')`. Guard for missing expected children when the authored content may omit them.

---

### 3. Arrow functions

Arrow functions are a shorter way to write function expressions. They are especially common for callbacks passed to methods such as `map`, `forEach`, and `filter`.

```js
const square = (number) => number * number;
const numbers = [1, 2, 3];
const doubled = numbers.map((number) => number * 2); // [2, 4, 6]
```

For a single parameter, parentheses may be omitted, though keeping them can make code more consistent. For multiple statements, use braces and write `return` explicitly:

```js
const getLabel = (item) => {
  const name = item.name.trim();
  return name.toUpperCase();
};
```

**Tricky:** braces turn the function body into a statement block, so this returns `undefined`:

```js
const makeObject = (value) => { value }; // no return
```

Use parentheses for an object literal as the concise return value:

```js
const makeObject = (value) => ({ value });
```

Arrow functions also do not create their own `this`; they capture `this` from the surrounding scope. This is often useful in callbacks, but a regular `function` is preferable when a method needs its own `this` or when a constructor is needed.

---

### 4. `const` and `let`

Both declare block-scoped variables. Use `const` when you will not assign a different value to the variable; use `let` when reassignment is part of the logic. Avoid `var` in new code because its function-scoping and hoisting rules are easier to misuse.

```js
const blockName = 'hero';
let count = 0;
count += 1;
```

**Tricky:** `const` prevents reassignment of the binding, not mutation of an object or array.

```js
const items = [];
items.push('first'); // valid: array contents changed
// items = ['other']; // TypeError: cannot reassign a const binding
```

Use `const` for a reference that stays the same, even when the referenced object will be updated. Prefer immutable updates when that makes the code clearer or safer.

---

### 5. Template literals

Template literals use backticks. They allow expressions inside `${...}` and make multiline strings easier to read.

```js
const name = 'Mina';
const greeting = `Hello, ${name}!`;

const selector = `.${blockName} .title`;
```

**Tricky:** a template literal inserts the value as text; it does not automatically escape or sanitize data for HTML. Avoid building markup from untrusted values and assigning it to `innerHTML`. Prefer DOM APIs such as `textContent`:

```js
title.textContent = userSuppliedTitle;
```

Backticks inside a template literal must be escaped with `\``. A multiline template preserves line breaks and indentation, which may matter if the string is used as content.

---

### 6. Destructuring

Destructuring pulls values out of arrays or properties out of objects into variables.

```js
const [first, second] = ['A', 'B'];
const { title, href } = link;
```

Rename a property or give it a fallback while destructuring:

```js
const { title: heading = 'Untitled' } = item;
```

**Tricky:** destructuring expects a value to exist. This throws if `item` is `null` or `undefined`:

```js
const { title } = item;
```

If the whole object may be missing, provide a fallback first:

```js
const { title } = item ?? {};
```

The fallback in a destructuring pattern applies to `undefined`, not `null`: `{ title = 'Untitled' }` still yields `null` if the property is explicitly `null`.

---

### 7. Spread and rest: `...`

The same three dots have two related roles. **Spread** expands an iterable or object into individual values/properties. **Rest** gathers remaining values into an array or object.

### Spread an array or object

```js
const original = ['hero', 'footer'];
const allBlocks = [...original, 'header'];

const defaults = { active: true, size: 'medium' };
const options = { ...defaults, size: 'large' };
// { active: true, size: 'large' }
```

### Gather the rest

```js
const [first, ...remaining] = ['a', 'b', 'c'];
// first === 'a'; remaining is ['b', 'c']

function logFirst(label, ...values) {
  console.log(label, values);
}
```

**Tricky:** spread makes a shallow copy. Nested objects remain shared references:

```js
const original = { config: { enabled: true } };
const copy = { ...original };
copy.config.enabled = false;
// original.config.enabled is now false too
```

For objects, later properties overwrite earlier properties. For arrays, spread copies elements in order. Rest must come last in its destructuring pattern or parameter list.

---

### 8. Optional chaining: `?.`

Optional chaining safely accesses a property, calls a method, or indexes an array when the value before `?.` may be `null` or `undefined`. It stops and returns `undefined` instead of throwing.

```js
const city = user?.address?.city;
const firstItem = items?.[0];
const result = service?.load?.();
```

**Tricky:** optional chaining does not protect an undeclared variable, and it does not make every later access safe:

```js
// user.address?.city still throws if user is null
// unknownVariable?.value still throws if unknownVariable was never declared
```

Start the chain at the possibly missing value (`user?.address?.city`). Optional calls only help if the method itself may be absent; if it exists but is not a function, the call still throws. The expression returns `undefined` on a short circuit, so combine it with `??` if you need a fallback.

---

### 9. Nullish coalescing: `??`

`left ?? right` uses `right` only when `left` is `null` or `undefined`. It is useful when `0`, `false`, or an empty string are valid values that should be preserved.

```js
const pageSize = configuredPageSize ?? 20;
const label = suppliedLabel ?? 'Untitled';
```

**Tricky:** `??` is not the same as `||`. `||` falls back for every falsy value, including `0`, `false`, and `''`.

```js
0 || 10;  // 10
0 ?? 10;  // 0
'' || 'Default'; // 'Default'
'' ?? 'Default'; // ''
```

JavaScript does not allow `??` to be mixed directly with `&&` or `||` without parentheses. Write `(a || b) ?? c` or `a || (b ?? c)` to make the intended order explicit.

---

### 10. Ternary operator

The ternary is a compact conditional expression: `condition ? valueWhenTrue : valueWhenFalse`. Use it when choosing between two simple values.

```js
const status = isReady ? 'Ready' : 'Loading';
```

**Tricky:** ternaries can be nested, but they quickly become difficult to scan. Prefer `if`/`else` when the branches do multiple things or need more than one decision.

```js
const message = hasError
  ? 'Could not load'
  : isLoading
    ? 'Loading…'
    : 'Loaded';
```

Also remember that the condition is converted to a boolean. An empty array `[]` and empty object `{}` are truthy, while `''`, `0`, `NaN`, `null`, and `undefined` are falsy.

---

### 11. Logical operators: `&&` and `||`

`&&` and `||` both short-circuit and return one of their operands; they do not necessarily return `true` or `false`.

- `a && b`: if `a` is falsy, return `a`; otherwise evaluate and return `b`.
- `a || b`: if `a` is truthy, return `a`; otherwise evaluate and return `b`.

They are often used for conditional execution or fallback values:

```js
isVisible && showPanel();
const name = providedName || 'Guest';
```

**Tricky:** `count && renderCount(count)` returns `0` when `count` is zero. In a UI, that zero might be rendered, even though you intended to render nothing. If you require a boolean check, compare explicitly:

```js
count > 0 && renderCount(count);
```

Use `??` instead of `||` when only missing values should trigger a fallback. Use `&&` when the left side should act as a condition, not merely because the syntax is short.

---

### 12. Default parameters

Default parameters provide a value when an argument is omitted or explicitly passed as `undefined`.

```js
function greet(name = 'there') {
  return `Hello, ${name}!`;
}

greet(); // "Hello, there!"
```

Parameters can depend on earlier parameters:

```js
function createLabel(name, prefix = 'Item: ') {
  return `${prefix}${name}`;
}
```

**Tricky:** passing `null` does not activate the default.

```js
greet(undefined); // "Hello, there!"
greet(null);      // "Hello, null!"
```

Default parameters are evaluated when the function is called. Use `??` inside the function if both `null` and `undefined` should mean “not provided.”

---

### 13. Asynchronous JavaScript: promises, `async`, and `await`

Many project operations take time: network requests (`fetch`), loading configuration, and loading page data. JavaScript represents a future result with a **promise**. An `async` function always returns a promise. Inside it, `await` pauses that function until a promise settles, while the browser can keep doing other work.

```js
async function loadPageData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json(); // also a promise; async callers can await it
}

const data = await loadPageData('/data.json');
```

Calling an async function without `await` does not give you its final value; it gives you a promise. Await it, return it, or attach `.then()`/`.catch()` handlers.

### Run independent work together

If two requests do not depend on each other, `Promise.all` starts/waits for both concurrently:

```js
const [profile, addresses] = await Promise.all([
  loadProfile(),
  loadAddresses(),
]);
```

`Promise.all` rejects as soon as one input rejects. Use `Promise.allSettled` when each operation should finish and report its own result even if a different operation fails:

```js
const results = await Promise.allSettled([loadProfile(), loadRecommendations()]);
const profileResult = results[0];
if (profileResult.status === 'fulfilled') {
  renderProfile(profileResult.value);
}
```

**Tricky:** this does not wait for the request, so the `try` block cannot catch its rejection:

```js
try {
  fetch('/data.json'); // missing await or return
} catch (error) {
  // will not catch a later network rejection
}
```

Use `await fetch(...)` inside `try`, or `return fetch(...).catch(...)`. Also, `fetch` typically rejects for network failures, but an HTTP 404/500 still fulfills with a `Response`; check `response.ok` yourself. Avoid awaiting independent requests one after another, as that adds unnecessary delay.

---

### 14. `if`, `switch`, and early return

Use `if`/`else` for branching, `switch` when comparing one value against several fixed cases, and early returns to handle exceptional or empty cases before the main logic.

```js
if (!block) {
  return;
}

if (mode === 'compact') {
  setCompactLayout();
} else {
  setStandardLayout();
}
```

```js
switch (status) {
  case 'ready':
    showContent();
    break;
  case 'loading':
    showSpinner();
    break;
  default:
    showFallback();
}
```

**Tricky:** `switch` cases fall through unless they end with `break`, `return`, or another control-flow statement. Fallthrough is sometimes intentional, but accidental fallthrough can run the next case too. `switch` uses strict equality, so `case 1` does not match the string `'1'`.

Early returns reduce deeply nested code, but make sure all required cleanup happens before returning (or use `finally` for cleanup that must always run).

---

### 15. Error handling: `try`, `catch`, and `throw`

`try` runs code that may fail. If a synchronous exception occurs, control moves to `catch`. `throw` signals an error deliberately. Use `finally` for work that must happen whether the operation succeeds or fails.

```js
try {
  const data = JSON.parse(rawText);
  useData(data);
} catch (error) {
  console.error('Could not read the saved data', error);
}
```

Throw an `Error` with a useful message when an input or state violates a requirement:

```js
function getRequiredTitle(block) {
  const title = block.querySelector('h2');
  if (!title) {
    throw new Error('The example block requires an h2 title.');
  }
  return title.textContent;
}
```

**Tricky:** `try/catch` around a promise does not catch a later rejection unless you await it inside the `try`:

```js
async function loadData() {
  try {
    const response = await fetch('/data.json');
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Loading failed', error);
    throw error; // rethrow if the caller also needs to know
  }
}
```

In a non-`async` function, use `.catch(...)` on a promise. Catch errors you can handle meaningfully; swallowing an error and continuing with invalid data can make failures harder to diagnose.

---

### 16. Project patterns: arrays, DOM, and safe rendering

These are combinations of the core features above that appear frequently in EDS code.

### Turn DOM collections into arrays

DOM methods such as `querySelectorAll` return a `NodeList`, and `children` returns an `HTMLCollection`. Spread syntax makes a regular array so array helpers are available:

```js
const links = [...block.querySelectorAll('a')];
const labels = links.map((link) => link.textContent.trim());
```

### Choose the right array helper

- `map` transforms every item and returns a new array.
- `filter` keeps matching items and returns a new array.
- `find` returns the first matching item, or `undefined`.
- `some` answers whether at least one item matches.
- `every` answers whether all items match.
- `forEach` performs an action per item; it does not build a result array.

```js
const visibleProducts = products.filter((product) => product.visible);
const firstSale = visibleProducts.find((product) => product.isOnSale);
const names = visibleProducts.map((product) => product.name);
```

**Tricky:** do not use `forEach` when you need the returned array; it returns `undefined`. Also, `find` can return `undefined`, so check before reading properties. In async work, `items.forEach(async (item) => ...)` does not wait for callbacks. Use `await Promise.all(items.map(async (item) => ...))` when you need all results.

### Event callbacks and event targets

Browser events pass an event object to the callback. Its `target` is where the event originated; `currentTarget` is the element whose listener is currently running. They differ when a user clicks a child inside a button.

```js
button.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('is-active');
});
```

Use `currentTarget` when the handler is attached to the element you intend to update. Event listeners often run later, so variables read by the callback may have changed since the listener was registered.

### Render values safely

Template literals make strings readable, but they do not sanitize HTML. For plain text, set `textContent`. If rendering markup is necessary, keep the markup structure controlled and insert user or author-provided values through DOM text nodes or a project-approved sanitization path.

```js
const heading = document.createElement('h2');
heading.textContent = authoredTitle;
block.append(heading);
```

This avoids treating a title such as `<img src=x onerror=...>` as executable markup. Be deliberate with `.innerHTML`, particularly when a string contains content from a page author, API, query parameter, or user.

---

## Group 2 — Arrays, Objects and Strings

This group covers collection transformations, object utilities, text processing, numbers, dates, and JSON.

### 17. Arrays, objects, strings, and common built-ins

This chapter goes deeper on the collections and text operations that show up throughout the project. The examples use products, links, and DOM elements, but the same ideas apply to other data.

### 17.1 Array methods

Array methods such as `map`, `filter`, and `reduce` do not normally change the original array. `forEach` is used for side effects. Most take a callback with `(item, index, array)` parameters; use only the parameters you need.

#### `map()` — transform every item

`map` calls a function for every item and returns a **new array of the callback results**, with the same length as the input.

```js
const prices = [10, 20, 30];
const pricesWithTax = prices.map((price) => price * 1.1);
// [11, 22, 33]; prices is still [10, 20, 30]

const names = products.map((product) => product.name);
```

It is common to map records into display strings or DOM elements:

```js
const labels = addresses.map((address) =>
  `${address.city}, ${address.postcode}`);
```

**Tricky:** returning nothing from a block-bodied callback produces `undefined` for that position:

```js
const wrong = prices.map((price) => { price * 1.1; });
// [undefined, undefined, undefined] — braces require `return`
```

Use `map` only when you want a corresponding result for each input item. If you only want to perform an action, use `forEach`; if you want to keep or reject items, use `filter`.

#### `filter()` — keep matching items

`filter` calls a predicate for each item and returns a new array containing only items whose predicate result is truthy. The original array is unchanged.

```js
const inStock = products.filter((product) => product.stock > 0);
const nonEmptyLines = lines.filter((line) => line.trim() !== '');
```

**Tricky:** filtering with `Boolean` removes all falsy values, including valid `0`, `false`, and empty strings:

```js
const values = [0, 1, '', 'hello', false];
values.filter(Boolean); // [1, 'hello']
```

That is useful for removing missing/empty address parts, but wrong if zero is meaningful (for example, a quantity or price). State the rule explicitly when valid falsy values are possible.

#### `find()` — get the first match

`find` returns the first item whose predicate is truthy, or `undefined` when no item matches.

```js
const thumbnail = product.images.find((image) => image.role === 'thumbnail');
if (thumbnail) {
  showImage(thumbnail.url);
}
```

**Tricky:** `find` does not return an array, and reading a property directly can fail if no match exists. Use a check or optional chaining: `const url = images.find(isThumbnail)?.url;`. Also, `find` stops at the first match; use `filter` if you need every match.

#### `forEach()` — perform an action for each item

`forEach` runs a callback for each array item and returns `undefined`.

```js
buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});
```

**Tricky:** `return` inside the callback does not return from the outer function, and `forEach` cannot be stopped with `break`. Use a `for...of` loop if you need early exit or sequential `await`:

```js
for (const item of items) {
  if (isTheOne(item)) break;
  await processItem(item);
}
```

`items.forEach(async (item) => await save(item))` starts asynchronous callbacks but does not wait for them. For concurrent work that you need to await, use `await Promise.all(items.map(save))`.

#### `some()` and `every()` — ask a yes/no question

`some` returns `true` when at least one item matches. `every` returns `true` only when all items match.

```js
const hasVideo = links.some((link) => link.href.endsWith('.mp4'));
const allValid = fields.every((field) => field.value.trim() !== '');
```

Both stop as soon as the answer is known. **Tricky:** `[].some(...)` is `false`, while `[].every(...)` is `true` (there is no item that violates the condition). If an empty collection should be invalid, check its length too: `fields.length > 0 && fields.every(isValid)`.

#### `includes()` — test for a value

Array `includes` checks whether the array contains a value, using SameValueZero comparison (similar to strict equality, but it can find `NaN`). It returns a boolean.

```js
const supported = ['jpg', 'png', 'webp'];
supported.includes('webp'); // true
```

**Tricky:** object and array elements are compared by identity, not by their contents:

```js
[{ id: 7 }].includes({ id: 7 }); // false: these are different objects
```

For records, use `some(item => item.id === wantedId)` instead.

#### `flat()` and `flatMap()` — flatten nested arrays

`flat(depth)` returns a new array with nested arrays flattened by the requested depth. The default depth is one.

```js
[['a', 'b'], ['c']].flat(); // ['a', 'b', 'c']
[[['a']], [['b']]].flat(2); // ['a', 'b']
```

`flatMap` maps each item and flattens the results by one level. It is useful when one input can produce zero, one, or several outputs:

```js
const allTags = products.flatMap((product) => product.tags || []);
const words = ['red blue', 'green'].flatMap((text) => text.split(' '));
// ['red', 'blue', 'green']
```

**Tricky:** `flatMap` only flattens one level. It does not recursively flatten arbitrary nesting, and both methods create a new outer array but do not deep-copy objects.

#### `reduce()` — combine items into one result

`reduce` carries an accumulator through the array. On each item, the callback returns the next accumulator. It can calculate totals, group values, or build an object, but use a simpler method when one already expresses the task better.

```js
const quantities = [2, 3, 4];
const total = quantities.reduce((sum, quantity) => sum + quantity, 0);
// 9
```

The second argument (`0` here) is the initial accumulator. For grouping:

```js
const grouped = products.reduce((result, product) => {
  const category = product.category || 'Other';
  (result[category] ||= []).push(product);
  return result;
}, {});
```

**Tricky:** omitting the initial value makes the first array item the accumulator and starts at the second item. On an empty array this throws; with a supplied initial value, an empty array returns that value. Usually supply an initial value so the result type and empty-array behavior are clear. Always return the accumulator from the callback.

### 17.2 DOM collections: `Array.from()` and spread

`querySelectorAll` returns a `NodeList`, while `element.children` returns an `HTMLCollection`. Both can be iterated, but converting them to arrays lets you use the full set of array methods.

```js
const paragraphs = [...block.querySelectorAll('p')];
const links = Array.from(block.querySelectorAll('a'));
const firstThree = [...block.children].slice(0, 3);
```

`Array.from` can also transform each item as it converts:

```js
const linkTexts = Array.from(block.querySelectorAll('a'), (link) =>
  link.textContent.trim());
```

**Tricky:** `Array.from` and spread make a shallow array copy. The elements themselves are the same DOM nodes, not cloned nodes. Also, a `NodeList` from `querySelectorAll` is static; it does not update when matching elements are later added. Re-query when you need the latest nodes.

### 17.3 Object methods

Objects store values under keys. The following methods inspect or combine an object's own enumerable string-keyed properties.

#### `Object.keys()`

Returns an array of the object's own enumerable property names.

```js
const config = { locale: 'en', pageSize: 20 };
Object.keys(config); // ['locale', 'pageSize']
```

#### `Object.values()`

Returns an array of the corresponding values, in the same property order as `Object.keys()`.

```js
Object.values(config); // ['en', 20]
```

#### `Object.entries()`

Returns `[key, value]` pairs, useful for iterating over both keys and values.

```js
for (const [key, value] of Object.entries(config)) {
  console.log(`${key}: ${value}`);
}
```

To build a new object from entries, use `Object.fromEntries(...)`:

```js
const upperConfig = Object.fromEntries(
  Object.entries(config).map(([key, value]) => [key.toUpperCase(), value]),
);
```

**Tricky:** these methods do not include inherited properties and ignore symbol-keyed properties. Property order is defined, but numeric-looking keys are enumerated before other string keys in numeric order. Do not treat object key order as a substitute for an explicitly ordered list when order is important.

#### `Object.assign()`

Copies enumerable own properties from one or more source objects into a target object, then returns that target. Later sources overwrite earlier properties.

```js
const defaults = { theme: 'light', pageSize: 10 };
const options = Object.assign({}, defaults, { pageSize: 20 });
// { theme: 'light', pageSize: 20 }
```

**Tricky:** the first argument is mutated. `Object.assign(target, source)` changes `target`; use `{}` as the target if you want a new top-level object. The copy is shallow, and getters on sources may run while copying. A common object spread form, `{ ...defaults, pageSize: 20 }`, also makes a shallow copy.

#### `Object.freeze()`

Prevents adding, removing, or changing an object's own properties (and prevents changing its prototype). It returns the same object.

```js
const settings = Object.freeze({ mode: 'compact' });
// settings.mode = 'wide'; // fails or is ignored, depending on strict mode
```

**Tricky:** freezing is shallow. A nested object can still be modified unless it is frozen separately:

```js
const settings = Object.freeze({ display: { mode: 'compact' } });
settings.display.mode = 'wide'; // nested object was not frozen
```

In ES modules, code runs in strict mode, so changing a frozen property generally throws a `TypeError`. Freezing is useful for shared constants, but it does not create a deep immutable data structure.

### 17.4 `Map` and `Set`

Use a `Map` for key/value data when keys may be values other than strings, when frequent add/remove/lookup operations are needed, or when you want an explicit collection API. A `Set` stores unique values.

```js
const blockByElement = new Map();
blockByElement.set(block, 'hero'); // DOM element is a valid key
blockByElement.get(block); // 'hero'
blockByElement.has(block); // true

const visitedPaths = new Set(['/shop', '/about']);
visitedPaths.add('/shop'); // still one '/shop'
visitedPaths.has('/about'); // true
```

Both preserve insertion order and can be iterated. Convert them when array methods are needed: `[...visitedPaths]`, `[...blockByElement.entries()]`, or `Array.from(visitedPaths)`.

**Tricky:** `Map` object keys compare by identity (`map.get({ id: 1 })` will not find a different `{ id: 1 }` object). `Set` likewise deduplicates object references, not structurally equal objects. For simple string keys, a plain object may be more convenient; be mindful of inherited property names and use `Object.hasOwn` for own-property checks.

### 17.5 String methods

Strings are immutable: string methods return a new string and do not change the original.

#### `trim()`

Removes whitespace from both ends, not from the middle.

```js
'  Sony Biotech  '.trim(); // 'Sony Biotech'
' a  b '.trim(); // 'a  b'
```

Use it for form values and authored text before checking whether they are empty. It does not remove arbitrary punctuation or internal spaces.

#### `split()`

Splits a string around a separator and returns an array.

```js
'red|blue|green'.split('|'); // ['red', 'blue', 'green']
'a,b,c'.split(',', 2); // ['a', 'b']
```

**Tricky:** splitting on a delimiter that is absent returns a one-item array. Splitting an empty string on a comma returns `['']`, not `[]`. A string separator is literal (`'.'` means a period); a regular expression separator follows regex rules.

#### `slice()`

For strings and arrays, `slice(start, end)` returns a portion without modifying the original. `end` is excluded, and negative indexes count from the end.

```js
'JavaScript'.slice(0, 4); // 'Java'
'JavaScript'.slice(-6); // 'Script'
```

**Tricky:** the second argument is an end position, not a length. `slice(2, 5)` gives indexes 2, 3, and 4. If end is before start, the result is empty.

#### `startsWith()` and `endsWith()`

Return whether a string begins or ends with the supplied text (case-sensitive by default).

```js
const path = '/us/shop/item/';
path.startsWith('/us/'); // true
path.endsWith('/'); // true
```

For URLs, use `URL` and inspect `pathname` when query strings or origins matter; checking the raw URL string suffix can give a misleading answer (`/item?ref=x` does not end with `/item`).

#### `replace()` and `replaceAll()`

`replace` replaces the first matching string occurrence, or the matches selected by a regular expression. `replaceAll` replaces every occurrence of a string, or every regex match when the regex has the global `g` flag.

```js
'a-a-a'.replace('-', ':'); // 'a:a-a'
'a-a-a'.replaceAll('-', ':'); // 'a:a:a'
'a-a-a'.replace(/-/g, ':'); // 'a:a:a'
```

**Tricky:** `replaceAll(/-/...)` requires a global regular expression; without `g`, it throws. Replacement strings interpret patterns such as `$&` (the matched text) and `$1` (a capture group). Use a replacement callback if you need the literal dollar signs or logic per match.

#### `toLowerCase()`

Returns a lowercase version of the string, useful for case-insensitive comparisons.

```js
const normalized = heading.textContent.trim().toLowerCase();
```

It does not alter the original. For locale-specific human language comparisons, use `toLocaleLowerCase(locale)` because casing rules can vary by language.

#### String `includes()`

Checks whether one string contains another string; it is case-sensitive and returns a boolean.

```js
'flow cytometry'.includes('cyto'); // true
'flow cytometry'.toLowerCase().includes('CYTO'.toLowerCase()); // true
```

An empty search string is considered present (`'abc'.includes('')` is `true`). Normalize case or whitespace explicitly when the comparison should ignore them.

### 17.6 Regular expressions: `RegExp`

A regular expression describes a text pattern. Write one as a literal (`/pattern/flags`) or construct one with `new RegExp(patternString, flags)`. Common flags include `i` (case-insensitive), `g` (all matches), and `m` (multiline anchors).

```js
const videoPattern = /\.(mp4|webm)(\?.*)?$/i;
videoPattern.test('clip.MP4?autoplay=1'); // true

const extension = 'mp4';
const pattern = new RegExp(`\\.${extension}$`, 'i');
```

Use a regex literal for a fixed pattern. Use the constructor when building a pattern from a variable. In a constructor string, backslashes must be escaped (`'\\d+'` represents regex `\d+`). Escape user-provided strings before inserting them into a pattern if they should be matched literally.

**Tricky:** regexes with `g` or `y` are stateful when `.test()` is called repeatedly; their `lastIndex` changes, so the same input can alternate results. Remove those flags for simple yes/no tests, or reset `lastIndex`. Also, `.` usually means any character, not a literal dot; write `\.` to match a period.

### 17.7 Number conversion

#### `Number()`

Converts a whole value to a number. It is strict about extra nonnumeric characters.

```js
Number('42'); // 42
Number(''); // 0
Number('42px'); // NaN
Number(null); // 0
```

#### `parseInt()` and `parseFloat()`

These parse a numeric prefix from a string. Supply radix `10` to `parseInt` for decimal integers.

```js
parseInt('42px', 10); // 42
parseFloat('3.14rem'); // 3.14
parseInt('3.9', 10); // 3 (fraction discarded)
```

**Tricky:** all three can yield surprising results for empty or malformed input. `Number('')` is `0`, while `parseInt('', 10)` is `NaN`; `parseInt('12abc', 10)` is `12`. Validate the input and check with `Number.isNaN(value)` (or `Number.isFinite(value)`) before using it. For user-entered quantities, consider rejecting partial strings like `'4items'` instead of accepting their numeric prefix.

### 17.8 `Math`

`Math` is a built-in object with numeric helpers; it is not constructed with `new`.

```js
Math.round(3.5); // 4
Math.floor(3.9); // 3
Math.ceil(3.1); // 4
Math.max(2, 8, 4); // 8
Math.min(...prices); // smallest price
```

`Math.random()` returns a pseudo-random number from `0` inclusive to `1` exclusive. For an integer from `min` through `max` inclusive:

```js
const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
```

**Tricky:** `Math.min(...[])` is `Infinity` and `Math.max(...[])` is `-Infinity`; handle empty arrays. Rounding money with floating-point numbers can introduce precision issues (`0.1 + 0.2 !== 0.3`). For currency, use integer minor units (for example, cents) or a decimal-money strategy rather than assuming binary floating point is exact.

### 17.9 Dates and `toLocaleDateString()`

`Date` represents an instant in time (milliseconds since the Unix epoch) or a local calendar date/time derived from it. The output of `toLocaleDateString` depends on locale and time zone unless you specify options.

```js
const now = new Date();
const display = now.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});
```

**Important date-only trap:** parsing an ISO date-only string such as `new Date('2026-10-29')` treats it as UTC. In a time zone behind UTC, formatting it as a local date can show the previous calendar day. If a value represents a calendar date (not an instant), parse its year/month/day and construct a local date deliberately:

```js
function parseLocalDate(dateText) {
  const [year, month, day] = dateText.split('-').map(Number);
  return new Date(year, month - 1, day); // month numbers start at zero
}
```

This project has a similar date-only parsing concern in `scripts/article-bck.js`. Invalid input can produce an invalid date (`Number.isNaN(date.getTime())` is true). Avoid relying on browser parsing of ambiguous strings such as `03/04/2026`; use an explicit format and timezone policy.

### 17.10 JSON: `JSON.parse()` and `JSON.stringify()`

JSON is a text format for data. `JSON.parse` turns valid JSON text into JavaScript values; `JSON.stringify` serializes supported JavaScript data as JSON text.

```js
const text = '{"name":"Mina","active":true}';
const person = JSON.parse(text);
const savedText = JSON.stringify(person);
```

Useful options include indentation for readable output and a replacer for selecting or transforming properties:

```js
JSON.stringify(person, null, 2); // pretty-printed JSON
```

**Tricky:** `JSON.parse` throws on invalid JSON, so handle untrusted or persisted text with `try/catch`. JSON does not preserve every JavaScript value: functions and `undefined` object properties are omitted, `undefined` array entries become `null`, `Date` values become strings, and `Map`/`Set` need explicit conversion. Circular references make `JSON.stringify` throw. JSON is not a deep-clone solution for arbitrary values.

```js
let parsed;
try {
  parsed = JSON.parse(localStorage.getItem('settings') || '{}');
} catch (error) {
  parsed = {}; // corrupted stored data: use a safe fallback
}
```

### Choosing among these tools

- Transform items with `map`; keep items with `filter`; locate one with `find`.
- Ask a yes/no question with `some`/`every`; do a side effect with `forEach`.
- Use `reduce` when you truly need to accumulate a result and can explain the accumulator.
- Use `Map`/`Set` when their key and uniqueness behavior helps; use arrays when order and array operations are central.
- Normalize strings deliberately, validate number conversions, and set date locale/time zone intentionally.
- Treat JSON parsing as fallible and JSON serialization as a restricted data format.

---

## Group 3 — DOM APIs

This group covers selecting, creating, changing, and safely rendering page elements.

### 18. DOM APIs

The DOM (Document Object Model) is the browser's object representation of a page. JavaScript can find elements, create or move nodes, change text and attributes, and respond to the page structure. In EDS block code, `block` is usually the root element to work inside. Scoping queries to `block` avoids accidentally changing matching elements elsewhere on the page.

```js
const title = block.querySelector('h2');
```

### 18.1 Finding elements

#### `querySelector()`

Returns the first descendant matching a CSS selector, or `null` if none matches.

```js
const title = block.querySelector('.title');
const firstLink = block.querySelector('a[href]');

if (title) {
  title.classList.add('enhanced-title');
}
```

The selector follows CSS syntax. To include the root element itself in a search, use `matches()` on it; `querySelector` searches descendants, not the element on which it is called.

#### `querySelectorAll()`

Returns a static `NodeList` of all matching descendants. If nothing matches, it returns an empty `NodeList`, not `null`.

```js
const links = block.querySelectorAll('a');
links.forEach((link) => link.setAttribute('rel', 'noopener'));
```

Convert to an array for methods such as `map`, or when you need array operations:

```js
const linksArray = [...block.querySelectorAll('a')];
```

**Tricky:** `querySelectorAll` returns a static snapshot. If matching elements are inserted later, an earlier result does not update. Query again when fresh results are required. Also check whether a single match may be missing before accessing it.

### 18.2 Creating elements and inserting nodes

#### `createElement()`

Creates a new element in memory. It is not visible in the document until inserted.

```js
const note = document.createElement('p');
note.className = 'block-note';
note.textContent = 'Details are available below.';
```

Use `textContent` for plain text. Add child elements with DOM methods rather than concatenating untrusted text into HTML.

#### `append()` and `prepend()`

`append(...nodesOrStrings)` adds one or more nodes or text strings at the end of an element. `prepend(...)` adds them at the beginning.

```js
const badge = document.createElement('span');
badge.textContent = 'New';
block.prepend(badge);

const message = document.createElement('p');
message.textContent = 'Learn more';
block.append(message, ' Updated');
```

These methods return `undefined`. They accept strings as text, not parsed HTML.

**Tricky:** inserting a node that already belongs elsewhere moves that same node; it does not clone it. If you need a copy, call `cloneNode(true)` (deep clone) and consider whether IDs or event listeners need attention. `appendChild` is an older alternative that takes one node and returns the inserted node.

#### `before()` and `after()`

Insert nodes or text as siblings immediately before or after an existing element.

```js
const heading = block.querySelector('h2');
const intro = document.createElement('p');
intro.textContent = 'An introduction';
heading?.before(intro);
```

They do nothing if the reference element has no parent. They also move existing nodes rather than copying them.

#### `replaceWith()` and `replaceChildren()`

`replaceWith(...nodesOrStrings)` replaces an element itself among its parent's children. `replaceChildren(...nodesOrStrings)` removes all children of the receiver and inserts the supplied content.

```js
const oldTitle = block.querySelector('h2');
const newTitle = document.createElement('h2');
newTitle.textContent = 'Updated title';
oldTitle?.replaceWith(newTitle);

const status = block.querySelector('.status');
status?.replaceChildren('Ready'); // replace its child content with text
```

**Tricky:** calling `block.replaceChildren()` with no arguments empties the block. That can be intended for a full rerender, but it also removes existing child nodes and their event listeners. `replaceWith` on a detached element has no visible effect.

#### `remove()`

Removes an element from its parent. The removed node still exists as a JavaScript object and could be reinserted later.

```js
block.querySelector('.loading')?.remove();
```

`remove()` is safe to call on a node without a parent; there is simply nothing to remove. Removing an ancestor also removes all its descendants from the document.

### 18.3 Text and HTML insertion

#### `textContent`

Gets or sets the text content of a node and all its descendants. Setting it replaces the node's children with one text node (or no child for an empty string).

```js
const heading = block.querySelector('h2');
if (heading) heading.textContent = apiTitle;
```

This treats `<strong>Hello</strong>` as literal text and does not parse it as markup. That behavior is desirable for untrusted or plain text. Reading `textContent` includes text from hidden descendants, unlike `innerText`, which is layout-aware and can trigger layout work.

**Tricky:** setting `textContent` on a container destroys its existing child elements and their listeners. Set it on the specific text element you intend to update.

#### `innerHTML`

Gets or sets the markup inside an element. Setting it parses the string as HTML and replaces all existing children.

```js
const panel = block.querySelector('.panel');
if (panel) {
  panel.innerHTML = '<p class="message">Loaded</p>';
}
```

Use only when the HTML string is trusted or properly sanitized. Inserting user input, query parameters, API data, or authored content into an HTML string can create cross-site scripting (XSS). Prefer `createElement` and `textContent` for text.

**Tricky:** replacing children using `innerHTML` removes listeners attached directly to the old child nodes. It also parses markup, so this is unsafe:

```js
// Unsafe if name can contain untrusted input:
panel.innerHTML = `<p>Hello ${name}</p>`;
```

Prefer:

```js
const paragraph = document.createElement('p');
paragraph.textContent = `Hello ${name}`;
panel.replaceChildren(paragraph);
```

#### `insertAdjacentHTML()`

Parses an HTML string and inserts it at a position relative to the element without replacing all of its children. Positions are `beforebegin`, `afterbegin`, `beforeend`, and `afterend`.

```js
panel.insertAdjacentHTML('beforeend', '<p>Another item</p>');
```

`beforebegin` and `afterend` insert siblings and require the element to have a parent. Like `innerHTML`, this parses HTML and carries the same injection risk. Use it for trusted, fixed markup; do not treat it as a safe way to insert arbitrary strings.

### 18.4 Classes, styles, and attributes

#### `classList.add()`, `remove()`, `toggle()`, and `contains()`

`classList` is a token-based interface for an element's classes.

```js
panel.classList.add('is-open');
panel.classList.remove('is-loading');
const isOpen = panel.classList.contains('is-open');
panel.classList.toggle('is-open'); // switch current state
```

`toggle(name, force)` can explicitly add or remove based on a boolean:

```js
panel.classList.toggle('is-open', shouldOpen);
```

This form is often safer than manually keeping a class in sync. **Tricky:** a bare `toggle` reverses current state. If state can change elsewhere, toggling may produce the opposite of the desired state; use the `force` argument to set the class to a known condition.

#### Attributes: `setAttribute()`, `getAttribute()`, `removeAttribute()`

Attributes are string values in the element's markup. `getAttribute` returns a string or `null`; `setAttribute` stringifies its value; `removeAttribute` deletes it.

```js
link.setAttribute('rel', 'noopener noreferrer');
const href = link.getAttribute('href');
link.removeAttribute('target');
```

For boolean HTML attributes, presence generally means true: `disabled="false"` is still disabled because the attribute exists. To turn a boolean attribute off, remove it; to turn it on, set it (often to an empty string).

Some common attributes have reflected DOM properties, such as `input.value`, `input.disabled`, `link.href`, and `element.id`. These properties may expose normalized or current runtime values, while `getAttribute` reads the content attribute. For example, an input's `.value` can change after typing while its `value` attribute still reflects the original markup.

#### `dataset` and `data-*`

HTML `data-*` attributes are exposed as string properties through `element.dataset`. Hyphenated names become camelCase.

```html
<button data-product-id="42" data-open-panel="shipping">Shipping</button>
```

```js
const button = block.querySelector('button');
const productId = button.dataset.productId; // '42' (a string)
button.dataset.openPanel = 'returns'; // writes data-open-panel="returns"
delete button.dataset.openPanel; // removes the attribute
```

Convert data explicitly if you need a number or boolean: `Number(button.dataset.productId)` or `button.dataset.enabled === 'true'`. **Tricky:** dataset values are strings; the text `'false'` is truthy. `data-user-id` maps to `dataset.userId`, not `dataset['user-id']` (though bracket notation with `userId` also works).

#### `style` and `className`

`element.style` changes inline styles. CSS property names are camelCase in JavaScript; custom properties use `setProperty`.

```js
panel.style.backgroundColor = 'white';
panel.style.setProperty('--panel-gap', '1rem');
panel.style.removeProperty('background-color');
```

Prefer CSS classes for reusable presentation and use inline style for values that truly vary at runtime. Setting `style.cssText` replaces the entire inline style attribute.

`className` reads or sets the whole class attribute as a string:

```js
panel.className = 'panel panel--open'; // replaces all classes
```

**Tricky:** assigning `className` can wipe classes added by another feature. Use `classList.add/remove/toggle` to make a focused change. For SVG elements, `className` may not be a plain string in every context; `classList` is generally clearer.

#### `getComputedStyle()`

Returns the browser's resolved CSS styles for an element, including styles from stylesheets and inheritance. It is read-only.

```js
const styles = getComputedStyle(panel);
const display = styles.display;
const gap = styles.getPropertyValue('--panel-gap');
```

Computed values can differ from the literal CSS declaration (for example, colors may be normalized). Reading styles after changing layout can cause the browser to calculate layout. Avoid repeatedly reading computed styles inside large update loops; batch DOM writes and reads where practical.

### 18.5 DOM relationships and selectors

#### `closest()`

Starting at an element itself, walks upward through its ancestors and returns the first element matching the selector, or `null`.

```js
const blockRoot = clickedElement.closest('.block');
```

This is useful for event delegation: a listener on a parent can determine which matching child was clicked. It may return the starting element if that element matches.

#### `matches()`

Returns whether an element matches a CSS selector. It is useful when iterating elements or checking an event target.

```js
if (element.matches('a[href^="https:"]')) {
  markAsExternal(element);
}
```

#### `contains()`

Returns whether a node is the same as, or a descendant of, another node.

```js
if (block.contains(focusedElement)) {
  // focus remains inside this block
}
```

**Tricky:** `block.contains(block)` is `true`. Check that a candidate exists before calling methods on it, and remember `closest` goes up the tree while `querySelector` searches down.

### 18.6 Accessibility attributes: `aria-expanded`, `aria-hidden`, and `role`

ARIA attributes communicate interface meaning and state to assistive technology. They do not add behavior by themselves: JavaScript still needs to open/close the panel, and native HTML elements should be preferred when they already provide the needed semantics.

```js
button.setAttribute('aria-expanded', 'true');
panel.removeAttribute('hidden');
```

On close:

```js
button.setAttribute('aria-expanded', 'false');
panel.setAttribute('hidden', '');
```

- `aria-expanded` belongs on the control that expands/collapses content and should reflect the current state as the string `'true'` or `'false'`.
- `aria-hidden="true"` hides an element from the accessibility tree, but does not visually hide it or prevent keyboard focus. Do not leave focusable controls active inside content marked hidden.
- `role` adds or overrides an accessibility role. Avoid adding a role when a native element already has the correct semantics; an incorrect role can make controls less understandable.

**Tricky:** updating only the visual class is insufficient if the accessible state is stale. Update the visual state, actual visibility, and ARIA state together. For disclosures, use a real `<button>` so keyboard activation and focus behavior work by default.

### 18.7 `DocumentFragment`

A `DocumentFragment` is a lightweight container for building a group of nodes before inserting them. Appending the fragment moves its children into the destination; the fragment itself becomes empty.

```js
const fragment = document.createDocumentFragment();

items.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item.label;
  fragment.append(li);
});

list.replaceChildren(fragment);
```

It can make code clearer when constructing a list. Modern browsers also optimize repeated insertions well, so the main benefit is often simpler grouping rather than a guaranteed performance improvement.

**Tricky:** a fragment is not retained as a wrapper in the live DOM. Its children are moved out when appended. If the same node was already attached elsewhere, it is moved from that old location.

### 18.8 `createRange().createContextualFragment()`

This creates a fragment by parsing an HTML string in a context related to a selected element. It is useful when you need to parse a string into nodes and then insert or inspect those nodes.

```js
const range = document.createRange();
range.selectNodeContents(container);
const fragment = range.createContextualFragment('<strong>Important</strong>');
container.append(fragment);
```

The parsing context matters for some elements such as table rows. This still parses HTML: it is **not** a sanitization mechanism. Never pass untrusted content into it without a proven sanitizer. For plain text, create a text node or use `textContent` instead.

### 18.9 `DOMParser`

`DOMParser` parses a string as a separate document. The parsed nodes are not automatically inserted into the current page.

```js
const parsedDocument = new DOMParser().parseFromString(htmlText, 'text/html');
const titleText = parsedDocument.querySelector('title')?.textContent;
```

This can be useful for reading content from fetched HTML without replacing the current page. For XML, use an XML MIME type and check for parser errors.

**Tricky:** parsing HTML does not make it safe to insert into the live document. Scripts or dangerous attributes may behave differently while detached, but moving parsed nodes into the page can still create security problems. Extract the specific text or values needed, validate them, and create safe DOM nodes for rendering.

### A block example using several DOM APIs

This disclosure-style example keeps the button, panel, CSS class, and ARIA state in sync. In production, add suitable styling and ensure the IDs are unique if multiple blocks can appear on one page.

```js
export default function decorate(block) {
  const sourceHeading = block.querySelector('h2');
  if (!sourceHeading) return;

  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('details-toggle');
  button.textContent = sourceHeading.textContent.trim();
  button.setAttribute('aria-expanded', 'false');

  const panel = document.createElement('div');
  panel.classList.add('details-panel');
  panel.setAttribute('hidden', '');

  // Move the existing content nodes into the new panel.
  const content = [...block.children].filter((child) => child !== sourceHeading);
  panel.append(...content);

  sourceHeading.replaceWith(button);
  block.append(panel);

  button.addEventListener('click', () => {
    const willOpen = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(willOpen));
    panel.classList.toggle('is-open', willOpen);
    panel.toggleAttribute('hidden', !willOpen);
  });
}
```

`toggleAttribute` is a DOM convenience method: it adds or removes the named attribute, and its optional second boolean forces the desired state. The example uses it to keep actual visibility synchronized with `aria-expanded`.

### DOM API safety checklist

- Scope block queries to the block element, and handle missing matches.
- Prefer `textContent` and DOM node creation for dynamic text.
- Treat `innerHTML`, `insertAdjacentHTML`, and contextual fragments as HTML parsing operations with injection risk.
- Remember insertion moves existing nodes; clone intentionally when a copy is needed.
- Keep focus behavior, visual visibility, and ARIA state synchronized.
- Use classes for reusable styling; avoid overwriting unrelated classes or inline styles.

---

## Group 4 — Events and Browser Behavior

This group covers user interactions, browser navigation and history, layout measurements, scrolling, and scheduling visual work.

### 19. Events and browser behavior

Browser code reacts to user actions and page changes through events. It also reads and updates the current URL, scroll position, layout, and timing. These APIs are powerful, but behavior can be subtle: events travel through the DOM, history changes do not automatically fire navigation events, and layout reads can force the browser to calculate styles.

### 19.1 Event listeners

#### `addEventListener()`

Registers a function to run when an event occurs on a target such as an element, `document`, or `window`.

```js
button.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('is-active');
});
```

Common events include `click`, `input`, `change`, `submit`, `keydown`, `focus`, and `scroll`. The event object describes what happened. `target` is the original event source; `currentTarget` is the object whose listener is executing.

Options can control listener behavior:

```js
window.addEventListener('resize', updateLayout, { passive: true });
document.addEventListener('DOMContentLoaded', initialize, { once: true });
```

- `once: true` removes the listener after it runs the first time.
- `passive: true` promises the listener will not call `preventDefault`, allowing smoother scrolling for certain events.
- `capture: true` runs during the capture phase instead of the default bubbling phase.
- `signal` can associate a listener with an `AbortSignal` so a group can be removed with `controller.abort()`.

**Tricky:** `addEventListener` does not deduplicate two different anonymous functions, even if their source code looks identical. Avoid repeatedly registering listeners during rerenders unless you remove them or use an appropriate lifecycle/one-time pattern. Do not mark a listener passive if it needs to cancel the event.

#### `removeEventListener()`

Removes a listener registered on the same target. You must pass the same event type and the same function object. For capture listeners, the capture setting must also match.

```js
function handleKeydown(event) {
  if (event.key === 'Escape') closeDialog();
}

document.addEventListener('keydown', handleKeydown);
// Later, when the dialog is closed or destroyed:
document.removeEventListener('keydown', handleKeydown);
```

**Tricky:** this does not remove the original listener because it creates a new function object:

```js
document.addEventListener('keydown', (event) => handleKeydown(event));
document.removeEventListener('keydown', (event) => handleKeydown(event)); // different function
```

Keep a named function reference, or use an `AbortController` for a group of listeners:

```js
const controller = new AbortController();
button.addEventListener('click', handleClick, { signal: controller.signal });
window.addEventListener('resize', updateLayout, { signal: controller.signal });
// Cleanup both:
controller.abort();
```

Listeners on long-lived objects such as `window` and `document` deserve cleanup because they can keep references to block elements alive after those blocks are removed.

### 19.2 Event flow and cancellation

Most DOM events travel through three phases: capture from ancestors toward the target, target handling, then bubbling back up through ancestors. Bubbling lets a parent listen for events from its descendants (event delegation).

#### `preventDefault()`

Cancels the browser's default action when the event is cancelable. It does not stop event propagation.

```js
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent navigation/form submission
  await saveForm(new FormData(form));
});
```

Common uses include handling a form in JavaScript or preventing a link's navigation while implementing a custom action. Prefer not to cancel standard behavior unless the code replaces it with a clear equivalent.

**Tricky:** calling `preventDefault()` in a passive listener has no effect (and browsers may warn). It also cannot cancel a non-cancelable event. Check `event.cancelable` if needed.

#### `stopPropagation()`

Stops the current event from continuing to travel to other nodes in the capture/bubble path. It does not cancel the default action and does not stop other listeners on the same node.

```js
card.addEventListener('click', openCard);
card.querySelector('.delete').addEventListener('click', (event) => {
  event.stopPropagation(); // do not also activate the card click
  deleteCard();
});
```

`stopImmediatePropagation()` additionally prevents later listeners on the same target from running. Use either propagation-stopping method sparingly; it can make unrelated components harder to compose.

### 19.3 Custom events

#### `CustomEvent`

Create an application-specific event. Put extra information in the `detail` property and set `bubbles: true` if ancestors should be able to hear it.

```js
const event = new CustomEvent('product:selected', {
  detail: { sku: product.sku },
  bubbles: true,
});
productCard.dispatchEvent(event);
```

Listen for it like any other event:

```js
block.addEventListener('product:selected', (event) => {
  console.log(event.detail.sku);
});
```

Custom event names are case-sensitive. Use a clear naming convention to reduce collisions. Prefer dispatching from the narrowest meaningful element; bubbling lets a parent component listen without a global listener.

#### `dispatchEvent()`

Dispatches an event synchronously. Registered listeners run before `dispatchEvent` returns. It returns `false` if a cancelable event was canceled by a listener, otherwise `true`.

```js
const changed = new Event('change', { bubbles: true });
input.dispatchEvent(changed);
```

This is useful when code changes a control's value and needs other event-driven code to respond. **Tricky:** setting `input.value` programmatically does not automatically fire an `input` or `change` event. Dispatching one does not reproduce every detail of a real user interaction, and browser security rules prevent scripts from synthesizing trusted user input. A listener can call `preventDefault` only if the event was created with `cancelable: true`.

### 19.4 Current location and URL parsing

#### `window.location`

`window.location` describes the current page address. Useful parts include `href`, `origin`, `pathname`, `search`, and `hash`.

```js
const currentPath = window.location.pathname;
const queryText = window.location.search;
window.location.href = '/us/shop/'; // navigate to another page
```

Setting `href` (or calling `location.assign`) performs navigation. `location.replace(url)` navigates but replaces the current history entry so Back does not return to it. Changing `location.hash` generally navigates to an anchor and creates a history entry.

**Tricky:** `location.search` begins with `?`; `location.hash` begins with `#`. A path alone does not include the origin or query. Avoid comparing full URL strings when you only intend to compare a path; parse them with `URL`.

#### `URL`

`URL` parses and constructs addresses into structured fields. Supply a base for relative URLs.

```js
const url = new URL('/products?sort=price', window.location.origin);
url.pathname; // '/products'
url.searchParams.get('sort'); // 'price'
```

It is safer than manually slicing URL strings. Parsing can throw a `TypeError` for an invalid URL with no usable base, so handle external or user-entered values carefully. When accepting a destination from untrusted input, validate its origin and allowed schemes before navigation.

#### `URLSearchParams`

Reads and edits query-string parameters. It handles percent encoding for you.

```js
const params = new URLSearchParams(window.location.search);
const page = params.get('page'); // string or null
params.set('sort', 'price');
params.delete('page');
const nextSearch = params.toString();
```

Repeated query keys are allowed: `get` returns the first value, while `getAll` returns all values. `set` replaces all values for that key with one; `append` adds another value.

To update the address without a full navigation, combine it with the History API below. **Tricky:** `URLSearchParams` values are strings, so convert and validate numeric/boolean values. Do not manually run `encodeURIComponent` on values passed to `.set()`; it will encode them again.

### 19.5 History API and URL state

#### `history.pushState()` and `history.replaceState()`

Both update the current document's URL and state without a full page load (subject to same-origin URL rules). `pushState` adds a history entry; `replaceState` edits the current entry.

```js
const params = new URLSearchParams(window.location.search);
params.set('sort', 'price');
const nextUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;

window.history.pushState({ sort: 'price' }, '', nextUrl); // Back can undo this
// Use replaceState(...) for a correction/update that should not add another Back step.
```

The first argument is serializable application state associated with the entry, the second is a legacy title parameter (usually an empty string), and the third is an optional same-origin URL. Keep state small; browsers may persist it and impose size limits.

**Tricky:** calling `pushState` or `replaceState` does not fire `popstate`. `popstate` fires when the user traverses history (Back/Forward) to an entry. If the UI must react both to your own URL changes and Back/Forward, explicitly update the UI after your own call and listen for `popstate` for traversals. A changed URL must still be reloadable and correctly represent the UI state.

#### Proxying history methods

A `Proxy` can wrap an existing function to observe or augment calls while preserving the original behavior. This project uses this pattern in content-list and product-list code to notice URL state changes made through history methods.

```js
const originalPushState = window.history.pushState;

window.history.pushState = new Proxy(originalPushState, {
  apply(target, thisArg, args) {
    const result = Reflect.apply(target, thisArg, args);
    refreshFromCurrentUrl();
    return result;
  },
});
```

The `apply` trap runs when the function is called. `Reflect.apply` invokes the original with the correct `this` value and arguments. The original return value is preserved.

**Tricky:** a wrapper that calls `target(...args)` can lose the required `history` receiver; use `Reflect.apply(target, thisArg, args)`. Preserve the original return value and exceptions. Avoid wrapping the same method multiple times (which can cause duplicate callbacks), and keep the wrapper narrowly scoped. A proxy does not make the browser emit `popstate`; it only observes calls that pass through the wrapped method. If other code saved the original function before wrapping, its calls bypass the proxy.

### 19.6 Scrolling and geometry

#### `scrollTo()` and `scrollIntoView()`

`window.scrollTo` scrolls the page to coordinates. Object options support smooth behavior. `element.scrollIntoView` scrolls an element into view.

```js
window.scrollTo({ top: 0, behavior: 'smooth' });
target.scrollIntoView({ behavior: 'smooth', block: 'start' });
```

CSS `scroll-margin-top` is often a good way to account for sticky headers when using `scrollIntoView`.

**Tricky:** smooth scrolling can conflict with rapid repeated updates or user motion preferences. Respect reduced-motion preferences when smooth movement is not essential. Coordinates from `getBoundingClientRect()` are viewport-relative; add `window.scrollY` to get a document-relative vertical position. Scrolling can be asynchronous, so the target may not be at its final position immediately.

#### `getBoundingClientRect()`

Returns an element's bounding box relative to the viewport, including `top`, `left`, `right`, `bottom`, `width`, and `height`.

```js
const rect = card.getBoundingClientRect();
const documentTop = rect.top + window.scrollY;
```

The values can be fractional and change with scrolling, layout, transforms, and resizing. A zero width or height may indicate the element has no rendered box (for example, it is hidden). Reading geometry after DOM/style writes can force synchronous layout; batch reads before writes when doing many measurements.

#### `offsetHeight`

Returns the element's layout height in CSS pixels, including vertical padding and borders, rounded to an integer. It does not include margins. It is generally zero when the element or an ancestor is `display: none`.

```js
const stickyHeaderHeight = header.offsetHeight;
```

Use `getBoundingClientRect().height` when fractional size or transformed visual geometry matters. `offsetHeight` is a layout measurement and can also trigger layout calculation if styles have just changed.

### 19.7 Timers and animation frames

#### `setTimeout()` and `clearTimeout()`

`setTimeout(callback, delay)` schedules a callback to run after at least approximately the given delay and returns a timer ID. It does not guarantee an exact execution time. `clearTimeout(id)` cancels a pending callback.

```js
let closeTimer;

function scheduleClose() {
  clearTimeout(closeTimer);
  closeTimer = window.setTimeout(closePanel, 300);
}
```

Delays are milliseconds. A zero delay still schedules work for a later event-loop turn. **Tricky:** timers are not precise clocks; busy main-thread work delays them, and background tabs may throttle them. Clear timers when the behavior is canceled or its owning component is removed. If scheduling repeatedly, clear the previous ID to avoid many callbacks.

#### `requestAnimationFrame()`

Schedules a callback before the browser's next repaint. Use it for visual updates or when code needs the browser to process one DOM update before measuring or applying the next visual change.

```js
panel.classList.add('is-opening');
requestAnimationFrame(() => {
  panel.classList.add('is-open');
});
```

The callback receives a high-resolution timestamp. Save the returned ID and use `cancelAnimationFrame(id)` if it should not run. Browsers usually pause or throttle animation frames in background tabs, so do not use them for general-purpose delays or business logic.

**Tricky:** one animation frame is not the same as “after every CSS transition has completed.” Listen for `transitionend` (with appropriate handling) if you need the transition completion event. Two nested animation frames are sometimes used to ensure the browser paints an intermediate state, but prefer a clear transition/event-based design when possible.

### 19.8 Responsive behavior: `matchMedia()`

`window.matchMedia(query)` evaluates a CSS media query and returns a `MediaQueryList` with a `matches` boolean. Listen for changes when behavior should adapt as the viewport or user preference changes.

```js
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function updateMotionPreference() {
  document.documentElement.classList.toggle('reduced-motion', reducedMotion.matches);
}

updateMotionPreference();
reducedMotion.addEventListener('change', updateMotionPreference);
```

For older browser support, `MediaQueryList.addListener` exists but is deprecated. Remove a `change` listener when it is no longer needed.

**Tricky:** `matches` is a snapshot; it does not update your own derived state unless you read it again or handle the `change` event. Prefer CSS media queries for purely visual changes; use `matchMedia` in JavaScript when behavior or data work must change.

### Event and browser behavior checklist

- Save listener function references and remove long-lived listeners during cleanup.
- Use `preventDefault` to cancel a browser action; use `stopPropagation` only to control event travel.
- Remember that `dispatchEvent` runs synchronously and programmatic value changes do not emit input events automatically.
- Parse URLs with `URL`/`URLSearchParams`; validate destinations before navigating.
- `pushState` and `replaceState` change history without firing `popstate`.
- Use `pushState` for a meaningful Back step and `replaceState` for an update to the current step.
- Distinguish viewport coordinates (`getBoundingClientRect`) from document coordinates.
- Use timers for delayed work and animation frames for pre-paint visual work; neither is an exact clock.
- Prefer CSS for visual responsiveness and honor reduced-motion preferences.

---

## Group 5 — Asynchronous JavaScript and Data Loading

This group covers promises, network requests, on-demand code, forms, and browser-side storage.

### 20. Asynchronous JavaScript and data loading

Web pages often need data from a server, code that should load only when needed, or values stored in the browser. These operations involve different timing and persistence rules. A promise represents work that may finish later; `async`/`await` makes promise-based code easier to read. `fetch` requests network resources, dynamic `import()` loads a module on demand, and browser storage keeps small values between parts of the experience.

### 20.1 `Promise`

A promise represents the eventual result of an asynchronous operation. It starts **pending**, then becomes **fulfilled** with a value or **rejected** with a reason. Promises let JavaScript continue running other work while an operation such as a network request is in progress.

```js
fetch('/data.json')
  .then((response) => response.json())
  .then((data) => renderData(data))
  .catch((error) => showError(error));
```

`.then()` returns a new promise. A value returned by the callback becomes the next promise's value; a thrown error or rejected promise becomes a rejection for the next `.catch()`.

```js
const resultPromise = fetch('/data.json')
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  });
```

**Tricky:** a promise is not its result. Logging a promise immediately may show it as pending; use `await` or `.then()` to access its fulfilled value. A `.catch()` handles rejections in the chain before it, but if you start an asynchronous operation and neither return nor await it, errors can escape the chain. A `.finally()` callback runs after fulfillment or rejection and is useful for cleanup; it normally preserves the original result or rejection.

### 20.2 `async` and `await`

An `async` function always returns a promise. `await` unwraps a promise's fulfilled value and pauses only that async function until the promise settles; it does not block the browser's main thread.

```js
async function getProducts() {
  const response = await fetch('/products.json');
  if (!response.ok) throw new Error(`Could not load products (${response.status})`);
  return response.json();
}

const products = await getProducts(); // only valid at top level in a module or inside async code
```

Use `try/catch` around `await` when you can recover, display a useful error, or add context:

```js
async function loadProducts() {
  try {
    const products = await getProducts();
    renderProducts(products);
  } catch (error) {
    showProductsError();
    console.error('Product loading failed', error);
  }
}
```

**Tricky:** forgetting `await` means the variable is a promise, not the data. Awaiting independent tasks one after another wastes time; start them together with `Promise.all`. If an async function calls another async function, either `await` the result or `return` its promise so failures reach the caller.

### 20.3 `Promise.all()`

`Promise.all(iterable)` waits for every input promise to fulfill, then returns an array of results in the **same order as the input promises**. If any input rejects, the combined promise rejects immediately with that reason (other operations are not automatically canceled).

```js
const [profile, cart] = await Promise.all([
  fetchProfile(),
  fetchCart(),
]);
```

Use this for independent work. For dependent work, await in sequence:

```js
const token = await getToken();
const profile = await fetchProfile(token);
```

**Tricky:** `Promise.all` does not convert regular values into a delayed task; non-promise values are treated as already fulfilled. It also does not cancel remaining requests when one fails. If every task should report its own success or failure, use `Promise.allSettled` (covered in chapter 13). If one task fails and other requests should stop, create and pass an `AbortController` signal to cancellable operations such as `fetch`.

### 20.4 `fetch()`

`fetch(url, options)` makes an HTTP request and returns a promise for a `Response`. The response body is read asynchronously using methods such as `.json()`, `.text()`, or `.blob()`.

```js
async function loadIndex() {
  const response = await fetch('/query-index.json');
  if (!response.ok) {
    throw new Error(`Index request failed with status ${response.status}`);
  }
  return response.json();
}
```

Send data with a method, headers, and body:

```js
const response = await fetch('/api/profile', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Mina' }),
});
```

You can cancel a request with `AbortController`:

```js
const controller = new AbortController();
const responsePromise = fetch('/slow-data.json', { signal: controller.signal });
controller.abort(); // rejects the fetch promise with an abort error
```

**Tricky:** `fetch` usually rejects for network errors, invalid requests, or an abort. HTTP error statuses such as 404 and 500 still fulfill with a `Response`, so check `response.ok` or `response.status`. The response body can generally be consumed only once; if you need two readings, call `response.clone()` before reading. `fetch` does not automatically send browser credentials in every cross-origin situation; configure `credentials` deliberately when required and ensure the server's CORS policy allows it. Never assume a response is valid JSON just because the URL ends in `.json`.

### 20.5 Dynamic `import()`

Dynamic import loads an ES module on demand and returns a promise that fulfills with a module namespace object. It can reduce initial JavaScript work when a feature is only needed after a user action or in a particular situation.

```js
async function openAnalytics() {
  const analytics = await import('./analytics.js');
  analytics.start(); // named export
}
```

For a default export:

```js
const module = await import('./bioz-loader.js');
module.default();
```

Dynamic imports can also be started without `await`, but handle errors with `.catch()` if loading failure matters:

```js
import('./optional-feature.js')
  .then((module) => module.initialize())
  .catch((error) => console.error('Feature could not load', error));
```

**Tricky:** `import()` is an expression and returns a promise; static `import ... from` declarations are resolved before normal module execution. The module path is typically a literal or a bundler-supported expression; arbitrary user input should not be used to form an import path. A module that has already loaded is generally reused from the module cache, so calling `import()` again does not normally re-run its top-level code.

### 20.6 `FormData`

`FormData` collects successful form controls into key/value entries, suitable for form submissions and many `fetch` requests.

```js
const form = block.querySelector('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const response = await fetch('/submit', { method: 'POST', body: formData });
});
```

When sending `FormData`, the browser sets the multipart content type and boundary. Do **not** manually set `Content-Type: multipart/form-data`; the boundary value is required.

Read values with `.get(name)`, all repeated values with `.getAll(name)`, or iterate entries:

```js
const email = formData.get('email');
for (const [name, value] of formData.entries()) {
  console.log(name, value);
}
```

**Tricky:** only successful controls are included: controls generally need a `name`, must not be disabled, and unchecked checkboxes/radio buttons are omitted. Multiple controls with the same name can yield multiple values. Values are strings or `File` objects; convert and validate them as needed. `new FormData(form, submitter)` can include the submit button used to submit the form in modern browsers.

### 20.7 Form field `.value`

For input, select, and textarea controls, `.value` is the current value as a string. It reflects what the user has entered or what code most recently assigned.

```js
const quantityInput = form.querySelector('[name="quantity"]');
const rawQuantity = quantityInput.value;
const quantity = Number(rawQuantity);
```

`.value` can be set programmatically:

```js
searchInput.value = 'cell analysis';
searchInput.dispatchEvent(new Event('input', { bubbles: true }));
```

**Tricky:** `.value` is not automatically validated or converted to a number. An empty number input often has value `''`; `Number('')` becomes `0`, which might not be what you mean. Check for empty input before conversion and validate ranges. Changing `.value` in code does not automatically dispatch `input` or `change`. For checkboxes and radio buttons, use `.checked` for the checked state; `.value` is the value submitted when checked.

### 20.8 `localStorage`

`localStorage` stores string key/value pairs for an origin. Data persists across tabs and browser restarts until cleared. It is synchronous, so keep usage small and avoid large or frequent reads/writes on performance-sensitive paths.

```js
localStorage.setItem('preferred-store', 'us');
const store = localStorage.getItem('preferred-store'); // string or null
localStorage.removeItem('preferred-store');
```

Store structured data by serializing it:

```js
localStorage.setItem('preferences', JSON.stringify({ compact: true }));

let preferences = {};
try {
  preferences = JSON.parse(localStorage.getItem('preferences') || '{}');
} catch {
  // Stored text may be invalid or from an older format.
}
```

`localStorage.clear()` removes every key for the current origin, so it is usually too broad for feature cleanup.

**Tricky:** storage access can throw (for example, under some privacy settings or when browser policy blocks it), values are always strings, and stored data can be modified by users or scripts running on the same origin. Do not store secrets or treat stored values as trusted. Use narrow keys and validate values when reading. A `storage` event is sent to other same-origin documents when storage changes; it does not fire in the document that made the change.

### 20.9 `sessionStorage`

`sessionStorage` has a similar API to `localStorage`, but is scoped to a page session within a tab. It usually survives reloads in that tab, then is cleared when the tab/window session ends. A newly opened tab generally has its own storage area.

```js
sessionStorage.setItem('checkout-step', 'shipping');
const step = sessionStorage.getItem('checkout-step');
```

Use it for short-lived state that should survive a refresh but should not persist as a long-term preference. It has the same string-only, synchronous, untrusted-data, and possible-access-error caveats as `localStorage`.

**Tricky:** session storage is not a secure vault and should not be used for credentials. Duplicated tabs can have browser-specific session initialization behavior; do not rely on session storage as a cross-tab communication system. Use `BroadcastChannel`, storage events, or a backend when cross-tab coordination is actually required.

### 20.10 Cookies

Cookies are small name/value data associated with a site and can be sent automatically with matching HTTP requests. JavaScript can read and write only cookies that are not `HttpOnly`.

Read cookies through `document.cookie`, which returns one string containing the cookies visible to the current page. A simple parser should split on semicolons and decode values carefully:

```js
function getCookie(name) {
  const prefix = `${encodeURIComponent(name)}=`;
  const entry = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(prefix));
  return entry ? decodeURIComponent(entry.slice(prefix.length)) : null;
}
```

Write a cookie by assigning one `Set-Cookie`-style string to `document.cookie`:

```js
document.cookie = `${encodeURIComponent('noticeSeen')}=true; Path=/; Max-Age=86400; SameSite=Lax; Secure`;
```

`Path`, `Max-Age` or `Expires`, `SameSite`, and `Secure` control where and how the cookie is sent. To delete a cookie, set it again with the same path/domain scope and an expired `Max-Age` or `Expires` value.

**Tricky:** assigning `document.cookie` does not replace the whole cookie string; it sets one cookie. Cookies are not a general storage system: they are small, sent on requests, and have scope rules. JavaScript cannot read an `HttpOnly` cookie (that is a security feature). `Secure` cookies require HTTPS. `SameSite` affects cross-site sending; authentication cookies should generally be set by the server with carefully chosen `HttpOnly`, `Secure`, and `SameSite` attributes. Do not store sensitive authentication secrets in JavaScript-readable storage or cookies.

### Choosing a data-loading and storage tool

- Use `fetch` for network data; check HTTP status and parse the response body deliberately.
- Use `async`/`await` for readable promise flow, and `Promise.all` for independent requests that must all succeed.
- Use dynamic `import()` to defer optional code, and handle load failure if the feature depends on it.
- Use `FormData` for named form controls; use `.value` for a single live field and validate it.
- Use `sessionStorage` for small tab-session state and `localStorage` for small longer-lived preferences.
- Use cookies when the server needs a value sent with requests; let the server set security-sensitive cookies.
- Treat all client-side storage and network data as untrusted input.

---

## Group 6 — Observers

This group covers browser APIs that watch visibility, DOM mutations, and element dimensions.

### 21. Observers

Observers let the browser notify code when something changes, instead of repeatedly checking in a loop. They are useful for lazy loading, watching DOM changes made by other code, and responding to element size changes. Each observer has an explicit lifecycle: observe targets, react to callbacks, then unobserve or disconnect when the work is finished.

### 21.1 `IntersectionObserver`

`IntersectionObserver` asynchronously reports when a target element intersects a root area, usually the viewport. It is commonly used for lazy loading, starting animations when content becomes visible, or infinite scrolling.

```js
const observer = new IntersectionObserver((entries, currentObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
      currentObserver.unobserve(entry.target); // only needed once
    }
  });
}, {
  root: null, // viewport
  rootMargin: '200px 0px', // start a little before it is visible
  threshold: 0.1, // report around 10% visible
});

document.querySelectorAll('img[data-src]').forEach((image) => observer.observe(image));
```

- `root: null` means the viewport; otherwise it can be a scrollable ancestor.
- `rootMargin` expands or shrinks the root bounds, using CSS margin syntax.
- `threshold` is a number or array of visibility ratios from `0` to `1`.
- Each callback entry includes `target`, `isIntersecting`, and `intersectionRatio`.

**Tricky:** observing a target can produce an initial callback even before it has moved. Use `entry.isIntersecting` to decide whether it is currently intersecting. A threshold of `0` does not mean “fully visible”; it means an intersection can be reported at the boundary. The API is asynchronous and does not provide exact pixel-by-pixel animation timing. For one-time work, call `unobserve(target)` after it happens or `disconnect()` when all targets are done.

### 21.2 `MutationObserver`

`MutationObserver` reports changes to a DOM subtree: added/removed child nodes, attributes, or text content. It is useful when a third-party widget or framework changes DOM that your code needs to react to.

```js
const observer = new MutationObserver((records) => {
  records.forEach((record) => {
    if (record.type === 'childList') {
      record.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          enhanceNewContent(node);
        }
      });
    }
  });
});

observer.observe(container, {
  childList: true,
  subtree: true,
});
```

To watch attribute or text changes, request them explicitly:

```js
observer.observe(container, {
  attributes: true,
  attributeFilter: ['class', 'aria-expanded'],
  characterData: true,
  subtree: true,
});
```

At least one of `childList`, `attributes`, or `characterData` must be enabled. `subtree: true` includes descendants; without it, only direct changes to the observed node are reported.

**Tricky:** observer callbacks run asynchronously after DOM mutations are queued, not inline at the exact assignment. If the callback changes the same DOM in a way that meets its own observation options, it can trigger again and create a feedback loop. Check whether a change is actually needed before writing, observe only the smallest relevant subtree, and call `disconnect()` when finished. `disconnect()` also discards pending records; call `takeRecords()` first if queued records must be processed.

### 21.3 `ResizeObserver`

`ResizeObserver` reports changes to an element's content box or border box size. It is useful when a component's layout depends on its actual rendered size rather than only on viewport width.

```js
const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const { width, height } = entry.contentRect;
    entry.target.classList.toggle('is-wide', width >= 600);
    console.log(`Content box: ${width} × ${height}`);
  });
});

observer.observe(card);
```

An observer can watch multiple elements. `entry.contentRect` is broadly supported; newer box-size properties (`contentBoxSize`, `borderBoxSize`, `devicePixelContentBoxSize`) provide more detail and can be arrays to account for fragmented layout.

**Tricky:** changing an observed element's size from inside the callback can cause another resize notification. If each callback keeps changing the size, the browser may report a resize loop. Make updates idempotent (only change a class when its state differs), avoid size feedback, or defer layout writes with `requestAnimationFrame` when appropriate. Use `unobserve(element)` to stop watching one target and `disconnect()` to stop all targets.

### Observer lifecycle and selection

| Observer | Watches | Typical use |
|---|---|---|
| `IntersectionObserver` | Target entering/leaving a root area | Lazy loading, visibility-based work |
| `MutationObserver` | DOM tree, attribute, or text mutations | Reacting to externally inserted/changed content |
| `ResizeObserver` | Element box size | Component layout that depends on its dimensions |

Create an observer when its feature is initialized, observe only the elements it needs, and keep a reference so it can be stopped. Prefer `IntersectionObserver` over frequent scroll-position polling; prefer `ResizeObserver` over guessing element dimensions from viewport resize events. Do not use `MutationObserver` as a general replacement for owning the code that makes the DOM change; direct event/data flows are easier to reason about when available.

```js
const observer = new IntersectionObserver(onIntersection);
observer.observe(block);

function cleanup() {
  observer.disconnect();
}
```

---

## Group 7 — EDS Helpers and APIs

This group explains the shared helpers that turn authored EDS content into configured and decorated blocks, load fragments and indexes, and connect the frontend to Sony Biotech's Magento commerce and authentication state. The examples and behavior below are based on this repository's implementations in `scripts/aem.js`, `scripts/scripts.js`, `blocks/fragment/fragment.js`, `scripts/commerce.js`, and `scripts/loginDropdown/helpers.js`.

### 22. EDS helpers and APIs in this project

#### A note about helper availability

The functions in `scripts/aem.js` are ES module exports. A block that uses one must import it:

```js
import { readBlockConfig, toClassName } from '../../scripts/aem.js';
```

Relative import paths are calculated from the importing file. Some project-global scripts also expose functionality through their own module exports or runtime setup. Follow the imports in a nearby working file rather than assuming a helper is a browser global.

### Helpers in `scripts/aem.js`

#### `readBlockConfig(block, options)`

Reads a block's authored rows into a JavaScript object. It treats each direct child row as a key/value pair: the first column supplies a normalized key, and the second column supplies the value. It recognizes links, images, paragraphs, and plain text/HTML content.

```js
import { readBlockConfig } from '../../scripts/aem.js';

export default function decorate(block) {
  const config = readBlockConfig(block);
  // Example authored keys become values such as config.title or config.image.
  const title = config.title;
}
```

Options:

- `useLinkText: true` can preserve a link as `[linkText, href]`; without it, the helper normally returns the link URL.
- `useHTMLContent: true` reads paragraph/content HTML instead of plain `textContent`.

One link/image/paragraph is returned as a single value; multiple matches are returned as arrays. A row with several links can therefore have a different value shape depending on its count and options.

**Tricky:** the helper only reads rows that have a second column, and it does not validate whether the expected config key exists. The caller should handle missing or malformed authoring. `useHTMLContent` can return markup; do not treat it as sanitized or put untrusted HTML into the DOM without a trusted sanitization strategy. Since keys pass through `toClassName`, spaces and punctuation become hyphens (for example, `Background Color` becomes `background-color`), not camelCase.

#### `getMetadata(name, doc = document)`

Reads matching metadata elements from a document's `<head>` and returns their content joined with `, `. If no match is found, it returns an empty string. Names containing `:` are looked up through the `property` attribute (for Open Graph-style properties); other names use the `name` attribute.

```js
import { getMetadata } from '../../scripts/aem.js';

const template = getMetadata('template');
const shareImage = getMetadata('og:image');
```

The optional `doc` argument is useful when working with a separate parsed document. **Tricky:** the result is a string, including when multiple matching tags exist; the helper joins multiple values rather than returning an array. Empty string means “not found” in this API, not `null`.

#### `createOptimizedPicture(src, alt, eager, breakpoints)`

Builds and returns a `<picture>` element with WebP sources and fallback image sources for configured widths. Its defaults use a wide breakpoint at 600px and a 750px fallback width. The final `<img>` gets the provided alt text and `loading="lazy"` by default; pass `eager: true` for an image that should load eagerly.

```js
import { createOptimizedPicture } from '../../scripts/aem.js';

const picture = createOptimizedPicture(
  imageUrl,
  'Sony cell analyzer',
  false,
  [{ media: '(min-width: 900px)', width: '1600' }, { width: '800' }],
);
card.append(picture);
```

Each breakpoint can contain a `media` condition and a `width`. The input URL is resolved against the current page, and its path extension is used for fallback format.

**Tricky:** this helper creates nodes but does not insert them. An empty `alt` is appropriate for decorative images, while informative images need meaningful alt text. The helper builds optimized URLs from the pathname and its own parameters; do not assume arbitrary query parameters on the original URL are preserved. Use eager loading sparingly, typically for a likely Largest Contentful Paint image.

#### `toClassName(name)`

Normalizes a string for use as a CSS-friendly class/key: lowercase, replace non-alphanumeric characters with hyphens, collapse repeated hyphens, and remove leading/trailing hyphens. Non-string values produce an empty string.

```js
import { toClassName } from '../../scripts/aem.js';

toClassName('Background Color'); // 'background-color'
toClassName('  Featured__Card!! '); // 'featured-card'
```

**Tricky:** the conversion is lossy. Distinct inputs can normalize to the same output, and non-ASCII characters are removed/replaced by the current implementation's ASCII-oriented pattern. Do not use this as a unique identifier or a security sanitizer; use it for consistent naming only.

#### `decorateBlock(block)`

Initializes one block element for the EDS lifecycle. It reads the first class as the short block name, adds the generic `block` class, sets `data-block-name` and `data-block-status="initialized"`, adds a block-specific class to the wrapper, and adds a block-specific container class to the closest section.

```js
import { decorateBlock } from '../../scripts/aem.js';

const block = document.querySelector('.hero');
decorateBlock(block);
```

**Tricky:** this helper expects the block to have a class and a parent wrapper. It does not load the block's JavaScript or CSS; use `loadBlock` after initialization when loading is needed. Reinitializing arbitrary DOM can add classes repeatedly or cause incorrect wrapper assumptions, so normally let the project lifecycle call it.

#### `loadBlock(block)`

Loads a block's CSS and JavaScript using its `data-block-name`, then invokes the module's default export with the block element. It marks the block as `loading` before work and `loaded` after the attempt. It returns the block.

```js
import { loadBlock } from '../../scripts/aem.js';

await loadBlock(block);
```

The helper starts stylesheet loading and module loading concurrently, then waits for both. It skips blocks already marked `loading` or `loaded`.

**Tricky:** in the current implementation, import/decorate failures are logged and swallowed, and the status is still changed to `loaded`. Thus `loaded` means the loading attempt finished, not necessarily that decoration succeeded. A block with a missing/incorrect `data-block-name` cannot resolve its expected asset paths. Avoid manually changing lifecycle status unless you understand how the page loader uses it.

#### `buildBlock(blockName, content)`

Creates a block DOM element from a string, a two-dimensional array, or an object-like row/column structure. The first argument becomes a class on the returned outer `div`. Each row and column is wrapped in nested `div` elements, matching the content shape EDS block decoration expects.

```js
import { buildBlock } from '../../scripts/aem.js';

const block = buildBlock('message', [
  ['Heading'],
  ['This is the body copy.'],
]);
section.append(block);
```

The implementation accepts values with an `elems` array to place multiple elements into one cell; DOM nodes are appended, and strings are accumulated as HTML.

**Tricky:** strings are inserted through `innerHTML` in this helper. Only pass trusted, intentionally authored markup; do not pass user-entered or API text as a string. For untrusted plain text, create nodes and set `textContent`. DOM nodes passed into the helper are moved from their current parent. `buildBlock` only constructs markup; decoration/loading are separate lifecycle steps.

#### How `decorateBlock`, `buildBlock`, and `loadBlock` fit together

Think of these as different stages:

1. `buildBlock` creates the expected nested block markup when code needs to create a block.
2. `decorateBlock` identifies it as an EDS block and adds lifecycle metadata/classes.
3. `loadBlock` loads the block module and stylesheet, then invokes its default decoration function.

They are not interchangeable. Existing page content is usually discovered and processed by EDS page-loading code; use direct calls when a feature creates or deliberately loads blocks dynamically.

### Fragment and index loading

#### `loadFragment(href)` — `blocks/fragment/fragment.js`

Loads a fragment page's plain HTML. It normalizes the href through `getPathFromHref`, requests `${path}.plain.html`, parses the response into a temporary `<main>`, fixes relative media paths, decorates the content, loads its blocks, and returns the prepared main element. It returns `null` when it cannot derive a path or the request is not successful.

```js
import { loadFragment } from './fragment.js';

const fragment = await loadFragment('/fragments/footer');
if (fragment) {
  container.replaceChildren(...fragment.childNodes);
}
```

The fragment block's own decorator shows the usual flow: locate its authored link (or text fallback), call `loadFragment`, then replace the placeholder with loaded fragment content.

**Tricky:** `loadFragment` prepares the fragment and its blocks, but the caller decides where and how to insert it. The `href` must resolve to a usable fragment path. It uses `innerHTML` to parse fetched plain HTML, so only load content from the intended trusted site origin; validate/normalize external URLs before using them. A failed HTTP response returns `null`; a network error can still reject the promise, so callers may need `try/catch`.

#### `fetchIndex(indexFile, pageSize, sheet)` — `scripts/scripts.js`

Fetches a JSON index at `/${indexFile}.json` and stores its progress in `window.index`, keyed by the index name and optional sheet. It returns an object containing accumulated `data`, the next `offset`, a `complete` flag, and a cleared `promise` slot. Concurrent callers for the same key can share the in-progress promise; completed data is reused.

```js
import { fetchIndex } from '../../scripts/scripts.js';

const index = await fetchIndex('query-index', 500);
const pages = index.data;
```

With a sheet name, the request includes a `sheet` query parameter and the cache key includes that sheet. Pagination is represented by `offset` and `complete`; callers that need every page should continue requesting while `complete` is false, using the returned state/cache behavior.

**Tricky:** one call fetches a page, not necessarily the whole index. The function expects the response JSON to have `limit`, `offset`, `total`, and `data`. Unlike a robust generic fetch wrapper, this implementation does not first check `response.ok` or validate the returned schema, so network/JSON/schema errors may reject or fail. Use the exact index key consistently, and do not treat `window.index` as private immutable data.

### Commerce helpers — `scripts/commerce.js`

This file centralizes project-specific commerce operations: locale and store selection, GraphQL calls, customer-group lookup, product/category helpers, wishlist calls, and product URL/SEO utilities. These are application helpers rather than generic JavaScript or EDS APIs.

#### Store and locale helpers

- `getRegion()` resolves a region from URL parameters, saved locale, browser language, and available locales.
- `getStoreCode()` uses the store code in the path when present, otherwise resolves it from the region.
- `getStoreCodeFromRegion()` maps the selected region to a store code.
- `storeCodeMatches()` checks whether the path's store code agrees with the region-derived store.
- `rememberLocale()` and `getRememberedLocale()` persist/retrieve a locale for a store.
- `resetStoreCode()` chooses a valid locale/store combination and may update local storage.
- `setPreferredLocaleFromCloudfront()` requests the current URL with `HEAD` and reads the CloudFront viewer-country response header.

```js
import { getStoreCode, getRegion } from '../../scripts/commerce.js';

const storeCode = getStoreCode(); // for example, 'us'
const region = getRegion(); // for example, 'US'
```

These helpers coordinate URL state and local storage. `getRegion()` can have side effects when it processes a locale query parameter: it may save the locale and remove/update that parameter from the URL. During prerendering, the file avoids some persistence work and may wait for the document to become visible.

**Tricky:** store code and country/region are not interchangeable. A store can cover multiple regions, and the project has special store mappings. Use the helper that matches what the caller needs instead of extracting path segments or inferring a store from a country yourself.

#### Commerce request helpers

`performMonolithGraphQLQuery(query, variables, GET, USE_TOKEN)` sends a request to the configured Magento GraphQL endpoint. It sets the store header, optionally attaches a bearer token, and uses GET with query parameters or POST with a JSON body. A non-OK HTTP response returns `null`; otherwise it parses and returns JSON.

`performCatalogServiceQuery(query, variables)` configures catalog-service headers (environment, website/store view, customer group, API key), sends a GET request with encoded query and variables, and returns `response.data` or `null` for non-OK HTTP status.

```js
import { performMonolithGraphQLQuery } from '../../scripts/commerce.js';

const result = await performMonolithGraphQLQuery(
  'query { customer { email } }',
  {},
  true,  // GET request
  true,  // use saved customer token when available
);

if (result?.errors) {
  // GraphQL can return HTTP success while reporting application errors.
}
```

**Tricky:** `GET` and `USE_TOKEN` are positional booleans (or a token string for `USE_TOKEN`), so arguments are easy to misorder. A non-OK response becomes `null`, while network and JSON parsing errors can reject. HTTP success does not guarantee GraphQL success; inspect the returned `errors` field. Never log or expose bearer tokens/API keys, and use the shared helper so store and customer-group headers stay consistent.

Other commerce exports include `fetchCustomerGroup()`/`getCustomerGroup()`, wishlist functions, `getProducts()`, `getCategory()`, `getCategoryFromPath()`, `getSkuFromUrl()`, and canonical/product path helpers. Before implementing commerce logic, check whether one of these already expresses the needed project behavior.

### Authentication helpers — `scripts/loginDropdown/helpers.js`

These helpers read the login dropdown's persisted auth-related state and translate customer information into account type checks:

- `resolveAccountType(customer)` uses the presence of customer addresses to infer purchasing vs. shopping account type (the source includes a TODO noting that a better backend account-type source is needed).
- `getUserFirstName()`, `getUserToken()`, `getAccountType()`, and `getStoreCode()` read named local-storage keys.
- `isAuthenticated()` checks whether a saved user token is truthy.
- `isPurchasingAccount()` and `isShoppingAccount()` compare the saved account type to constants.

```js
import {
  getUserFirstName,
  isAuthenticated,
  isPurchasingAccount,
} from '../../scripts/loginDropdown/helpers.js';

if (isAuthenticated()) {
  const firstName = getUserFirstName();
  showAccountMenu(firstName);
}
```

**Tricky:** these functions are convenience checks over local storage, not proof that a server-side session is valid. A token may be expired/revoked, storage can be missing or stale, and local storage is writable by client-side code. Authorization decisions must still be enforced by Magento/backend APIs. These functions access `localStorage` directly; in environments where browser storage is unavailable, access can throw. Avoid copying tokens into logs, URLs, or rendered content.

### How to learn a project helper

When you encounter a helper, follow this sequence:

1. Open its implementation and identify inputs, return type, side effects, and failure behavior.
2. Find its callers to see the assumptions they make about missing values and data shape.
3. Check whether it changes the DOM, URL, network, or storage; those effects may matter more than its name suggests.
4. Reuse it when its behavior matches your need, but do not assume similarly named helpers in other projects behave identically.

---

## Group 8 — EDS Design Patterns

EDS blocks often follow a shared shape: author content in a page, let the loader pass a block element to `decorate`, then progressively enhance that element. Recognizing the patterns helps you read an unfamiliar block file and decide where new behavior belongs.

### 23. EDS design patterns in this project

#### Decorate pattern — authored HTML is the input

An EDS block's `decorate(block)` function receives the DOM produced from authored page content. The function reads the existing structure and progressively changes it: adds classes, moves nodes, attaches listeners, creates controls, or loads data. This keeps the authoring structure meaningful while JavaScript adds the interactive presentation.

```js
export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    row.classList.add('feature-row');
  });
}
```

This is not necessarily a full rewrite from scratch. Many project blocks keep and rearrange authored nodes so links, pictures, and rich text remain intact. The accordion, for example, wraps authored content and adds buttons and ARIA state; the columns block detects pictures and nested blocks and applies structure-specific classes.

**Tricky:** decoration may run after the block's original authored HTML has been simplified by EDS, so inspect the actual DOM shape and use selectors scoped to `block`. Do not assume an exact number of rows/columns unless authoring enforces it. If the function is asynchronous, callers that need the finished block must await it.

#### Config-from-table pattern — `readBlockConfig`

Some blocks use authored rows as configuration instead of display content. A row such as `Title | Featured products` becomes a config property. `readBlockConfig(block)` reads those rows; the block can then use the values to fetch data or choose its display.

```js
import { readBlockConfig } from '../../scripts/aem.js';

export default function decorate(block) {
  const config = readBlockConfig(block);
  const title = config.title || 'Featured products';
  const count = Number(config.count ?? 4);

  block.textContent = '';
  renderFeaturedProducts(block, { title, count });
}
```

With `{ useLinkText: true }`, link values may be `[text, href]` tuples rather than only URLs. Configuration rows should be documented for authors and removed/consumed from visible content when the rendered result replaces the original.

**Tricky:** keys are normalized (for example, `Maximum Count` becomes `maximum-count`), and values may be strings, arrays, link tuples, or HTML depending on content/options. Convert and validate types explicitly. A missing key should have a deliberate fallback or produce a clear empty state.

#### Guard clauses — return early when required content is missing

A guard clause checks a required condition near the beginning of a function, handles the missing case, and returns before the main logic. This avoids deeply nested code and prevents errors from dereferencing `null`.

```js
export default function decorate(block) {
  const heading = block.querySelector('h2');
  if (!heading) return;

  const link = block.querySelector('a[href]');
  if (!link) {
    block.classList.add('is-incomplete');
    return;
  }

  enhanceCard(block, heading, link);
}
```

The project accordion uses this idea per row: if a heading or content element is missing, it warns and skips that row. The fragment block only replaces its placeholder when loading succeeded and a fragment section exists.

**Tricky:** `return` exits the current function, not just an inner callback. In `forEach`, `return` skips only that callback invocation; it does not stop the overall iteration. Choose the intended recovery: quietly skip optional content, show an empty/error state for required content, or throw only when the caller is expected to handle a true programming/data error.

#### Class-based variants — one block, alternate behavior

Authors can add a class to select a variant of the same block. The JavaScript checks that class and adds variant behavior or classes, while CSS styles the result. This avoids creating separate blocks for closely related presentations.

The columns block supports a `video` class and its JavaScript treats it as the `thumbnail` variant:

```js
if (block.classList.contains('video')) {
  block.classList.add('thumbnail');
}

const isVideoVariant = block.classList.contains('video')
  || block.classList.contains('thumbnail');
```

The accordion's `compact` class is currently a CSS-only variant: its stylesheet changes panel styling when the class is present. A block may also check a class in JavaScript when the variant needs different behavior:

```js
const isCompact = block.classList.contains('compact');
if (isCompact) block.classList.add('accordion-compact');
```

Variants can be CSS-only or affect JavaScript behavior. They can be detected from authored classes (`block.classList`) or from classes placed on a wrapper/section, depending on the block setup. Keep variant names and behavior clear for authors.

**Tricky:** class names may be normalized by EDS from authoring text, and wrapper classes are not necessarily on the block itself. Inspect the rendered DOM before choosing a selector. Avoid aliases that silently imply behavior the CSS/JS does not implement, and do not overwrite existing classes when adding a variant.

#### Fragment composition — load other pages into blocks

Fragments let authors compose a page from content maintained elsewhere. A block finds links pointing to fragment paths, loads the `.plain.html` version, decorates the loaded content and its blocks, then replaces the link or placeholder with the resulting section.

This project exposes `loadFragment`, `getFragmentLinks`, and `replaceWithFragment` from `blocks/fragment/fragment.js`. Accordion and columns blocks collect fragment links and load them concurrently:

```js
const links = getFragmentLinks(block);
const fragments = await Promise.all(
  links.map((link) => loadFragment(link.getAttribute('href'))),
);

fragments.forEach((fragment, index) => {
  replaceWithFragment(links[index], fragment);
});
```

The fragment loader adjusts relative media URLs and decorates/loads nested blocks before returning content, so inserted fragments behave like regular page content.

**Tricky:** preserve the link-to-result association when loading concurrently; `Promise.all` keeps input order, which is why matching by index works here. A failed response can produce `null`; replacement helpers should tolerate it. Nested fragments can create recursive composition, so authoring should avoid cycles. Only load intended trusted fragment URLs.

#### Lazy enhancement — wait for visibility, then load heavy content

Heavy third-party scripts, iframes, or widgets can be deferred until the user is near the component. A common pattern is to observe a lightweight placeholder, load or inject the heavy content on first intersection, then unobserve the placeholder.

```js
function enhanceWhenVisible(placeholder, loadWidget) {
  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;

    observer.disconnect();
    loadWidget(placeholder);
  }, { rootMargin: '200px' });

  observer.observe(placeholder);
}
```

For a deferred iframe, keep a normal link or informative placeholder visible until it is inserted. Set a meaningful `title`, an appropriate `loading` policy, and a restrictive `allow`/sandbox policy where suitable.

In this project, `scripts/delayed.js` conditionally loads Bioz assets only when Bioz widget elements exist, and the Bioz block creates its widget markup before loading the vendor scripts. That is conditional enhancement; use an `IntersectionObserver` as an additional step when the widget is far below the fold and can wait until it approaches view.

**Tricky:** do not observe a zero-sized placeholder or one hidden with `display: none`, because it may never intersect. Disconnect after one-time enhancement to avoid unnecessary callbacks. Provide a fallback when `IntersectionObserver` is unavailable if the feature must work in older environments. Avoid inserting third-party content before consent when consent is required.

#### Widget DOM patching — adapt third-party markup carefully

Sometimes a third-party widget's markup needs small adjustments after it renders: add a class, fix an attribute, or connect a control. Prefer configuring the widget through its API first. If no API exists, scope DOM changes to the widget root and make the patch idempotent so it is safe to run more than once.

```js
function patchWidget(widgetRoot) {
  const resultLinks = widgetRoot.querySelectorAll('a[href]');
  resultLinks.forEach((link) => {
    link.rel = 'noopener noreferrer';
    link.classList.add('external-result');
  });
}
```

If a widget replaces its markup after initialization, a narrowly scoped `MutationObserver` can detect new nodes, patch only the added subtree, and disconnect when the widget is removed. Avoid repeatedly scanning the whole document.

**Tricky:** vendor markup and class names can change without notice; patching internals is brittle and may break accessibility or vendor behavior. Do not patch inside a cross-origin iframe (the browser blocks access). Avoid broad selectors and repeated observers that patch your own patch forever. Keep the change minimal, preserve keyboard/ARIA behavior, and make a graceful fallback if the expected element is absent.

### How the patterns work together

A typical data-backed EDS block might read its config table, use guard clauses for required values, fetch data through a project helper, build nodes from the returned records, and add a class-based variant. A fragment-capable block may additionally compose remote page content. A widget block may wait until it is needed before loading a vendor script, then make a small scoped DOM adjustment after render.

```js
import { readBlockConfig } from '../../scripts/aem.js';
import { getProducts } from '../../scripts/commerce.js';

export default async function decorate(block) {
  const config = readBlockConfig(block);
  const skus = config.skus?.split(',').map((sku) => sku.trim()).filter(Boolean);
  if (!skus?.length) {
    block.remove();
    return;
  }

  const products = await getProducts(skus);
  if (!products?.length) {
    block.textContent = 'No products are available right now.';
    return;
  }

  block.classList.toggle('compact', config.layout === 'compact');
  renderProducts(block, products);
}
```

This is a teaching sketch: a real block should define loading and error states that match its UX, validate the exact config shape, and render dynamic text safely.

---

## Group 9 — Review and Apply in the Real Project

This group turns the earlier notes into active practice. The goal is to read real code, find familiar language/API patterns, and explain the whole path from authored content to the behavior a visitor sees. Leave these boxes unchecked until you have completed the exercise and can explain the result in your own words.

### 24. Project study exercises

#### 9.1 Study the embed block

- [ ] Read `blocks/embed/embed.js` from top to bottom.
- [ ] Trace the input: what link does the author place in the block, and what happens if the link is missing?
- [ ] Explain how `decorate(block)` clears the original content, creates an `IntersectionObserver`, and waits for the block to approach the viewport.
- [ ] Follow the observer callback: when does it disconnect, and when does `loadEmbed` run?
- [ ] Compare the default iframe markup with the spectral viewer variant. Identify how URL parsing, template literals, classes, `loading="lazy"`, and `innerHTML` are used.
- [ ] Explain why the iframe gets a `title` and what risks come with embedding a URL into HTML.

**Explain it aloud:** “The author supplies ___. The block decorator finds ___. It waits until ___. Then it ___ and marks the block ___ so that ___.”

#### 9.2 Study the accordion block

- [ ] Read `blocks/accordion/accordion.js` and compare its behavior with `blocks/accordion/accordion.css`.
- [ ] Describe the expected row structure: heading plus content. What happens when either piece is absent?
- [ ] Trace how authored heading nodes are moved into a button, and how the content is wrapped.
- [ ] Explain how `aria-expanded`, `aria-hidden`, IDs, `aria-controls`, and `aria-labelledby` stay related as the item opens and closes.
- [ ] Find the table enhancement code. Explain how header text determines laser-column classes and how row striping is applied.
- [ ] Find where fragment links are collected and loaded. Why can the fragment requests run with `Promise.all`?
- [ ] Find the `compact` class styling and state whether it changes JavaScript behavior, CSS presentation, or both.

#### 9.3 Study the tabs block

- [ ] Read `blocks/tabs/tabs.js` in sections: heading/link setup, sticky wrapper, section tracking, scrolling, active-tab updates, and listeners.
- [ ] Explain how it maps authored list items to headings on the page and why `toClassName` is used as one possible lookup key.
- [ ] Trace one click from tab link to target section. Include URL hash/history behavior and scroll offset handling.
- [ ] Identify its use of `Map`, `Set`, `getBoundingClientRect`, `offsetHeight`, `getComputedStyle`, `requestAnimationFrame`, and history methods.
- [ ] Explain how it distinguishes scroll caused by a click from scroll used to update the active tab, and how it avoids unwanted feedback.
- [ ] Find setup/cleanup for scroll, resize, or other listeners/observers. What would need cleanup if this block could be removed and reinitialized?

#### 9.4 Study a `*-preview` listing block

Choose one listing block such as `blocks/articles-preview/articles-preview.js`, `blocks/events-preview/events-preview.js`, or `blocks/resources-preview/resources-preview.js`.

- [ ] Write down the block's imports and identify which ones are EDS helpers, project helpers, or block-specific utilities.
- [ ] Find how configuration is read and how the block decides which index/data source to request.
- [ ] Trace the data flow: fetch/index result → filtering/sorting/selection → card DOM → insertion into the block.
- [ ] Identify at least three guard clauses or fallback paths (missing config, missing data, invalid date/link, or an empty result).
- [ ] Explain how images/links/text are rendered and where the code protects dynamic content.
- [ ] Identify which logic is reusable helper logic and which logic is specific to that listing block.

#### 9.5 Find examples of each learned topic in the project

Use repository search or editor “Find in Files”. For each item, write one path and a short note about what the code is doing. These are starting points; follow imports and call sites for context.

- [ ] **Core JavaScript:** `blocks/commerce-checkout/commerce-checkout.js`, `scripts/scripts.js`, and any block's `decorate` export.
- [ ] **Arrays, objects, strings:** `blocks/articles-preview/articles-preview.js`, `blocks/commerce-checkout/commerce-checkout.js`, and `scripts/scripts.js` (`fetchIndex`).
- [ ] **DOM APIs:** `blocks/accordion/accordion.js`, `blocks/columns/columns.js`, and `blocks/embed/embed.js`.
- [ ] **Events/browser behavior:** `blocks/tabs/tabs.js`, `blocks/commerce-wishlist/commerce-wishlist.js`, and `blocks/product-list-page/product-list-page.js`.
- [ ] **Async/data loading:** `blocks/fragment/fragment.js`, `scripts/commerce.js`, `scripts/scripts.js`, and `scripts/delayed.js`.
- [ ] **Observers:** `blocks/embed/embed.js` uses `IntersectionObserver`; find `MutationObserver` and `ResizeObserver` usages with a focused search and record whether each exists in project-authored source or only a dependency.
- [ ] **EDS helpers:** `scripts/aem.js`, `blocks/fragment/fragment.js`, `scripts/scripts.js`, `scripts/commerce.js`, and `scripts/loginDropdown/helpers.js`.
- [ ] **Design patterns:** compare embed, accordion, columns, fragment, a preview block, and a widget block such as `blocks/bioz-widget/bioz-widget.js`.

**Useful searches:** `rg "readBlockConfig|createOptimizedPicture" blocks scripts`, `rg "IntersectionObserver|MutationObserver|ResizeObserver" blocks scripts --glob '*.js'`, and `rg "addEventListener|history\\.(pushState|replaceState)" blocks scripts --glob '*.js'`.

When a topic does not appear in authored source, note that clearly rather than forcing an example. Libraries and generated/minified bundles may contain APIs that project code does not directly use.

#### 9.6 Practice explaining a block from start to finish

Pick one block and answer these questions without reading the file aloud. Then check your explanation against the source.

1. **Authored input:** What content, links, rows, classes, or metadata does the author provide?
2. **Entry point:** How is the block module loaded, and what function receives the block element?
3. **Assumptions:** What DOM structure and required data does the code expect? What guard clauses handle missing pieces?
4. **Transformation:** Which nodes/classes/attributes are added, moved, replaced, or removed?
5. **Data and timing:** Does it fetch data, load another module/fragment/widget, or wait for visibility?
6. **Interaction:** What listeners or observers are registered? How does state change, including keyboard and accessibility state?
7. **Output:** What does the visitor see, and what URL, storage, or server state may change?
8. **Failure and cleanup:** What happens for missing data, failed requests, or malformed content? Are timers/listeners/observers cleaned up?

Use this short outline to explain it:

> “This block is authored with ___. EDS loads `blocks/<name>/<name>.js` and calls `decorate(block)`. The decorator first ___. It then ___. When the user/observer/request ___, the code ___. The visible result is ___. If ___ is missing/fails, it ___. One important edge case is ___.”

**Finish the exercise when:** you can explain the block's input, main transformation, user-visible behavior, and one meaningful edge case without relying on line-by-line narration.

---

## Quick reminders

- Use `const` by default; use `let` when you reassign.
- `?.` protects a nullable access; `??` supplies a fallback only for `null`/`undefined`.
- `||` treats `0`, `false`, and `''` as missing; `??` preserves them.
- Spread copies only one level of an array or object.
- Arrow functions with `{}` need an explicit `return` to produce a value.
- In an EDS block module, the exported `decorate(block)` function is called with a DOM element by the page's block-loading code.
- Use `textContent` for untrusted text rather than inserting it into `innerHTML`.

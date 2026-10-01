# sequant-example

A deliberately tiny slug library. It exists so [Sequant](https://github.com/sequant-io/sequant)'s how-to guides can point at real issues, real runs, real QA comments and real pull requests instead of screenshots of made-up ones.

```js
import { slugify } from "./src/slugify.js";
slugify("Hello, World!"); // "hello-world"
```

Run the tests with `npm test` (Node 22+, no dependencies).

## How this repo is used

Each open issue is written the way Sequant expects (requirements as `## Acceptance Criteria` checkboxes) and maps to one guide:

| Issue | Guide it demonstrates |
|---|---|
| Accented letters are dropped | Your first issue to PR |
| Add a `maxLength` option | Write issues Sequant can execute |
| Truncate at a word boundary (blocked by the `maxLength` issue) | Run related issues without conflicts |
| README typo | Pick the cheapest correct path for an issue |

Everything here is fictional and safe to copy.

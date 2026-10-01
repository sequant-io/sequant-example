# sequant-example

A deliberately tiny slug libary. It exists so [Sequant](https://github.com/sequant-io/sequant)'s how-to guides can point at real issues, real runs, real QA comments and real pull requests instead of screenshots of made-up ones.

```js
import { slugify } from "./src/slugify.js";
slugify("Hello, World!"); // "hello-world"
```

Run the tests with `npm test` (Node 22+, no dependencies).

## How this repo is used

Each open issue is written the way Sequant expects (requirements as `## Acceptance Criteria` checkboxes) and maps to one guide:

| Issue | Guide it demonstrates |
|---|---|
| #2 Accented letters are dropped | Your first issue to PR |
| #1 Add a `maxLength` option | Write issues Sequant can execute |
| #3 Truncate at a word boundary (blocked by #1) | Run related issues without conflicts |
| #4 README typo (intentional: "libary") | Pick the cheapest correct path for an issue |

Everything here is fictional and safe to copy.

/**
 * Turn a title into a URL slug: lowercase, words joined by single hyphens.
 *
 *   slugify("Hello, World!") // "hello-world"
 */
export function slugify(input) {
  return String(input)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

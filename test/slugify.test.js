import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../src/slugify.js";

test("lowercases and joins words with hyphens", () => {
  assert.equal(slugify("Hello, World!"), "hello-world");
});

test("collapses runs of separators", () => {
  assert.equal(slugify("a  --  b"), "a-b");
});

test("trims leading and trailing separators", () => {
  assert.equal(slugify("  !hi!  "), "hi");
});

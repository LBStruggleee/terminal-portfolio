import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../../index.html", import.meta.url), "utf-8");
const manifest = readFileSync(
  new URL("../../public/site.webmanifest", import.meta.url),
  "utf-8"
);

describe("seo meta", () => {
  it("has no template author references in public meta", () => {
    expect(html).not.toMatch(/satnaing/i);
    expect(manifest).not.toMatch(/satnaing/i);
  });

  it("titles the site as mine", () => {
    expect(html).toMatch(/奉昌炜|FCW/);
  });
});

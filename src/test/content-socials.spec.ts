import { describe, expect, it } from "vitest";
import { socials } from "../content/socials";

describe("socials content", () => {
  it("exposes a non-empty list with id/title/url", () => {
    expect(Array.isArray(socials)).toBe(true);
    expect(socials.length).toBeGreaterThan(0);
    for (const s of socials) {
      expect(typeof s.id).toBe("number");
      expect(typeof s.title).toBe("string");
      expect(typeof s.url).toBe("string");
    }
  });

  it("has unique ids", () => {
    const ids = socials.map(s => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

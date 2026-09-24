import { describe, expect, it } from "vitest";
import { education } from "../content/education";

describe("education content", () => {
  it("exposes a non-empty list with title/desc", () => {
    expect(Array.isArray(education)).toBe(true);
    expect(education.length).toBeGreaterThan(0);
    for (const e of education) {
      expect(typeof e.title).toBe("string");
      expect(typeof e.desc).toBe("string");
    }
  });
});

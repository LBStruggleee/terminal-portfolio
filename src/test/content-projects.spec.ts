import { describe, expect, it } from "vitest";
import { projects } from "../content/projects";

describe("projects content", () => {
  it("exposes a non-empty list with id/title/desc/url", () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
    for (const p of projects) {
      expect(typeof p.id).toBe("number");
      expect(typeof p.title).toBe("string");
      expect(typeof p.desc).toBe("string");
      expect(typeof p.url).toBe("string");
    }
  });

  it("has unique ids", () => {
    const ids = projects.map(p => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

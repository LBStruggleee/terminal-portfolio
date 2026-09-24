import { describe, expect, it } from "vitest";
import { skills } from "../content/skills";

describe("skills content", () => {
  it("exposes a list with name/detail", () => {
    expect(Array.isArray(skills)).toBe(true);
    for (const s of skills) {
      expect(typeof s.name).toBe("string");
      expect(typeof s.detail).toBe("string");
    }
  });
});

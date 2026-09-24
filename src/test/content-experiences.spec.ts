import { describe, expect, it } from "vitest";
import { experiences } from "../content/experiences";

describe("experiences content", () => {
  it("exposes a list with title/org/period", () => {
    expect(Array.isArray(experiences)).toBe(true);
    for (const e of experiences) {
      expect(typeof e.title).toBe("string");
      expect(typeof e.org).toBe("string");
      expect(typeof e.period).toBe("string");
    }
  });
});

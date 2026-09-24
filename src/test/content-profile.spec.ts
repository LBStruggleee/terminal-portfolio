import { describe, expect, it } from "vitest";
import { profile } from "../content/profile";

describe("profile content", () => {
  it("exposes name/role/location/summary", () => {
    expect(typeof profile.name).toBe("string");
    expect(typeof profile.role).toBe("string");
    expect(typeof profile.location).toBe("string");
    expect(typeof profile.summary).toBe("string");
  });
});

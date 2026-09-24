import { describe, expect, it } from "vitest";
import { render, screen } from "../utils/test-utils";
import Terminal from "../components/Terminal";

describe("personal branding", () => {
  it("shows personal hostname instead of the template one", () => {
    render(<Terminal />);
    expect(screen.getAllByText("fcw-terminal").length).toBeGreaterThan(0);
    expect(document.body.innerHTML).not.toMatch(/satnaing/i);
  });

  it("welcome shows my name art and no template repo link", () => {
    render(<Terminal />);
    const welcome = screen.getByTestId("welcome");
    expect(welcome.textContent).toContain("|_ _|");
    expect(welcome.innerHTML).not.toMatch(/satnaing/i);
  });

  it("portrait art is mine, not the template illustration", () => {
    render(<Terminal />);
    const welcome = screen.getByTestId("welcome");
    expect(welcome.innerHTML).not.toMatch(/,##,,eew,/);
  });

  it("portrait is density style (filled tones)", () => {
    render(<Terminal />);
    const welcome = screen.getByTestId("welcome");
    const pres = welcome.querySelectorAll("pre");
    const portrait = pres[pres.length - 1].textContent ?? "";
    const ink = portrait.replace(/\s/g, "").length;
    expect(1 - ink / portrait.length).toBeLessThan(0.5);
  });
});

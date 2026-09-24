import { describe, expect, it } from "vitest";
import { render, screen, userEvent } from "../utils/test-utils";
import Terminal from "../components/Terminal";

describe("experience/skills commands", () => {
  it("renders experience from content", async () => {
    const user = userEvent.setup();
    render(<Terminal />);
    const input = screen.getByTitle("terminal-input");
    await user.type(input, "experience{enter}");
    expect(screen.getByTestId("experience")).toBeInTheDocument();
  });

  it("renders skills from content", async () => {
    const user = userEvent.setup();
    render(<Terminal />);
    const input = screen.getByTitle("terminal-input");
    await user.type(input, "skills{enter}");
    expect(screen.getByTestId("skills")).toBeInTheDocument();
  });
});

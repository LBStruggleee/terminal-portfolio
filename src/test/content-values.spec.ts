import { describe, expect, it } from "vitest";
import { profile } from "../content/profile";
import { experiences } from "../content/experiences";
import { skills } from "../content/skills";
import { projects } from "../content/projects";
import { education } from "../content/education";

describe("public portfolio content (safe subset)", () => {
  it("profile uses public name/role, no sensitive PII", () => {
    expect(profile.name).toBe("奉昌炜");
    const raw = JSON.stringify(profile);
    expect(raw).not.toMatch(
      /431126|432924|360481|18218091181|718508219|港口镇|宁远|200408/
    );
  });

  it("experiences include the two internships", () => {
    const text = JSON.stringify(experiences);
    expect(text).toMatch(/轩辕|AI开发实习/);
    expect(text).toMatch(/澳辉|数据运营/);
  });

  it("projects include DataQuery-Copilot and KnowFlow RAG", () => {
    const text = JSON.stringify(projects);
    expect(text).toMatch(/DataQuery-Copilot|数据查询/);
    expect(text).toMatch(/KnowFlow|RAG/);
  });

  it("skills and education mention the job-hunting stack", () => {
    expect(JSON.stringify(skills)).toMatch(/Python/);
    expect(JSON.stringify(education)).toMatch(/惠州学院/);
  });
});

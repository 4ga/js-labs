// tests/cli.test.js
import { describe, it, expect } from "vitest";
import { runCli } from "../src/cli.js";

describe("todo CLI (in-memory)", () => {
  it("adds a todo", () => {
    const { todos, output } = runCli([], ["add", "Buy milk"]);

    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe("Buy milk");
    expect(output).toBe('Added: "Buy milk"');
  });

  it("lists todos when there are some", () => {
    const first = runCli([], ["add", "Buy milk"]);
    const result = runCli(first.todos, ["list"]);

    expect(result.output).toContain("Buy milk");
  });

  it("shows message when no todos", () => {
    const result = runCli([], ["list"]);

    expect(result.output).toBe("No todos yet.");
  });

  it("toggles a todo by id", () => {
    const first = runCli([], ["add", "Learn JS"]);
    const id = first.todos[0].id;

    const result = runCli(first.todos, ["toggle", id]);

    expect(result.todos[0].completed).toBe(true);
    expect(result.output).toBe(`Toggled: ${id}`);
  });

  it("shows message when toggling missing id", () => {
    const first = runCli([], ["add", "Task"]);
    const result = runCli(first.todos, ["toggle", "missing-id"]);

    expect(result.todos).toBe(first.todos);
    expect(result.output).toBe("Todo not found.");
  });

  it("removes a todo by id", () => {
    const first = runCli([], ["add", "Task"]);
    const id = first.todos[0].id;

    const result = runCli(first.todos, ["remove", id]);

    expect(result.todos.length).toBe(0);
    expect(result.output).toBe(`Removed: ${id}`);
  });

  it("shows message when removing missing id", () => {
    const first = runCli([], ["add", "Task"]);
    const result = runCli(first.todos, ["remove", "missing-id"]);

    expect(result.todos).toBe(first.todos);
    expect(result.output).toBe("Todo not found.");
  });

  it("returns help for unknown command", () => {
    const result = runCli([], ["unknown"]);

    expect(result.output).toContain("Usage:");
  });
});

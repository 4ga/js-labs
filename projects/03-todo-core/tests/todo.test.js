// tests/todo.test.js
import { describe, it, expect } from "vitest";
import { createTodo, toggleTodoCompleted, removeTodo } from "../src/todo.js";

describe("todo core", () => {
  describe("createTodo", () => {
    it("creates a todo with default values", () => {
      const todo = createTodo("Buy milk");

      expect(todo.id).toBeDefined();
      expect(typeof todo.id).toBe("string");
      expect(todo.title).toBe("Buy milk");
      expect(todo.completed).toBe(false);
      expect(todo.createdAt).toBeInstanceOf(Date);
      expect(todo.updatedAt).toBeInstanceOf(Date);
    });

    it("trims the title", () => {
      const todo = createTodo("   Buy milk   ");
      expect(todo.title).toBe("Buy milk");
    });

    it("throws if title is empty or only spaces", () => {
      expect(() => createTodo("")).toThrow("Title is required");
      expect(() => createTodo("   ")).toThrow("Title is required");
    });

    it("throws if title is not a string", () => {
      // @ts-ignore - we're deliberately passing a non-string
      expect(() => createTodo(123)).toThrow("Title must be a string");
    });

    it("creates todos with different ids", () => {
      const todo1 = createTodo("Task A");
      const todo2 = createTodo("Task B");

      expect(todo1.id).not.toBe(todo2.id);
    });
  });

  describe("toggleTodoCompleted", () => {
    it("toggles the completed flag for the matching todo", () => {
      const todo = createTodo("Task");
      const todos = [todo];

      const updatedTodos = toggleTodoCompleted(todos, todo.id);

      expect(updatedTodos[0].completed).toBe(true);
    });

    it("updates updatedAt when toggling", () => {
      const todo = createTodo("Task");
      const todos = [todo];

      const updatedTodos = toggleTodoCompleted(todos, todo.id);

      expect(updatedTodos[0].updatedAt.getTime()).toBeGreaterThanOrEqual(
        todo.updatedAt.getTime()
      );
    });

    it("returns original array if id not found", () => {
      const todo = createTodo("Task");
      const todos = [todo];

      const updatedTodos = toggleTodoCompleted(todos, "missing-id");

      // Same array reference means truly unchanged collection
      expect(updatedTodos).toBe(todos);
    });
  });

  describe("removeTodo", () => {
    it("removes the todo with the given id", () => {
      const todo1 = createTodo("Task 1");
      const todo2 = createTodo("Task 2");
      const todos = [todo1, todo2];

      const updatedTodos = removeTodo(todos, todo1.id);

      expect(updatedTodos.length).toBe(1);
      expect(updatedTodos[0].id).toBe(todo2.id);
    });

    it("returns original array if id not found", () => {
      const todo1 = createTodo("Task 1");
      const todos = [todo1];

      const updatedTodos = removeTodo(todos, "missing-id");

      expect(updatedTodos).toBe(todos);
    });
  });

  it("does not mutate the original todo object when toggling", () => {
    const original = createTodo("Task");
    const todos = [original];

    const updatedTodos = toggleTodoCompleted(todos, original.id);

    expect(updatedTodos[0]).not.toBe(original); // new object
    expect(todos[0]).toBe(original); // original unchanged in array
  });

  it("returns a new array instance when a todo is removed", () => {
    const t1 = createTodo("Task 1");
    const t2 = createTodo("Task 2");
    const todos = [t1, t2];

    const updatedTodos = removeTodo(todos, t1.id);

    expect(updatedTodos).not.toBe(todos);
  });
});

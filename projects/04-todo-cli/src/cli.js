import { createTodo, toggleTodoCompleted, removeTodo } from "./todo";

export function runCli(todos, args) {
  const [command, ...rest] = args;
  switch (command) {
    case "add":
      const title = rest.join(" ");
      const todo = createTodo(title);
      return { todos: [...todos, todo], output: `Added: "${title}"` };
    case "list": {
      let output = todos.map((t) => t.title);
      return { todos, output: output.length <= 0 ? "No todos yet." : output };
    }
    case "toggle": {
      const id = rest[0];
      return {
        todos: toggleTodoCompleted(todos, id),
        output: !todos.find((t) => t.id === id)
          ? `Todo not found.`
          : `Toggled: ${id}`,
      };
    }
    case "remove": {
      const id = rest[0];
      return {
        todos: removeTodo(todos, id),
        output: !todos.find((t) => t.id === id)
          ? `Todo not found.`
          : `Removed: ${id}`,
      };
    }
    default:
      return {
        todos,
        output: "Usage: add <title> | list | toggle <id> | remove <id> ",
      };
  }
}

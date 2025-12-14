import { createTodo, toggleTodoCompleted, removeTodo } from "./todo";

export function runCli(todos, args) {
  const [command, ...rest] = args;
  switch (command) {
    case "add":
      const title = rest.join(" ");
      const todo = createTodo(title);
      return { todos: [...todos, todo], output: `Added: "${title}"` };
    case "list": {
      if (todos.length === 0) return { todos, output: "No todos yet." };
      const lines = todos.map((t, index) => {
        const status = t.completed ? "[x]" : "[ ]";
        return `${index + 1}. ${status} ${t.title} (id: ${t.id})`;
      });
      const output = lines.join("\n");
      return { todos, output };
    }
    case "toggle": {
      const id = rest[0];
      if (!id) return { todos, output: "Missing id. Usage: toggle <id>" };
      const updatedTodos = toggleTodoCompleted(todos, id);
      if (updatedTodos === todos) {
        return { todos, output: "Todo not found." };
      }
      return { todos: updatedTodos, output: `Toggled: ${id}` };
    }
    case "remove": {
      const id = rest[0];
      if (!id) return { todos, output: "Missing id. Usage: toggle <id>" };
      const removedTodos = removeTodo(todos, id);
      if (removedTodos === todos) {
        return { todos, output: "Todo not found." };
      }
      return { todos: removedTodos, output: `Removed: ${id}` };
    }
    default:
      return {
        todos,
        output: "Usage: add <title> | list | toggle <id> | remove <id> ",
      };
  }
}

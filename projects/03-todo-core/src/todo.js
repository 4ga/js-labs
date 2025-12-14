function generatedId() {
  return Math.random().toString(36).slice(2);
}
export function createTodo(title) {
  const now = new Date();

  if (typeof title !== "string") throw new Error("Title must be a string");
  let updatedTitle = title.trim();
  if (updatedTitle.length <= 0) throw new Error("Title is required");

  const todo = {
    id: generatedId(),
    title: updatedTitle,
    completed: false,
    createdAt: now,
    updatedAt: now,
  };

  return todo;
}
export function toggleTodoCompleted(todos, id) {
  const now = new Date();
  const todo = todos.find((t) => t.id === id);
  if (!todo) return todos;
  return todos.map((todo) =>
    todo.id === id
      ? { ...todo, completed: !todo.completed, updatedAt: now }
      : todo
  );
}
export function removeTodo(todos, id) {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return todos;
  return todos.filter((todo) => todo.id !== id);
}

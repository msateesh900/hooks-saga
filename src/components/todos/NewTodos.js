export const NewTodos = (name) => {
  return { id: Date.now(), name: name, completed: false };
};

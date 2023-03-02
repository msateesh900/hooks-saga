import { ACTIONS } from "./Actions";
import { NewTodos } from "./NewTodos";

export const reducer = (todos, action) => {
  //   console.log(todos, action);
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      return [...todos, NewTodos(action.payload.name)];
    }
    case ACTIONS.TOGGLE_TODO: {
      return todos.map((todo) => {
        if (todo.id === action.payload.id)
          return { ...todo, completed: !todo.completed };
        return todo;
      });
    }

    case ACTIONS.DELETE_TODO: {
      return todos.filter((todo) => todo.id !== action.payload.id);
    }
    default:
      return todos;
  }
};

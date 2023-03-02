import React from "react";
import { ACTIONS } from "./Actions";

function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.completed ? "#AAA" : "#000" }}>
        {todo.name}
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          Toggle
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
      </span>
    </div>
  );
}

export default Todo;

import { useState, useReducer } from "react";
import { reducer } from "./Reducer";
import Todo from "./Todo";
import { ACTIONS } from "./Actions";

const Todos = () => {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  };
  //   console.log(todos);
  return (
    <div>
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </>
    </div>
  );
};

export default Todos;

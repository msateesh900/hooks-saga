import "./App.css";
import { React, useEffect } from "react";
import { Greet } from "./components/Greet";
import { Message } from "./components/Message";
import { ParentComponent } from "./components/ParentComponent";

import Todos from "./components/todos/Todos";
import UseMemoHook from "./components/useMemoHook/UseMemoHook";
import UseRefHook from "./components/UseRefHook/UseRefHook";
import UseCallbackHook from "./components/UseCallBackHook/UseCallbackHook";
import ToggleComponent from "./components/customHooks/ToggleComponent";

import { useSelector, useDispatch } from "react-redux";

import { bindActionCreators } from "redux";
import { ActionCreators } from "./components/reduxHooks/actionCreators/index.js";
import { getUsers } from "./components/reduxSagaComponents/actionCreators";
import { UseCounterUsage } from "./components/ReactUnitTesting/UseCounterUsage";

function App() {
  // const account = useSelector((state) => state.account);

  const dispatch = useDispatch();

  // const { depositMoney, withdrawMoney } = bindActionCreators(
  //   ActionCreators,
  //   dispatch
  // );

  const users = useSelector((state) => state.users);

  const loading = useSelector((state) => state.loading);

  const error = useSelector((state) => state.error);
  // console.log(loading, error);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="BatMan" />
      <Greet name="Clark" heroName="SuperMan">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="WonderWomen">
        
      </Greet> */}
      {/* <Message /> */}
      {/* <a className="App-link">This is children Prop</a>
      <ParentComponent /> */}
      {/* <ParentComponent /> */}
      {/* <Todos />  using useReducerHook*/}
      {/* <UseMemoHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <ToggleComponent />
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>&nbsp;
      <button onClick={() => withdrawMoney(1000)}>WithDraw</button> */}

      {/* -------------------- Redux Saga Example start ---------------
      <h1>Welcome to React Redux Saga Crash Course</h1>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)} 
      ------------------------------Redux Saga End ---------------------
      */}
      <UseCounterUsage />
    </div>
  );
}

export default App;

import React, { useState, useEffect, useRef } from "react";

//usecase:1 Find How many times page got rendered using useRef
//usecase:2 How we can make of useRef to Focus the input
//usecase:3 How we can get Prev State value using useRef

function UseRefHook() {
  const [name, setName] = useState("");

  //   const [renderCount, setRenderCount] = useState(0);//

  //   const renderCount = useRef(0); //usecase:1

  //   const inputRef = useRef(); //usecase:2

  //   const focus = () => {          //usecase:2
  //     inputRef.current.focus();
  //   };

  const prevName = useRef();

  useEffect(() => {
    // setRenderCount((prevRenderCount) => prevRenderCount + 1); //usecase:1
    // renderCount.current = renderCount.current + 1; // usecase:1
    prevName.current = name; // usecase:3
  });

  return (
    <>
      {/* <input
        type="text"
        name={name}
        onChange={(e) => setName(e.target.value)} //usecase:1
      /> */}
      <input
        type="text"
        // ref={inputRef} //usecase:2
        name={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      {/* <button onClick={focus}>Focus</button> //usecase:2 */}
      <br />
      Entered Name is:{name}
      <br />
      and previously it was {prevName.current} {/* usecase:3*/}
      {/* <div>I rendered this app in {renderCount.current} times</div>{" "}  */}
      {/* usecase:1*/}
    </>
  );
}

export default UseRefHook;

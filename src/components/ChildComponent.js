export const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.GreetHandler("child")}>Greet Parent</button>
    </div>
  );
};

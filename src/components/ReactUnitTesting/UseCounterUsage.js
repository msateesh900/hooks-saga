import useCounter from "./useCounter";

export const UseCounterUsage = () => {
  const { count, add } = useCounter(5, () => {
    console.log("Here is the callBack");
  });
  return (
    <div>
      <span>{count}</span>
      <button
        onClick={() => {
          add(3);
        }}
      >
        ++
      </button>
    </div>
  );
};

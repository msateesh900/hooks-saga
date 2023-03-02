import { ChildComponent } from "./ChildComponent";
export const ParentComponent = () => {
  const greet = (childName) => {
    alert(`Hello Parent ${childName}`);
  };

  return <ChildComponent GreetHandler={greet} />;
};

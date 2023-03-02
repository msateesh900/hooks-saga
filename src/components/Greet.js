// function Greet() {
//   return <h1>Hello Sateesh</h1>;
// }

export const Greet = (props) => (
  <>
    <h1>
      Hello {props.name} a.k.a {props.heroName}
    </h1>
    {props.children}
  </>
);

// export default Greet;

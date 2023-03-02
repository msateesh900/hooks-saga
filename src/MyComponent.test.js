import ShallowRenderer from "react-shallow-renderer";
import React from "react";

import MyComponent from "../src/ReactUnitTesting/MyComponent";
// in your test
const renderer = new ShallowRenderer();
renderer.render(<MyComponent />);

const result = renderer.getRenderOutput();

expect(result.type).toBe("div");
expect(result.props.children).toEqual([
  <span className={"heading"}>{"Title"}</span>,
  <span className={"description"}>{"Description"}</span>,
]);

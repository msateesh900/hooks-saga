// import React from "react";
// import ReactDOM from "react-dom/client";
// import { render, unmountComponentAtNode } from "react-dom";
// import { createRoot } from "react-dom/client";

// import { act } from "react-dom/test-utils";

// import Hello from "../components/ReactUnitTesting/Hello";

// let container = null;
// const root = ReactDOM.createRoot(document.getElementById("root"));

// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("renders with or without a name", () => {
//   act(() => {
//     root.render(<Hello />, container);
//   });
//   expect(container.textContent).toBe("Hey, stranger");

//   act(() => {
//     root.render(<Hello name="Jenny" />, container);
//   });
//   expect(container.textContent).toBe("Hello, Jenny!");

//   act(() => {
//     root.render(<Hello name="Margaret" />, container);
//   });
//   expect(container.textContent).toBe("Hello, Margaret!");
// });

import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {});

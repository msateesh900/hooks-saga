import { useState } from "react";

export function Message() {
  const [message, setMessage] = useState("Welcome Visitor");
  return (
    <>
      <h1> {message}</h1>
      <button onClick={() => setMessage("Thank you for Subscribing!!!")}>
        Subscribe
      </button>
    </>
  );
}

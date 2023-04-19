import React, { useMemo, useState } from "react";

function Counter() {
  const [countone, setCountone] = useState(0);
  const [countwo, setCountwo] = useState(0);

  function increment() {
    setCountone(countone + 1);
  }

  function decrement() {
    setCountwo(countwo - 1);
  }

  const isEven = useMemo(() => {
    for (let i = 0; i < 10000; i++) {}
    return countone % 2 === 0;
  }, [countone]);

  return (
    <div>
      <button onClick={increment}>Count one {countone}</button>
      {isEven ? "Even" : "Odd"} <br />
      <button onClick={decrement}>Counr two {countwo}</button>
    </div>
  );
}

export default Counter;

import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState("+");
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(
    () => expensiveCalculation(parseInt(count, 10)),
    [count]
  );

  const increment = () => {
    setCount((c) => (c === "+" ? 1 : parseInt(c, 10) + 1));
    // setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div id="main">
      <h1>React.useMemo</h1>
      <h1>My todos</h1>
      <div>
        {todos.map((todo, index) => {
          return (
            <p id={`todo-${index}`} key={index}>
              {todo}
            </p>
          );
        })}
        <button id="add-todo-btn" onClick={addTodo}>
          Add Todo
        </button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button id="incr-cnt" onClick={increment}>
          {count}
        </button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default UseMemo;

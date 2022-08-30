import { useReducer } from "react";
const initialstate = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "Add One":
      return state + action.value;
    case "Add Five":
      return state + action.value;
    case "Decrement":
      return state - action.value;
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialstate);
  const [count2, dispatch2] = useReducer(reducer, initialstate);

  return (
    <div>
      <p>count is : {count}</p>
      <button onClick={() => dispatch({ type: "Add One", value: 1 })}>
        Add One
      </button>
      <button onClick={() => dispatch({ type: "Add Five", value: 5 })}>
        Add Five
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        Decrement
      </button>

      <p>count is : {count2}</p>
      <button onClick={() => dispatch2({ type: "Add One", value: 2 })}>
        Add two
      </button>
      <button onClick={() => dispatch2({ type: "Add Five", value: 10 })}>
        Add ten
      </button>
      <button onClick={() => dispatch2({ type: "Decrement", value: 1 })}>
        Decrement
      </button>
    </div>
  );
};

export default CounterReducer;

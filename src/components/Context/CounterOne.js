import { useCount, useCountAction } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const { addOne, addFive } = useCountAction();

  //   const addOne = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };
  //   const addFive = () => {
  //     setCount((prevCount) => prevCount + 5);
  //   };

  return (
    <div>
      <p>count is : {count}</p>
      <button onClick={addOne}>Add One</button>
      <button onClick={addFive}>Add Five</button>
    </div>
  );
};

export default CounterOne;

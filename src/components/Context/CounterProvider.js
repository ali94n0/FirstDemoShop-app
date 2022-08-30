import React, { useContext, useState } from "react";

const CounterContext = React.createContext();
const CounterContextDispacher = React.createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispacher.Provider value={setCount}>
        {children}
      </CounterContextDispacher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);
export const useCountAction = () => {
  const setCount = useContext(CounterContextDispacher);
  const addOne = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const addFive = () => {
    setCount((prevCount) => prevCount + 5);
  };
  return { addOne, addFive };
};

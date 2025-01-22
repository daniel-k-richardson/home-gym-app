import {useContext} from "react";
import {CounterContext} from "../contexts/CounterContext.tsx";

function MyButton() {

  const { setCount } = useContext(CounterContext);

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  return (
    <button onClick={handleClick}>
    click me</button>
  );
}

export default MyButton;

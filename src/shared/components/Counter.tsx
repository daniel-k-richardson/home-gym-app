import MyButton from "./MyButton.tsx";
import { useContext } from "react";
import {CounterContext} from "../contexts/CounterContext.tsx";

function Counter(){
    const {count} = useContext(CounterContext);

    return (
        <>
            <h1>{count}</h1>
            <MyButton/>
            <MyButton/>
        </>
    );
}

export default Counter;

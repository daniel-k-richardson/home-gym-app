import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

export interface CounterContextType {
    count: number,
    setCount: Dispatch<SetStateAction<number>>
}

export const CounterContext = createContext<CounterContextType>({
    count: 0,
    setCount: () => {}
});

type CounterProviderProps = {
    children: ReactNode
}

export default function CounterProvider({children}: CounterProviderProps) {
    const [count, setCount] = useState(0);

    return(
        <CounterContext.Provider value={{count, setCount}}>
            {children}
        </CounterContext.Provider>
    )
}

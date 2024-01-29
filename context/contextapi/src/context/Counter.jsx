import { createContext, useState } from "react";

export const CounterContext = createContext(null);
// CounterProvider 
export const CP = (props) => {
     const [count,setCount]  = useState(0);
return (
    <CounterContext.Provider value={{count,setCount}}> 
        {props.children}
    </CounterContext.Provider>
    )
}
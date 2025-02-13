import { createContext, useContext, useState } from "react"

type Props = {
    children: React.ReactNode,
}

type ContextProps = {
    activeIndex: number,
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
}

const ActiveIndexContext = createContext<ContextProps>({} as ContextProps);

function ActiveIndexProvider({children}: Props) {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <ActiveIndexContext.Provider value={{activeIndex, setActiveIndex}}>
            {children}
        </ActiveIndexContext.Provider>
    )
}


function useActiveIndexContext() {
    const context = useContext(ActiveIndexContext);

    if(context === undefined) throw new Error("useActiveIndexContext is being used out of its boundaries");

    return context;
}

export { ActiveIndexProvider, useActiveIndexContext}

import { createContext, ReactNode, useContext, useState } from "react";

interface TechsContextType {
    techs: string[] | null,
    setTechs: React.Dispatch<React.SetStateAction<string[]>>
} 
export const TechsContext = createContext<TechsContextType>({
    techs: null,
    setTechs: () => {}
})


export const useTechsContext = () => {
    const context = useContext(TechsContext)

    if (!context.techs && context.techs === null) {
        throw new Error('TechsContext must to be use within a TechsContextProvider');
    }

    return context
}


interface TechsContextProviderParams {
    children: ReactNode
}

const EmptyTechsContextValue: string[] = []

export const TechsContextProvider = ({children}: TechsContextProviderParams) => {
    const [ techs, setTechs ] = useState(EmptyTechsContextValue)

    return (
        <TechsContext.Provider value={{techs, setTechs}}>
            { children }
        </TechsContext.Provider>
    )
}
import { useState } from "react"
import "./TechButton.css"
import { useTechsContext } from "@/contexts/techs.context"

interface Params {
    children: string,
    // parentClickHandler?: () => {}
}

export const TechButton = ({children}: Params) => {
    const [ selected, setSelected ] = useState<boolean>(false)
    const techsContext = useTechsContext()

    const handleClick = () => {
        if (selected == false && !techsContext.techs?.includes(children)) {
            techsContext.setTechs(techs => [...techs, children])
        } else {
            if (techsContext.techs?.includes(children)) {
                techsContext.setTechs(techs => techs.filter(tech => tech !== children))
            }
        }

        setSelected(selected => !selected)
    }    

    return <button onClick={handleClick} className={`tech-button ${selected ? "tech-button--selected" : ""}`}>{ children }</button>
}
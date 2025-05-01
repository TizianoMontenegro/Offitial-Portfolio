import { ReactNode } from "react"
import "./SkillCard.css"

interface Params { children: ReactNode, title: string }

export const SkillCard = ({children, title}: Params) => {
  return (
    <article className="skills__tech">
      <h4>{ title }</h4>
      <div className='tech--list'>
        { children }
      </div>
    </article>
  )
}
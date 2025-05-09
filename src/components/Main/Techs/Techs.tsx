import { TechButton } from "./TechButton/TechButton"
import "./Techs.css"
// import { useTechsContext } from "@/contexts/techs.context"
// import { CssIcon, FlaskIcon, HtmlIcon, JavascriptIcon, NextjsIconLight, PythonIcon, ReactIcon, SqlIcon, TypescriptIcon } from "@/assets"
// import { SkillCard } from "./SkillCard/SkillCard.tsx"

export const Techs = () => {
  // const cont = useTechsContext()
  return (
    <section className="techs">
      {/* <button onClick={() => console.log(cont.techs)}>console selected techs</button> */}

      <TechButton>HTML</TechButton>
      <TechButton>CSS</TechButton>
      <TechButton>JavaScript</TechButton>
      <TechButton>TypeScript</TechButton>
      <TechButton>ReactJS</TechButton>
      <TechButton>Angular</TechButton>
      <TechButton>TailwindCSS</TechButton>
      <TechButton>Python</TechButton>
      <TechButton>Flask</TechButton>
      <TechButton>SQL</TechButton>
      <TechButton>SQLite</TechButton>
      <TechButton>Git</TechButton>
      <TechButton>GitHub</TechButton>
      <TechButton>NodeJS</TechButton>
      <TechButton>Bun</TechButton>

    </section>
  )
}
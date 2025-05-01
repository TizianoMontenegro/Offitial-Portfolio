import { SkillsGallery } from "./SkillsGallery/SkillsGallery"
import "./Techs.css"

export const Techs = () => {
  return (
    <article className="main__skills">
      <h2>Technologies</h2>
      <p>I'm work with the following techs: </p>

      <SkillsGallery />
    </article>
  )
}
import "./SkillsGallery.css"
import { CssIcon, FlaskIcon, HtmlIcon, JavascriptIcon, NextjsIconLight, PythonIcon, ReactIcon, SqlIcon, TypescriptIcon } from "@/assets"
import { SkillCard } from "./SkillCard/SkillCard"

export const SkillsGallery = () => {
  return (
    <section className="skills__techs">
      <SkillCard title="Languages">
        <PythonIcon />
        <TypescriptIcon />
        <SqlIcon />
        <JavascriptIcon />
        <HtmlIcon />
        <CssIcon />
      </SkillCard>

      <SkillCard title="Front End">
        <ReactIcon />
        <NextjsIconLight />
      </SkillCard>

      <SkillCard title="Back End">
        <PythonIcon />
        <FlaskIcon />
        <SqlIcon />
      </SkillCard>

    </section>
  )
}
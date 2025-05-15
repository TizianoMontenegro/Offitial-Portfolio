import { TechButton } from "./TechButton/TechButton"
import "./Techs.css"
// import { useTechsContext } from "@/contexts/techs.context"
// import { CssIcon, FlaskIcon, HtmlIcon, JavascriptIcon, NextjsIconLight, PythonIcon, ReactIcon, SqlIcon, TypescriptIcon } from "@/assets"
// import { SkillCard } from "./SkillCard/SkillCard.tsx"

import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export const Techs = () => {
  // const cont = useTechsContext()

  useGSAP(() => {
    gsap.from(".techs span", {
      scrollTrigger: {
        trigger: ".techs",
        toggleActions: "restart none none none",
      },

      x: -100,
      scale: 1.2,
      opacity: 0,
      stagger: {
        grid: "auto",
        from: "start",
        ease: "power2.in",
        amount: .5,
      },
    })
  }, {scope: ".main"})
  
  return (
    <section className="techs">
      {/* <button onClick={() => console.log(cont.techs)}>console selected techs</button> */}

      <span><TechButton>HTML</TechButton></span>
      <span><TechButton>CSS</TechButton></span>
      <span><TechButton>JavaScript</TechButton></span>
      <span><TechButton>TypeScript</TechButton></span>
      <span><TechButton>ReactJS</TechButton></span>
      <span><TechButton>Angular</TechButton></span>
      <span><TechButton>TailwindCSS</TechButton></span>
      <span><TechButton>Python</TechButton></span>
      <span><TechButton>Flask</TechButton></span>
      <span><TechButton>SQL</TechButton></span>
      <span><TechButton>SQLite</TechButton></span>
      <span><TechButton>Git</TechButton></span>
      <span><TechButton>GitHub</TechButton></span>
      <span><TechButton>NodeJS</TechButton></span>
      <span><TechButton>Bun</TechButton></span>

    </section>
  )
}
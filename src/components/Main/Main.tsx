import "./Main.css"
import { Techs } from "./Techs/Techs"
import { Projects } from "./Projects/Projects"

import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export const Main = () => {

  useGSAP(() => {
    gsap.from([".main__titles h2", ".main__titles p"], {
      scrollTrigger: {
        trigger: ".main__titles h2",
        // toggleActions: "restart none none none"
      },

      x: -100,
      opacity: 0,
      stagger: .1
    })
  } )

  return (
    <main id="main-page" className="main">

      <section className='main__col'>
        
        <article className="main__titles">
          <h2>Projects And Technologies</h2>
          <p>Click some tech to sort projects by techs. Click a project to see more information about it.</p>
        </article>


        <Techs />

        <Projects />

        {/* <div className="divisor" /> */}

      </section>
    </main>
  )
}
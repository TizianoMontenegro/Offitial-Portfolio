import "./Main.css"
import { Techs } from "./Techs/Techs"
import { Projects } from "./Projects/Projects"

export const Main = () => {
  return (
    <main className="main">

      <section className='main__col'>
        
        <h2>Projects And Technologies</h2>
        <p>Click some tech to sort projects by it tech.</p>


        <Techs />

        <Projects />

        <div className="divisor" />

      </section>
    </main>
  )
}
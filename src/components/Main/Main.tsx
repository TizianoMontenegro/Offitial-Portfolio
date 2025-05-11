import "./Main.css"
import { Techs } from "./Techs/Techs"
import { Projects } from "./Projects/Projects"

export const Main = () => {
  return (
    <main className="main">

      <section className='main__col'>
        
        <article>
          <h2 style={{fontSize: "3lh"}}>Projects And Technologies</h2>
          <p style={{marginBottom: 0, fontSize: "1lh"}}>Click some tech to sort projects by techs.</p>
        </article>


        <Techs />

        <Projects />

        {/* <div className="divisor" /> */}

      </section>
    </main>
  )
}
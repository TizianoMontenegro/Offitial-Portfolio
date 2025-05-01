import "./Main.css"
import { Techs } from "./Techs/Techs"
import { Projects } from "./Projects/Projects"
import { Education } from "./Education/Education"

export const Main = () => {
  return (
    <main className="main">

      <section className='main__col'>


        {/* <article className="main__image--container">
              <h1>
                <span>Tiziano Montenegro</span>
                <span>Software Engineer</span>
              </h1>
              <img className='main__image' src="https://avatars.githubusercontent.com/u/91438170?v=4" alt="me" />
            </article> */}


        <Techs />

        <div className="divisor" />

        <Projects />

        <div className="divisor" />

        <Education />

        <article>
          <h2>Next steps and goals</h2>

        </article>

        <article>
          <h2>Contact</h2>

        </article>

      </section>
    </main>
  )
}
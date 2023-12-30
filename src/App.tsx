import './App.css'
import { CssIcon, FacebookIcon, GithubIconDark, GithubIconLight, HtmlIcon, InstagramIcon, JavascriptIcon, LinkedinIcon, NextjsIconLight, PythonIcon, ReactIcon, ReduxIcon, SqlIcon, TwitterIcon, TypescriptIcon } from './components/Icons'

function App() {
  return (
    <>
      <header className="header">
        <div className='header--container'>
          <span>ßÓ╔Óê│▲V®Ð$åÈµ¼ÄaõÜ=S╗G¡U:♠○◘9Õ5-4045453241®F5◄8-51T6♦135</span>
          <div className='tech--list'>
            <span>tizianomontenegro07@gmail.com</span>
            <a target='_blank' href="https://github.com/TiziDevScripter">
              <GithubIconLight />
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/tiziano-montenegro-8133a6238/">
              <LinkedinIcon />
            </a>
            <a target='_blank' href="https://twitter.com/tizidevscripter">
              <TwitterIcon />
            </a>
            <a target='_blank' href="https://www.instagram.com/tizianomontenegro07">
              <InstagramIcon />
            </a>
            <a target='_blank' href="https://www.facebook.com/tznmonte">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </header>

      <main className="main">

        <section className='main__col'>

          <article className="main__image--container">
            <span>Tiziano Montenegro</span>
            <img className='main__image' src="https://avatars.githubusercontent.com/u/91438170?v=4" alt="me" />
            <span>Software Engineer</span>
          </article>

          <article className="main__description">
            <h2 className='text-left-slash'>About me</h2>
            <p>
              Greetings! I'm Tiziano, a passionate web developer who is excited to dive into the fascinating world of Machine Learning and AI. I am excited for the opportunity to share my journey and experience with you.
            </p>
            <ul>
              <li>Education</li>
              <ul>
                <li>Harvard courses</li>
                <ul>
                  <li>
                    Computer Science 2023 - 2024
                  </li>
                </ul>
                <li>Taking courses</li>
                <li>Self-thought</li>
              </ul>
            </ul>
            <p>
              For 3 years I have been immersed in web development, I have enjoyed every step of my career.
            </p>
            <p>
              My interest in Machine Learning and AI arises from its ability to transform data into knowledge and make intelligent decisions.
            </p>
            <ul>
              <li>
                I'd like use'em for
                <ul>
                  <li>
                    Explore new dimensions of interactivity in web applications.
                  </li>
                  <li>
                    Optimize processes through intelligent automation.
                  </li>
                  <li>
                    Create predictive solutions to improve the user experience.
                  </li>
                </ul>
              </li>
            </ul>
          </article>

          <div className="divisor"></div>

          <article className="main__skills">
            <h2 className='text-left-slash'>Technologies</h2>
            <p>I'm familyed with following techs: </p>
            <section className="skills__techs">
              <article className="skills__tech">
                <h4>Front-End</h4>
                <div className='tech--list'>
                  <ReactIcon />
                  <ReduxIcon />
                  <NextjsIconLight />
                </div>
              </article>

              <article className="skills__tech">
                <h4>Programming Languages</h4>
                <div className='tech--list'>
                  <HtmlIcon />
                  <CssIcon />
                  <JavascriptIcon />
                  <TypescriptIcon />
                  <PythonIcon />
                  <SqlIcon />
                </div>
              </article>

              <article className="skills__tech">
                <h4>SQL Databases</h4>
                <div className='tech--list'>
                  <ReactIcon />
                </div>
              </article>
            </section>
          </article>

          <div className="divisor"></div>

          <article className="main__projects">
            <h2 className='text-left-slash'>Projects</h2>
            <p>Algunos de mis proyectos más notables incluyen:</p>
            <section className="main__project--list">
              <article className="main__project">
                <img src="" alt="project" />
                <h3>Project name</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic saepe nesciunt accusamus reiciendis.</p>
                <section className="section--info">
                  <article>
                    <p>Built in</p>
                    <div className="tech--list">
                      <ReactIcon />
                      <ReactIcon />
                      <ReactIcon />
                    </div>
                  </article>

                  <article>
                    <p>See code</p>
                    <div className="tech--list">
                      <GithubIconDark />
                    </div>
                  </article>
                </section>
              </article>

              <article className="main__project">
                <img src="" alt="project" />
                <h3>Project name</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic saepe nesciunt accusamus reiciendis.</p>
                <section className="section--info">
                  <article>
                    <p>Built in</p>
                    <div className="tech--list">
                      <ReactIcon />
                      <ReactIcon />
                      <ReactIcon />
                    </div>
                  </article>

                  <article>
                    <p>See code</p>
                    <div className="tech--list">
                      <GithubIconDark />
                    </div>
                  </article>
                </section>
              </article>

              <article className="main__project">
                <img src="" alt="project" />
                <h3>Project name</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic saepe nesciunt accusamus reiciendis.</p>
                <section className="section--info">
                  <article>
                    <p>Built in</p>
                    <div className="tech--list">
                      <ReactIcon />
                      <ReactIcon />
                      <ReactIcon />
                    </div>
                  </article>

                  <article>
                    <p>See code</p>
                    <div className="tech--list">
                      <GithubIconDark />
                    </div>
                  </article>
                </section>
              </article>
            </section>
          </article>


          <article className="main__skills">
            <h2 className='text-left-slash'>Next steps and goals</h2>

          </article>

          <article className="main__skills">
            <h2 className='text-left-slash'>Contact</h2>

          </article>

          <article className="main__skills">
            <h2 className='text-left-slash'>Greatings</h2>

          </article>
        </section>
      </main>
    </>
  )
}

export default App

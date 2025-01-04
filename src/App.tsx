import './App.css'
import { 
  CssIcon, 
  // FacebookIcon, 
  FlaskIcon, 
  GithubIconDark, 
  GithubIconLight, 
  HtmlIcon, 
  // InstagramIcon, 
  JavascriptIcon, 
  LinkedinIcon, NextjsIconLight, 
  OpenWebIconLight, 
  PythonIcon, 
  ReactIcon, 
  // ReduxIcon, 
  SqlIcon, 
  // TwitterIcon, 
  TypescriptIcon 
} from './components/Icons'

function App() {
  return (
    <>
      <header className="header-nav">
        <div className='header-nav__container'>
          <span>Software Engineer</span>
          <div className='header-nav__links'>
            <span>tizianomontenegro07@gmail.com</span>
            <a target='_blank' href="https://github.com/TizianoMontenegro/">
              <GithubIconDark />
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/tiziano-montenegro-8133a6238/">
              <LinkedinIcon />
            </a>
            {/* <a target='_blank' href="https://twitter.com/tizidevscripter">
              <TwitterIcon />
            </a>
            <a target='_blank' href="https://www.instagram.com/tizianomontenegro07">
              <InstagramIcon />
            </a>
            <a target='_blank' href="https://www.facebook.com/tznmonte">
              <FacebookIcon />
            </a> */}
          </div>
        </div>
      </header>
      
      <section className="header-landscape">
        <article className='header__container'>
          <h1 className="header__title">Tiziano Montenegro</h1>
        </article>
      </section>

      <main className="main">

        <section className='main__col'>


          {/* <article className="main__image--container">
            <h1>
              <span>Tiziano Montenegro</span>
              <span>Software Engineer</span>
            </h1>
            <img className='main__image' src="https://avatars.githubusercontent.com/u/91438170?v=4" alt="me" />
          </article> */}

          <article className="main__skills">
            <h2 className='text-left-slash'>Technologies</h2>
            <p>I'm familyed with following techs: </p>
            <section className="skills__techs">
              <article className="skills__tech">
                <h4>Languages</h4>
                <div className='tech--list'>
                  <PythonIcon />
                  <TypescriptIcon />
                  <SqlIcon />
                  <JavascriptIcon />
                  <HtmlIcon />
                  <CssIcon />
                </div>
              </article>

              <article className="skills__tech">
                <h4>Front-End</h4>
                <div className='tech--list'>
                  <ReactIcon />
                  <NextjsIconLight />
                </div>
              </article>

              <article className="skills__tech">
                <h4>Back-End</h4>
                <div className='tech--list'>
                  <PythonIcon />
                  <FlaskIcon />
                </div>
              </article>

              <article className="skills__tech">
                <h4>SQL Databases</h4>
                <div className='tech--list'>
                  <SqlIcon />
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
                <img src="/public/show-page1.png" alt="project 1" />
                <h3>Contacts</h3>
                <p>This is my first Full-Stack web app. Built in Flask for the backend, SQLAlchemy with SQLite for the connection with the database, and React.js for the frontend.</p>
                <section className="section--info">

                  <article>
                    <p>Built in</p>
                    <div className="tech--list">
                      <PythonIcon />
                      <SqlIcon />
                      <ReactIcon />
                    </div>
                  </article>

                  <article>
                    <p>See code</p>
                    <div className="tech--list">
                      <a href="https://github.com/TizianoMontenegro/Contacts" target='_blank'><GithubIconLight /></a>
                    </div>
                  </article>

                  <article>
                    <p>See web</p>
                    <div className="tech--list">
                      <a href="https://contacts-t13mhr3e2-tiziano-montenegros-projects.vercel.app/" target='_blank'><OpenWebIconLight /></a>
                    </div>
                  </article>
                  
                </section>
              </article>

              <article className="main__project">
                <img src="/public/show-page2.png" alt="project 2" />
                <h3>Project name</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic saepe nesciunt accusamus reiciendis.</p>
                <section className="section--info">
                  <article>
                    <p>Built in</p>
                    <div className="tech--list">
                      <NextjsIconLight />
                    </div>
                  </article>

                  <article>
                    <p>See code</p>
                    <div className="tech--list">
                      <a href="https://github.com/TizianoMontenegro/MovieSearch" target='_blank'><GithubIconLight /></a>
                    </div>
                  </article>

                  <article>
                    <p>See web</p>
                    <div className="tech--list">
                      <a href="https://movie-search-7suchbven-tiziano-montenegros-projects.vercel.app/" target='_blank'><OpenWebIconLight /></a>
                    </div>
                  </article>

                </section>
              </article>

              <article className="main__project">
                <img src="/public/show-page3.png" alt="project 3" />
                <h3>Project name</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic saepe nesciunt accusamus reiciendis.</p>
                <section className="section--info">
                  <article>
                    <p>Built in</p>
                    <div className="tech--list">
                      <ReactIcon />
                    </div>
                  </article>

                  <article>
                    <p>See code</p>
                    <div className="tech--list">
                      <a href="https://github.com/TizianoMontenegro/DotDager" target='_blank'><GithubIconLight /></a>
                    </div>
                  </article>

                  <article>
                    <p>See web</p>
                    <div className="tech--list">
                      <a href="https://dot-dager-zeta.vercel.app/" target='_blank'><OpenWebIconLight /></a>
                    </div>
                  </article>
                  
                </section>
              </article>
            </section>
          </article>

          <div className="divisor"></div>

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

import "./Header.css"
import { GithubIconDark, LinkedinIcon } from "../../assets/Icons"

export const Header = () => {
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
    </>
  )
}
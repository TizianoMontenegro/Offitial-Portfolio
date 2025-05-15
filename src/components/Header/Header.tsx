import "./Header.css"
import { GithubIconLight, LinkedinIcon } from "../../assets/Icons"

export const Header = () => {
  return (
    <>
      <section className="header-landscape">

        <article className='header__container'>

          <div className="header__info">
            <h1 className="header__title">Tiziano Montenegro</h1>
            <h2 className="header__subtitle">Software Developer</h2>

            <div className="header__contacts">
              <a href="#"><GithubIconLight /></a>
              <a href="#"><LinkedinIcon /></a>
            </div>
          </div>

          {/* <div className="header__image">
            <img src="https://i.pinimg.com/1200x/61/74/a7/6174a7dd6633dbee637d08bf9ea160a0.jpg" alt="" />
          </div> */}

        </article>

      </section>
    </>
  )
}
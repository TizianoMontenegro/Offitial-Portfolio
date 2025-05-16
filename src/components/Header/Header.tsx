import "./Header.css"
import { GithubIconLight, LinkedinIcon } from "../../assets/Icons"

import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export const Header = () => {

  useGSAP(() => {
    gsap.from(".wave", {
      scrollTrigger: {
        trigger: ".header-landscape",
        // toggleActions: "play pause restart none",
        toggleActions: "play none none none",
      },
      // opacity: 0,
      scale: 2,
      duration: 5,
      ease: "power3.out"
    })

    gsap.from([".header__title",".header__subtitle",".header__contacts"], {
      scrollTrigger: {
        trigger: ".header-landscape",
        // toggleActions: "play pause restart none",
        toggleActions: "play none none none",
      },
      opacity: 0,
      // scale: 1.6,
      duration: 3,
      ease: "power3.in",
      stagger: .1
    })
  })

  return (
    <>
      <section className="header-landscape">
    
        <div className="wave"></div>


        <article className='header__container'>

          <div className="header__info">
            <h1 className="header__title">Tiziano Montenegro</h1>
            <h2 className="header__subtitle">Software Developer</h2>

            <div className="header__contacts">
              <a href="#"><GithubIconLight /></a>
              <a href="#"><LinkedinIcon /></a>
            </div>
          </div>

        </article>

      </section>
    </>
  )
}
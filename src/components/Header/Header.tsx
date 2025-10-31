import "./Header.css"
import { GithubIconLight, LinkedinIcon } from "../../assets/"

import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export const Header = () => {
  // get screen width 
  const screenWidth = window.innerWidth;

  useGSAP(() => {
    
    if (screenWidth > 600) {

      gsap.from([".header__title", ".header__subtitle", ".header__contacts"], {
        scrollTrigger: {
          trigger: ".header-landscape",
          // toggleActions: "play pause restart none",
          toggleActions: "play none none none",
        },
        opacity: 0,
        // scale: 1.6,
        duration: .1,
        ease: "power3.in",
        stagger: .1,
        y: -20,
      })

      gsap.from(".header__description p", {
        scrollTrigger: {
          trigger: ".header-landscape",
          toggleActions: "play none none none",
        },
        opacity: 0,
        duration: .1,
        delay: .1,
        ease: "power3.in",
        stagger: .1,
        x: -20,
      })

      gsap.from(".header__checkpoints a", {
        scrollTrigger: {
          trigger: ".header-landscape",
          toggleActions: "play none none none",
        },
        opacity: 0,
        duration: .1,
        delay: .1,
        ease: "power3.in",
        stagger: .1,
        x: 20,
      })

    } 
    else {

      gsap.from([".header__title", ".header__subtitle"], {
        scrollTrigger: {
          trigger: ".header-landscape",
          // toggleActions: "play pause restart none",
          toggleActions: "play none none none",
        },
        opacity: 0,
        // scale: 1.6,
        duration: .1,
        ease: "power3.in",
        stagger: .1,
        x: -20
      })

      gsap.from(".header__description p", {
        scrollTrigger: {
          trigger: ".header-landscape",
          toggleActions: "play none none none",
        },
        opacity: 0,
        duration: .1,
        delay: .1,
        ease: "power3.in",
        stagger: .1,
        x: -20
      })

      gsap.from(".header__contacts", {
        scrollTrigger: {
          trigger: ".header-landscape",
          toggleActions: "play none none none",
        },
        opacity: 0,
        duration: .1,
        delay: .2,
        ease: "power3.in",
        stagger: .1,
        x: -20
      })

      gsap.from(".header__checkpoints a", {
        scrollTrigger: {
          trigger: ".header-landscape",
          toggleActions: "play none none none",
        },
        opacity: 0,
        duration: .1,
        delay: .2,
        ease: "power3.in",
        stagger: .1,
        x: -20
      })
      
    }

  })

  return (
    <>
      <section className="header-landscape">

        <svg className="svg" xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' ><rect fill='#ffffff' width='24' height='24' /><defs><linearGradient id='a' x1='0' x2='0' y1='0' y2='1'><stop offset='0' stop-color='#a00' /><stop offset='1' stop-color='#111' /></linearGradient></defs><pattern id='b' width='42' height='42' patternUnits='userSpaceOnUse'><circle fill='#ffffff' cx='21' cy='21' r='21' /></pattern><rect width='100%' height='100%' fill='url(#a)' /><rect width='100%' height='100%' fill='url(#b)' fill-opacity='0.1' /></svg>

        <article className='header__container'>

          <section className="header__info">
            <h1 className="header__title">TIZIANO MONTENEGRO</h1>
            <h2 className="header__subtitle">AI Developer & Fullstack Web Developer</h2>

            <article className="header__contacts-checkpoints__wrapper">
              <div className="header__description">
                <p>
                  <span className="mark">I don’t just train models — I make them useful.</span> From CNNs to full-stack apps, I turn AI experiments into <span className="mark">working products people can actually use.</span>
                </p>

                <p>
                  I'm looking for combining complete <span className="mark">Full Stack Websites</span> with <span className="mark">AI integrations.</span>
                </p>
              </div>

              <section className="header__contacts">
                <a href="https://github.com/TizianoMontenegro" target="_blank">
                  <GithubIconLight weight={127.81 / 3} />
                </a>
                <a href="https://www.linkedin.com/in/tizianomontenegro/" target="_blank">
                  <LinkedinIcon weight={127.81 / 3} />
                </a>
                <a className="hidden" href="https://www.linkedin.com/in/tizianomontenegro/" target="_blank">
                  <LinkedinIcon weight={127.81 / 3} />
                </a>
              </section>

              <section className="header__checkpoints">
                <a href="#">Experience</a>
                <a href="#">Education</a>
                <a href="#">About me</a>
              </section>
            </article>
          </section>

        </article>

      </section>
    </>
  )
}
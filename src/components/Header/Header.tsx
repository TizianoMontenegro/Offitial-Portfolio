import "./Header.css"
import { GithubIconLight, LinkedinIcon } from "../../assets/Icons"

import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export const Header = () => {

  useGSAP(() => {
    // Uncomment this line, and all dependencies of to enable wave animation
    // gsap.from(".wave", {
    //   scrollTrigger: {
    //     trigger: ".header-landscape",
    //     // toggleActions: "play pause restart none",
    //     toggleActions: "play none none none",
    //   },
    //   // opacity: 0,
    //   scale: 2,
    //   duration: 1,
    //   ease: "power3.out"
    // })

    gsap.from([".header__title",".header__subtitle",".header__contacts"], {
      scrollTrigger: {
        trigger: ".header-landscape",
        // toggleActions: "play pause restart none",
        toggleActions: "play none none none",
      },
      opacity: 0,
      // scale: 1.6,
      duration: .2,
      ease: "power3.in",
      stagger: .1
    })
  })

  return (
    <>
      <section className="header-landscape">
    
        {/* <div className="wave"></div> */}
        
        <svg className="svg" xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' ><rect fill='#ffffff' width='24' height='24'/><defs><linearGradient id='a' x1='0' x2='0' y1='0' y2='1'><stop offset='0'  stop-color='#a00'/><stop offset='1'  stop-color='#111'/></linearGradient></defs><pattern id='b'  width='42' height='42' patternUnits='userSpaceOnUse'><circle  fill='#ffffff' cx='21' cy='21' r='21'/></pattern><rect width='100%' height='100%' fill='url(#a)'/><rect width='100%' height='100%' fill='url(#b)' fill-opacity='0.1'/></svg>

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
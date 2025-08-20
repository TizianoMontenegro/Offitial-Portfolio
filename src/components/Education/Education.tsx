import "./Education.css"

import gsap from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export const Education = () => {
  useGSAP(() => {
    const certs = gsap.utils.toArray(".edu__certificate")
    gsap.to(certs, {
      x: `-${certs.length - 1}00%`,
      ease: "none",
      scrollTrigger: {
        trigger: ".edu__certificates",
        pin: true,
        start: "top top",
        scrub: 1,
        // markers: true,
        snap: {
          snapTo: 1 / (certs.length - 1),
          inertia: false,
          duration: {min: 0.1, max: 0.1}
		    },

      }
    })
    
    gsap.from(".edu__certificate--mobile", {
      scrollTrigger: ".edu__certificate--mobile",
      scale: 1.3,
      duration: .4,
      opacity: .5,
      stagger: .1,
    })
  })

  // const onCertificateClick = null

  return (
    <div className="edu-wrapper">
      <section className="edu">
        <h2 className="edu__title">Certifications</h2>

        <article className="edu__certificates">

            <a href="https://certificates.cs50.io/7bb466dd-c10b-4769-bf63-4c885013b122.pdf?size=letter" target="_blank" className="edu__certificate" title="CS50 Computer Science Harvard Certificate">
              <img loading="lazy" src="/CS50x.png" alt="CS50 Harvard Course Certificate" />
            </a>

            <a href="https://www.udemy.com/certificate/UC-35d8e60e-b268-4c04-9f90-f9fb3e614390/" target="_blank" className="edu__certificate" title="JavaScript Master Udemy Certificate">
              <img loading="lazy" src="/UC-35d8e60e-b268-4c04-9f90-f9fb3e614390.jpg" alt="JavaScript Master Course Certificate" />
            </a>

            <a href="https://www.udemy.com/certificate/UC-412cea72-9b35-427b-8019-cda1f36dc946/" target="_blank" className="edu__certificate" title="CSS Master Udemy Certificate">
              <img loading="lazy" src="/UC-412cea72-9b35-427b-8019-cda1f36dc946.jpg" alt="CSS Master Course Certificate" />
            </a>
          
        </article>

        <article className="edu__certificates--mobile">

            <div className="edu__certificate--mobile">
              <h4>CS50 Computer Science Harvard Certificate</h4>
              <a href="https://certificates.cs50.io/7bb466dd-c10b-4769-bf63-4c885013b122.pdf?size=letter" target="_blank" rel="noopener noreferrer">Link of certificate</a>
              <img loading="lazy" src="/CS50x.png" alt="CS50 Harvard Course Certificate" />
            </div>

            <div className="edu__certificate--mobile">
              <h4>JavaScript Master Udemy Certificate</h4>
              <a href="https://www.udemy.com/certificate/UC-35d8e60e-b268-4c04-9f90-f9fb3e614390/" target="_blank" rel="noopener noreferrer">Link of certificate</a>
              <img loading="lazy" src="/UC-35d8e60e-b268-4c04-9f90-f9fb3e614390.jpg" alt="JavaScript Master Course Certificate" />
            </div>

            <div className="edu__certificate--mobile">
              <h4>CSS Master Udemy Certificate</h4>
              <a href="https://www.udemy.com/certificate/UC-412cea72-9b35-427b-8019-cda1f36dc946/" target="_blank" rel="noopener noreferrer">Link of certificate</a>
              <img loading="lazy" src="/UC-412cea72-9b35-427b-8019-cda1f36dc946.jpg" alt="CSS Master Course Certificate" />
            </div>
          
        </article>
      </section>
    </div>
  )
}
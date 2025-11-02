import "./Education.css"

// import gsap from "gsap/gsap-core"
// import { useGSAP } from "@gsap/react"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(useGSAP, ScrollTrigger)

export const Education = () => {
  // useGSAP(() => {
  //   const certs = gsap.utils.toArray(".edu__certificate")
  //   gsap.to(certs, {
  //     x: `-${certs.length - 1}00%`,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".edu__certificates",
  //       pin: true,
  //       start: "top top",
  //       scrub: 1,
  //       // markers: true,
  //       snap: {
  //         snapTo: 1 / (certs.length - 1),
  //         inertia: false,
  //         duration: {min: 0.1, max: 0.1}
	// 	    },

  //     }
  //   })
    
  //   gsap.from(".edu__certificate--mobile", {
  //     scrollTrigger: ".edu__certificate--mobile",
  //     scale: 1.3,
  //     duration: .4,
  //     opacity: .5,
  //     stagger: .1,
  //   })
  // })

  // const onCertificateClick = null

  return (
    <div id="education-page" className="edu-wrapper">
      <section className="edu">
        <h2 className="edu__title">Certifications</h2>

        {/* <article className="edu__certificates">

            <a href="https://certificates.cs50.io/7bb466dd-c10b-4769-bf63-4c885013b122.pdf?size=letter" target="_blank" className="edu__certificate" title="CS50 Computer Science Harvard Certificate">
              <img loading="lazy" src="https://i.postimg.cc/50bVWhMr/CS50x-min.png" alt="CS50 Harvard Course Certificate" />
            </a>

            <a href="https://www.udemy.com/certificate/UC-35d8e60e-b268-4c04-9f90-f9fb3e614390/" target="_blank" className="edu__certificate" title="JavaScript Master Udemy Certificate">
              <img loading="lazy" src="https://i.postimg.cc/9fP6bLqY/UC-35d8e60e-b268-4c04-9f90-f9fb3e614390-min.jpg" alt="JavaScript Master Course Certificate" />
            </a>

            <a href="https://certificates.cs50.io/7bb466dd-c10b-4769-bf63-4c885013b122.pdf?size=letter" target="_blank" className="edu__certificate" title="CS50 Computer Science Harvard Certificate">
              <img loading="lazy" src="https://i.postimg.cc/50bVWhMr/CS50x-min.png" alt="CS50 Harvard Course Certificate" />
            </a>

            <a href="https://www.udemy.com/certificate/UC-35d8e60e-b268-4c04-9f90-f9fb3e614390/" target="_blank" className="edu__certificate" title="JavaScript Master Udemy Certificate">
              <img loading="lazy" src="https://i.postimg.cc/9fP6bLqY/UC-35d8e60e-b268-4c04-9f90-f9fb3e614390-min.jpg" alt="JavaScript Master Course Certificate" />
            </a>

            <a href="https://www.udemy.com/certificate/UC-412cea72-9b35-427b-8019-cda1f36dc946/" target="_blank" className="edu__certificate" title="CSS Master Udemy Certificate">
              <img loading="lazy" src="https://i.postimg.cc/HxBfDjzJ/UC-412cea72-9b35-427b-8019-cda1f36dc946-min.jpg" alt="CSS Master Course Certificate" />
            </a>
          
        </article> */}

        <article className="edu__certificates--mobile">

            <div className="edu__certificate--mobile">
              <h4>CS50 Databases with SQL</h4>
              <a href="https://certificates.cs50.io/592e207d-fc25-4497-9073-4aa12aeca9c6.pdf?size=letter" target="_blank" rel="noopener noreferrer">Link of certificate</a>
              <img loading="lazy" src="https://i.postimg.cc/8zWqVX8v/CS50-SQL.png" alt="CS50 Harvard Databases with SQL Course Certificate" />
            </div>

            <div className="edu__certificate--mobile">
              <h4>CS50 Artificial Intelligence</h4>
              <a href="https://certificates.cs50.io/e7bf8cba-c7d7-4a4f-bc87-a87c23cda397.pdf?size=letter" target="_blank" rel="noopener noreferrer">Link of certificate</a>
              <img loading="lazy" src="https://i.postimg.cc/L4C3Vvqd/CS50-AI-min.png" alt="CS50 Harvard Artificial Intelligence Course Certificate" />
            </div>

            <div className="edu__certificate--mobile">
              <h4>CS50 Programming with Python</h4>
              <a href="https://certificates.cs50.io/393d42d4-3530-41ae-8af1-4c5e5377cdf1.pdf?size=letter" target="_blank" rel="noopener noreferrer">Link of certificate</a>
              <img loading="lazy" src="https://i.postimg.cc/kGpNXXrM/CS50-P-min.png" alt="CS50 Harvard Programming with Python Course Certificate" />
            </div>

            <div className="edu__certificate--mobile">
              <h4>CSS Master Udemy Certificate</h4>
              <a href="https://www.udemy.com/certificate/UC-412cea72-9b35-427b-8019-cda1f36dc946/" target="_blank" rel="noopener noreferrer">Link of certificate</a>
              <img loading="lazy" src="https://i.postimg.cc/HxBfDjzJ/UC-412cea72-9b35-427b-8019-cda1f36dc946-min.jpg" alt="CSS Master Course Certificate" />
            </div>

            <div className="edu__certificate--mobile">
              <h4>CS50 Computer Science Harvard Certificate</h4>
              <a href="https://certificates.cs50.io/7bb466dd-c10b-4769-bf63-4c885013b122.pdf?size=letter" target="_blank" rel="noopener noreferrer">Link of certificate</a>
              <img loading="lazy" src="https://i.postimg.cc/50bVWhMr/CS50x-min.png" alt="CS50 Harvard Computer Science Course Certificate" />
            </div>

            <div className="edu__certificate--mobile">
              <h4>Scikit-Learn for Beginners Simplilearn Certificate</h4>
              <a href="https://certificates.simplicdn.net/share/9019235_93951051758414971759.pdf" target="_blank" rel="noopener noreferrer">Link of certificate</a>
              <img loading="lazy" src="https://i.postimg.cc/dtgzpPf2/9019235-93951051758414970139.png" alt="Simplilearn Scikit-Learn for Beginners Course Certificate" />
            </div>

            <div className="edu__certificate--mobile">
              <h4>JavaScript Master Udemy Certificate</h4>
              <a href="https://www.udemy.com/certificate/UC-35d8e60e-b268-4c04-9f90-f9fb3e614390/" target="_blank" rel="noopener noreferrer">Link of certificate</a>
              <img loading="lazy" src="https://i.postimg.cc/9fP6bLqY/UC-35d8e60e-b268-4c04-9f90-f9fb3e614390-min.jpg" alt="JavaScript Master Course Certificate" />
            </div>
          
        </article>
      </section>
    </div>
  )
}
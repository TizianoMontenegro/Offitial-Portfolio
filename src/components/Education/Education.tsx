import "./Education.css"
import { certificatesData } from "./certificatesData"

export const Education = () => {

  return (
    <div id="education-page" className="edu-wrapper">
      
      <div className="custom-shape-divider-top-1765804317">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
        </svg>
      </div>

      <section className="edu">
        <h2 className="edu__title">Certifications</h2>

        <article className="edu__certificates">

          {certificatesData.map((certificate, index) => {
            return (
              <div key={index} className="edu__certificate">
                <img loading="lazy" src={certificate.imageUrl} alt={certificate.imageAlt} />
                <a className="edu__certificate--verify" href={certificate.documentUrl} target="_blank" rel="noopener noreferrer">Click Here to Verify</a>
                <div className="edu__certificate--banner">
                  <h4>{certificate.title}</h4>
                  <p>{certificate.description}</p>
                  <ul className="edu_certificate--techs">
                    {certificate.techs.map((tech, tech_i) => {
                      return (<li key={tech_i} className="edu_certificate--tech">
                        {tech}
                      </li>)
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
          
        </article>
      </section>
    </div>
  )
}
import "./Education.css"
import { certificatesData } from "./certificatesData"

export const Education = () => {

  return (
    <div id="education-page" className="edu-wrapper">
      <section className="edu">
        <h2 className="edu__title">Certifications</h2>

        <article className="edu__certificates--mobile">

          {certificatesData.map((certificate, index) => {
            return (
              <div key={index} className="edu__certificate--mobile">
                {/* <h4>{certificate.title}</h4> */}
                {/* <a className="edu__certificate--verify" href={certificate.documentUrl} target="_blank" rel="noopener noreferrer"> */}
                  <img loading="lazy" src={certificate.imageUrl} alt={certificate.imageAlt} />
                {/* </a> */}
                <a className="edu__certificate--verify--mobile" href={certificate.documentUrl} target="_blank" rel="noopener noreferrer">Click Here to Verify</a>
                <div className="edu__certificate--banner">
                  <h4>{certificate.title}</h4>
                  <p>{certificate.description}</p>
                  {/* <p>{certificate.description}</p> */}
                </div>
              </div>
            )
          })}
          
        </article>
      </section>
    </div>
  )
}
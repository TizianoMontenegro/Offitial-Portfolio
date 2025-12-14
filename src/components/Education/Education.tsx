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
                <h4>{certificate.title}</h4>
                <a href={certificate.documentUrl} target="_blank" rel="noopener noreferrer">Link of certificate</a>
                <img loading="lazy" src={certificate.imageUrl} alt={certificate.imageAlt} />
              </div>
            )
          })}
          
        </article>
      </section>
    </div>
  )
}
// import { GithubIconLight, OpenWebIconLight } from "@/assets"
import "./ProjectCard.css"
import { ReactNode } from "react"

interface Params {
  projectTitle: string
  projectDescription: string
  projectImageUrl: string
  builtInTechsIcons: ReactNode,
  githubSourceCode: string,
  webProjectUrl: string
}

export const ProjectCard = ({
  // projectTitle,
  // projectDescription,
  projectImageUrl, 
  // builtInTechsIcons,
  // githubSourceCode,
  // webProjectUrl
}: Params) => {
  return (

    <article className="main__project">
      <img src={projectImageUrl} alt="project image overview" />
      {/* <h3>{ projectTitle }</h3>
      <p>{ projectDescription }</p> */}
      {/* <section className="section--info">

        <article>
          <p>Built in</p>
          <div className="tech--list">
            { builtInTechsIcons }
          </div>
        </article>

        <article>
          <p>See code</p>
          <div className="tech--list">
            <a href={githubSourceCode} target='_blank'><GithubIconLight /></a>
          </div>
        </article>

        <article>
          <p>See web</p>
          <div className="tech--list">
            <a href={webProjectUrl} target='_blank'><OpenWebIconLight /></a>
          </div>
        </article>

      </section> */}
    </article>
  )
}
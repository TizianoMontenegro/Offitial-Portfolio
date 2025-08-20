import "./ProjectCard.css"

interface Params {
  projectImageUrl?: string
  projectTitle?: string
}

export const ProjectCard = ({projectImageUrl, projectTitle}: Params) => {
  if(projectImageUrl) {
    return (
      <article className="main__project">
        <img loading="lazy" src={projectImageUrl} alt="project image overview" />
      </article>
    )
  } else if(projectTitle) {
    return (
      <article className="main__project">
        <span>{projectTitle}</span>
      </article>
    )
  } else {
    throw Error("ProjectCard component should contain either a projectImageUrl or a projectTitle")
  }
}


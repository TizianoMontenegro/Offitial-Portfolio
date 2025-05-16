import "./ProjectCard.css"

interface Params {
  projectImageUrl: string
}

export const ProjectCard = ({projectImageUrl}: Params) => {

  return (
    <article className="main__project">
      <img loading="lazy" src={projectImageUrl} alt="project image overview" />
    </article>
  )
}


import "./Projects.css"
import { ProjectsGallery } from "./ProjectsGallery/ProjectsGallery"

export const Projects = () => {
  return (
    <article className="main__projects">
      <h2>Projects</h2>
      <p>Algunos de mis proyectos son:</p>
      
      <ProjectsGallery />
    </article>
  )
}
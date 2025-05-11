import "./Projects.css"
import { ProjectCard } from "./ProjectCard/ProjectCard"
import { useRef, useState } from "react";

interface projectsDataType {
  id: number
  title: string;
  description: string;
  imageUrl: string;
  techs: string[];
  githubUrl: string;
  webUrl?: string;
}

const projectsData: projectsDataType[] = [
  {
    id: 1,
    title: "Contacts",
    description: "This is my first Full-Stack web app. Built in Flask for the backend, SQLAlchemy with SQLite for the connection with the database, and React.js for the frontend.",
    imageUrl: "/public/show-page1.png",
    techs: ["python","sql","react"],
    githubUrl: "https://github.com/TizianoMontenegro/Contacts",
    webUrl: "https://contacts-t13mhr3e2-tiziano-montenegros-projects.vercel.app"
  },
  {
    id: 2,
    title: "MovieSearch",
    description: "Nice app for search movies. Use Next.js and make requests to an API to get the movies and content",
    imageUrl: "/public/show-page2.png",
    techs: ["JavaScript","NextJS","React"],
    githubUrl: "https://github.com/TizianoMontenegro/MovieSearch",
    webUrl: "https://movie-search-7suchbven-tiziano-montenegros-projects.vercel.app"
  },
  {
    id: 3,
    title: "DotDager",
    description: "Static website for a contest. I didn't have much time because I found out late. So I make it in two days.",
    imageUrl: "/public/show-page3.png",
    techs: ["react"],
    githubUrl: "https://github.com/TizianoMontenegro/DotDager",
    webUrl: "https://dot-dager-zeta.vercel.app"
  },
]

export const Projects = () => {
  const projectDialogRef = useRef<HTMLDialogElement>(null)
  const [ dialogProjectData, setDialogProjectData ] = useState<projectsDataType>({
    id: 0,
    title: "",
    description: "",
    imageUrl: "",
    techs: [],
    githubUrl: "",
    webUrl: ""
  },)

  const openProjectDialog = (newDialogProjectData: projectsDataType) => {
    projectDialogRef.current?.showModal();

    setDialogProjectData(newDialogProjectData)
  }

  return (
    <article className="main__projects">

      <section className="main__project--list">
  
        {
          projectsData.map((project) => {
            return ( 
              <div key={project.id} onClick={() => openProjectDialog(project)}>
                <ProjectCard projectImageUrl={project.imageUrl}/>
              </div>
            )
          })
        }

      </section>

      {/* <button onClick={openProjectDialog()}>Show Modal</button> */}

      {/* PROJECT MODAL */}
      <dialog ref={projectDialogRef}>
        
        <form id="projectModal" method="dialog">
          <button>x</button>
        </form>

        <img src={dialogProjectData.imageUrl} alt={`${dialogProjectData.title} image`} />
        <h3>{ dialogProjectData.title }</h3>
        <p>{ dialogProjectData.description }</p>
        
        <h4>Techs:</h4>
        <ul>
          {dialogProjectData.techs.map((tech, i) => {
            return <li key={i}>{tech}</li>
          })}
        </ul>

      </dialog>

    </article>
  )
}
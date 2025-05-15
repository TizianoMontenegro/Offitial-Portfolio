import "./Projects.css"
import { ProjectCard } from "./ProjectCard/ProjectCard"
import { projectsDataType } from "@/types";
import { ProjectModal } from "./ProjectModal/ProjectModal";
import { useState } from "react";

import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const projectsData: projectsDataType[] = [
  {
    id: 1,
    title: "Contacts",
    description: "This is my first Full-Stack web app. Built in Flask for the backend, SQLAlchemy with SQLite for the connection with the database, and React.js for the frontend.",
    imageUrl: "/public/show-page1.png",
    imageUrls: ["/public/show-page1.png","/public/show-page2.png","/public/show-page3.png"],
    techs: ["python","sql","react"],
    githubUrl: "https://github.com/TizianoMontenegro/Contacts",
    webUrl: "https://contacts-t13mhr3e2-tiziano-montenegros-projects.vercel.app"
  },
  {
    id: 2,
    title: "MovieSearch",
    description: "Nice app for search movies. Use Next.js and make requests to an API to get the movies and content",
    imageUrl: "/public/show-page2.png",
    imageUrls: ["/public/show-page2.png","/public/show-page1.png","/public/show-page3.png"],
    techs: ["JavaScript","NextJS","React"],
    githubUrl: "https://github.com/TizianoMontenegro/MovieSearch",
    webUrl: "https://movie-search-7suchbven-tiziano-montenegros-projects.vercel.app"
  },
  {
    id: 3,
    title: "DotDager",
    description: "Static website for a contest. I didn't have much time because I found out late. So I make it in two days.",
    imageUrl: "/public/show-page3.png",
    imageUrls: ["/public/show-page3.png","/public/show-page2.png","/public/show-page1.png"],
    techs: ["react"],
    githubUrl: "https://github.com/TizianoMontenegro/DotDager",
    webUrl: "https://dot-dager-zeta.vercel.app"
  },
]

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<projectsDataType | null>(null);

  const onCloseModal = () => {
    setSelectedProject(null);
  };


  useGSAP(() => {
    gsap.from(".main__project--list div", {
      scrollTrigger: {
        trigger: ".main__project--list div",
        toggleActions: "restart none none none"
      },

      x: -100,
      opacity: 0,
      stagger: .1
    })
  }, {scope: ".main"})

  return (
    <article className="main__projects">

      {/* PROJECTS GALLERY */}
      <section className="main__project--list">
  
        {
          projectsData.map((project) => {
            return ( 
              <div key={project.id} onClick={() => setSelectedProject(project)}>
                <ProjectCard projectImageUrl={project.imageUrl}/>
              </div>
            )
          })
        }

      </section>

      {/* PROJECT MODAL */}
      <ProjectModal projectData={selectedProject} onClose={onCloseModal} />
      
    </article>
  )
}
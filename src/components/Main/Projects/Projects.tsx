import "./Projects.css"

import { projectsDataType } from "@/types";
import { projectsData } from "./projectsData";

import { ProjectModal } from "./ProjectModal/ProjectModal";
import { ProjectCard } from "./ProjectCard/ProjectCard";

import { useState } from "react";
import { useTechsContext } from "@/contexts/techs.context";

// GSAP
import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<projectsDataType | null>(null);
  // const [projects, setProjects] = useState<projectsDataType[]>(projectsData)
  const {techs: techsSelected} = useTechsContext()

  const onCloseModal = () => {
    setSelectedProject(null);
  };


  const filteredProjects = projectsData.filter(project => {
    // Show all projects if no techs are selected
    if (techsSelected!.length === 0) return true;
    
    // Check if project contains all selected techs (case-insensitive)
    return techsSelected!.every(selectedTech => 
      project.techs.some(projectTech => 
        projectTech.toLowerCase() === selectedTech.toLowerCase()
      )
    );
  });

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
  })

  return (
    <article className="main__projects">

      {/* PROJECTS GALLERY */}
      <section className="main__project--list">
  
        { filteredProjects ?
          filteredProjects.map((project) => {
            // console.log(filteredProjects)
            return ( 
              <div key={project.id} onClick={() => setSelectedProject(project)}>
                <ProjectCard projectImageUrl={project.imageUrl}/>
              </div>
            )
          }) : <p>No projects found</p>
        }

      </section>

      {/* PROJECT MODAL */}
      <ProjectModal projectData={selectedProject} onClose={onCloseModal} />
      
    </article>
  )
}
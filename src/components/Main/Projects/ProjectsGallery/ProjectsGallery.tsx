import { NextjsIconLight, PythonIcon, ReactIcon, SqlIcon } from "@/assets"
import { ProjectCard } from "./ProjectCard/ProjectCard"
import "./ProjectsGallery.css"

export const ProjectsGallery = () => {
  return (
    <section className="main__project--list">

      <ProjectCard
        projectTitle="Contacts"
        projectDescription="This is my first Full-Stack web app. Built in Flask for the backend, SQLAlchemy with SQLite for the connection with the database, and React.js for the frontend."
        projectImageUrl="/public/show-page1.png"
        builtInTechsIcons={
          <>
            <PythonIcon />
            <SqlIcon />
            <ReactIcon />
          </>
        }
        githubSourceCode="https://github.com/TizianoMontenegro/Contacts"
        webProjectUrl="https://contacts-t13mhr3e2-tiziano-montenegros-projects.vercel.app/"
      />

      <ProjectCard
        projectTitle="MovieSearch"
        projectDescription="Nice app for search movies. Use Next.js and make requests to an API to get the movies and content"
        projectImageUrl="/public/show-page2.png"
        builtInTechsIcons={
          <>
            <NextjsIconLight />
          </>
        }
        githubSourceCode="https://github.com/TizianoMontenegro/MovieSearch"
        webProjectUrl="https://movie-search-7suchbven-tiziano-montenegros-projects.vercel.app/"
      />

      <ProjectCard
        projectTitle="DotDager"
        projectDescription="Static website for a contest. I didn't have much time because I found out late. So I make it in two days."
        projectImageUrl="/public/show-page3.png"
        builtInTechsIcons={
          <>
            <ReactIcon />
          </>
        }
        githubSourceCode="https://github.com/TizianoMontenegro/DotDager"
        webProjectUrl="https://dot-dager-zeta.vercel.app/"
      />
    </section>
  )
}
import "./ProjectModal.css"
import { useEffect, useRef, useState } from "react";
import { projectsDataType } from "@/types";

type ProjectModalProps = {
  projectData: projectsDataType | null;
  onClose: () => void;
};

export const ProjectModal = ({projectData, onClose}: ProjectModalProps) => {
  const projectDialogRef = useRef<HTMLDialogElement>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  useEffect(() => {
    if (projectData) {
      projectDialogRef.current?.showModal()
      setCurrentImageIndex(0)
    } else {
      projectDialogRef.current?.close()
    }    
  },[projectData])

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      (prev + 1) % (projectData?.imageUrls?.length || 1)
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      (prev - 1 + (projectData?.imageUrls?.length || 1)) % (projectData?.imageUrls?.length || 1)
    );
  };

  if (!projectData) return null;

  return (
    <dialog className="projects-modal" ref={projectDialogRef}>

      <form className="modal-closer" method="dialog" onSubmit={onClose}>
        <button>x</button>
      </form>


      <div className="slider">

        <button onClick={handlePrevImage} className="arrow-button arrow-button--left">←</button>

        <div className="images-container">
          {projectData.imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`${projectData.title} image ${index + 1}`}
              style={{ display: index === currentImageIndex ? 'block' : 'none' }}
            />
          ))}
          {/* <img src={projectData?.imageUrl} alt={`${projectData?.title} image`} /> */}
        </div>

        <button onClick={handleNextImage} className="arrow-button arrow-button--right">→</button>

      </div>

      {/* <img src={projectData?.imageUrl} alt={`${projectData?.title} image`} /> */}

      <h3>{projectData?.title}</h3>
      <p>{projectData?.description}</p>

      <h4>Techs:</h4>
      <ul>
        {projectData?.techs.map((tech, i) => {
          return <li key={i}>{tech}</li>
        })}
      </ul>

    </dialog>
  )
}
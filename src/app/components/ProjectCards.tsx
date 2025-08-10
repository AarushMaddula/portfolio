import ProjectCard from "./ProjectCard";

type ProjectType = {type: "all" | "programming" | "engineering"};

export default function ProjectCards({type} : ProjectType) {
  const projects = getProjectsOfType(type);

  return (
    <>
        {projects.map((project) => {
          return (
            <ProjectCard 
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              tags={project.tags}
            />
          )
        })}
    </>
  )
}
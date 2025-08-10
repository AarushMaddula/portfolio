'use client';

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

type ProjectType = "all" | "programming" | "engineering";

export default function ProjectSection() {
  const [ type, setType ] = useState<ProjectType>("all");
  const [ projects, setProjects ] = useState<any[]>([]);

  useEffect(() => {
     
  }, [type])

  return (
    <section id="projects" className="bg-[url('/low-poly-grid-haikei.svg')]">
      <h1>Projects</h1>
      <div>
        <button onClick={() => setType("all")}>All</button>
        <button onClick={() => setType("programming")}>Programming</button>
        <button onClick={() => setType("engineering")}>Engineering</button>
      </div>

      <div>
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
      </div>
    </section>
  );
}

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import fs from "fs";

type ProjectType = "all" | "programming" | "engineering";

async function getProjectList(type : ProjectType) {
  
}

function ProjectSection() {
  const [ type, setType ] = useState<ProjectType>("all");

  const projects = [""];

  return (
    <section id="projects" className="bg-[url('/low-poly-grid-haikei.svg')]">
      <h1>Projects</h1>
      <div>
        <button onClick={() => setType("all")}>All</button>
        <button onClick={() => setType("programming")}>Programming</button>
        <button onClick={() => setType("engineering")}>Engineering</button>
      </div>

      <div>
        {/* {projects.map((project) => {
          return (
            <ProjectCard />
          )
        })} */}
      </div>
    </section>
  )
}

export default ProjectSection;
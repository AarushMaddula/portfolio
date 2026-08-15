"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

type ProjectType =  "web" | "programming" | "engineering" | "featured";
type Project = {
  title: string;
  description: string;
  thumbnail: string;
  type: ProjectType[];
  tags: string[];
  path: string;
  github: string;
  website: string;
};

function getFilteredProjects(type: ProjectType, isFeatured: boolean, data: Project[]) {
  return data.filter((project: Project) => project.type.includes(type) && (!isFeatured || project.type.includes("featured")));
}

export default function ProjectSection({ projectsData }) {
  const [type, setType] = useState<ProjectType>("engineering");
  const [isFeatured, setFeatured] = useState<boolean>(true);

  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  
  const projects = getFilteredProjects(type, isFeatured, projectsData);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const firstProjectIndex = Math.max(0, (page - 1) * itemsPerPage);
  const afterLastProjectIndex = Math.min(page * itemsPerPage, projects.length);
  const currentProjects = projects.slice(firstProjectIndex, afterLastProjectIndex);

  return (
    <section id="projects" className="bg-dark-2 py-8 px-8 max-w-7xl mx-auto">
      <h1 className="inline-block text-white font-semibold text-4xl mb-4">Projects</h1>
      <div className="flex justify-between flex-wrap mb-8 gap-4">
        <div className="text-white flex flex-wrap gap-4">
          <button
            onClick={() => setFeatured(!isFeatured)}
            className={`px-4 py-2 rounded-md hover:bg-accent/70 transition ${isFeatured ? "bg-accent" : "bg-light"}`}
            >
            Featured
          </button>
          <span className="w-px mx-2 bg-white"></span>
          <button
            onClick={() => setType("engineering")}
            className={`px-4 py-2 rounded-md hover:bg-accent/70 transition ${type === "engineering" ? "bg-accent" : "bg-light"}`}
          >
            Engineering
          </button>
          <button
            onClick={() => setType("web")}
            className={`px-4 py-2 rounded-md hover:bg-accent/70 transition ${type === "web" ? "bg-accent" : "bg-light"}`}
            >
            Web Dev
          </button>
          <button
            onClick={() => setType("programming")}
            className={`px-4 py-2 rounded-md hover:bg-accent/70 transition ${type === "programming" ? "bg-accent" : "bg-light"}`}
          >
            Programming
          </button>
        </div>

        <div className="flex items-center text-white font-semibold">
          <button onClick={() => setPage(Math.max(1, page - 1))} className="w-8 h-8 rounded-md hover:bg-accent/70 transition bg-light">{"<"}</button>
          <div className="w-16 py-2 text-center">{page} of {totalPages}</div>
          <button onClick={() => setPage(Math.min(totalPages, page + 1))} className="w-8 h-8 rounded-md hover:bg-accent/70 transition bg-light">{">"}</button>
        </div>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentProjects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              {...project}
            />
          );
        })}
      </div>
    </section>
  );
}

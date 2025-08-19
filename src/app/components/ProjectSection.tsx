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
  const [isFeatured, setFeatured] = useState<boolean>(false);

  const projects = getFilteredProjects(type, isFeatured, projectsData);

  return (
    <section id="projects" className="bg-dark py-8 px-8 max-w-7xl mx-auto">
      <h1 className="inline-block text-white font-bold text-4xl mb-4">Projects</h1>
      <div className="text-white flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => setFeatured(!isFeatured)}
          className={`px-4 py-2 rounded-md hover:bg-accent/70 transition ${isFeatured ? "bg-accent" : "bg-normal"}`}
          >
          Featured
        </button>
        <span className="w-px mx-2 bg-white"></span>
        <button
          onClick={() => setType("engineering")}
          className={`px-4 py-2 rounded-md hover:bg-accent/70 transition ${type === "engineering" ? "bg-accent" : "bg-normal"}`}
        >
          Engineering
        </button>
        <button
          onClick={() => setType("web")}
          className={`px-4 py-2 rounded-md hover:bg-accent/70 transition ${type === "web" ? "bg-accent" : "bg-normal"}`}
          >
          Web Dev
        </button>
        <button
          onClick={() => setType("programming")}
          className={`px-4 py-2 rounded-md hover:bg-accent/70 transition ${type === "programming" ? "bg-accent" : "bg-normal"}`}
        >
          Programming
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => {
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

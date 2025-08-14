"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

type ProjectType = "all" | "programming" | "engineering";
type Project = {
  title: string;
  description: string;
  thumbnail: string;
  type: ProjectType;
  tags: string[];
  path: string;
};

export default function ProjectSection() {
  const [type, setType] = useState<ProjectType>("all");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/projects/projectList.json")
      .then((response) => response.json())
      .then((data) => {
        if (type === "all") {
          setProjects(data);
        } else {
          const filteredProjects = data.filter(
            (project: Project) => project.type === type
          );
          setProjects(filteredProjects);
        }
      });
  }, [type]);

  return (
    <section id="projects" className="bg-dark py-8 px-8 max-w-7xl mx-auto">
      <h1 className="inline-block text-white font-bold text-4xl mb-4">Projects</h1>
      <div className="text-white flex gap-4 mb-8">
        <button
          onClick={() => setType("all")}
          className={`px-4 py-2 rounded-md hover:bg-accent/70 transition ${type === "all" ? "bg-accent" : "bg-normal"}`}
          >
          All
        </button>
        <button
          onClick={() => setType("programming")}
          className={`px-4 py-2 rounded-md hover:bg-accent/70 transition ${type === "programming" ? "bg-accent" : "bg-normal"}`}
        >
          Programming
        </button>
        <button
          onClick={() => setType("engineering")}
          className={`px-4 py-2 rounded-md hover:bg-accent/70 transition ${type === "engineering" ? "bg-accent" : "bg-normal"}`}
        >
          Engineering
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              tags={project.tags}
              path={project.path}
            />
          );
        })}
      </div>
    </section>
  );
}

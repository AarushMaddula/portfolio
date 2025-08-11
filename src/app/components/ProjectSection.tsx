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
    <section id="projects" className="bg-gray-950 py-8 px-16">
      <h1 className="text-white font-bold text-4xl mb-4">Projects</h1>
      <div className="text-white flex gap-4 mb-8">
        <button
          onClick={() => setType("all")}
          className={`px-4 py-2 rounded-md hover:bg-blue-700 transition ${type === "all" ? "bg-blue-900" : "bg-blue-500"}`}
        >
          All
        </button>
        <button
          onClick={() => setType("programming")}
          className={`px-4 py-2 rounded-md hover:bg-blue-700 transition ${type === "programming" ? "bg-blue-900" : "bg-blue-500"}`}
        >
          Programming
        </button>
        <button
          onClick={() => setType("engineering")}
          className={`px-4 py-2 rounded-md hover:bg-blue-700 transition ${type === "engineering" ? "bg-blue-900" : "bg-blue-500"}`}
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
            />
          );
        })}
      </div>
    </section>
  );
}

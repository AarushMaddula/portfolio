"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

type ProjectType = "Web Dev" | "Programming" | "Engineering" | "featured";
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

interface SelectorButtonProps<T> {
  text: string;
  buttonType: T;
  currentType: T;
  selectionType: T;
  onSelect: (value: T) => void;
}

const PROJECT_TYPES: ProjectType[] = ["Engineering", "Web Dev", "Programming"];

function getFilteredProjects(
  type: ProjectType,
  isFeatured: boolean,
  data: Project[],
) {
  return data.filter(
    (project: Project) =>
      project.type.includes(type) &&
      (!isFeatured || project.type.includes("featured")),
  );
}

function SelectorButton<T>({
  text,
  buttonType,
  currentType,
  selectionType,
  onSelect,
}: SelectorButtonProps<T>) {
  return (
    <button
      onClick={() => onSelect(buttonType)}
      className={`px-4 py-2 rounded-md hover:bg-accent/80 transition ${
        currentType === selectionType ? "bg-accent" : "bg-light"
      }`}
    >
      {text}
    </button>
  );
}

export default function ProjectSection({ projectsData }) {
  const [type, setType] = useState<ProjectType>("Engineering");
  const [isFeatured, setFeatured] = useState<boolean>(true);

  const projects = getFilteredProjects(type, isFeatured, projectsData);

  const itemsPerPage = 3;
  const totalPages = Math.max(Math.ceil(projects.length / itemsPerPage), 1);

  const [page, setPage] = useState(1);

  const firstProjectIndex = Math.max(0, (page - 1) * itemsPerPage);
  const afterLastProjectIndex = Math.min(page * itemsPerPage, projects.length);
  const currentProjects = projects.slice(
    firstProjectIndex,
    afterLastProjectIndex,
  );

  useEffect(() => {
    setPage(1);
  }, [type, isFeatured]);

  return (
    <section
      id="projects"
      className="bg-dark-2 py-8 max-w-384 mx-auto min-h-200 2xl:mask-x-from-95%"
    >
      <div className="max-w-7xl px-8 mx-auto">
          <h1 className="inline-block text-white font-semibold text-4xl mb-8">
            Projects
          </h1>
          <div className="flex justify-between flex-wrap mb-8 gap-4">
            <div className="text-white flex flex-wrap gap-4">
              <SelectorButton
                text={"Featured"}
                buttonType={!isFeatured}
                currentType={isFeatured}
                selectionType={true}
                onSelect={setFeatured}
              />
              <span className="w-px mx-2 bg-white"></span>
              {PROJECT_TYPES.map((projectType) => {
                return (
                  <SelectorButton
                    key={projectType}
                    text={projectType}
                    buttonType={projectType}
                    currentType={type}
                    selectionType={projectType}
                    onSelect={setType}
                  />
                );
              })}
            </div>
            <div className="flex items-center text-white font-semibold">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                className="w-8 h-8 rounded-md hover:bg-accent/80 transition bg-light"
              >
                {"<"}
              </button>
              <div className="w-16 py-2 text-center">
                {page} of {totalPages}
              </div>
              <button
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                className="w-8 h-8 rounded-md hover:bg-accent/80 transition bg-light"
              >
                {">"}
              </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentProjects.map((project) => {
            return <ProjectCard key={project.title} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
}

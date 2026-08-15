import Image from "next/image";
import Link from "next/link";
import TextFormatter from "./TextFormatter";

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

function ProjectCard({ title, description, thumbnail, type, tags, path, github, website }: Project) {
  return (
    <div className="rounded-lg border-accent border-0 bg-normal shadow-md flex flex-col justify-between hover:transform hover:scale-[101%] transition-all duration-150 ease-out">
      <div className="flex flex-col">
        <div className="relative w-full aspect-5/3">
          <Image
            src={thumbnail}
            alt=""
            fill
            className="object-cover rounded-t-lg"
          />

          {
            type.includes("featured") && (
              <div className="absolute top-4 right-4 flex gap-2">  
                <div className="px-4 py-2 rounded-lg bg-accent font-medium text-md text-gray-100">
                  Featured
                </div>
              </div>
            )
          }
        </div>

        <div className="pt-4 px-6">
          <h1 className="text-2xl font-semibold mb-3 text-gray-200">{title}</h1>
          <div className="text-sm text-gray-500">
            <TextFormatter text={description} />
          </div>
        </div>
      </div>  

      <div className="flex flex-col gap-3 px-6 pb-4 mt-6">

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            return (
              <div key={tag} className="px-2 py-1 rounded-lg bg-light font-medium text-xs text-gray-100">
                {tag}
              </div>
            );
          })}
        </div>

        <div className="h-px bg-accent/15"></div>

        <div className="flex justify-end gap-1">
          {
            github && (
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 font-medium rounded-md text-white duration-150 hover:bg-accent/50 hover:cursor-pointer"
              >
                <img src="/icons/github-white.svg" alt="view github" className="w-5 h-5" />
              </Link>
            )
          }
          {
            website && (
              <Link
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 font-medium rounded-md text-white duration-150 hover:bg-accent/50 hover:cursor-pointer"
              >
                <img src="/icons/new-tab.svg" alt="view website" className="invert w-5 h-5" />
              </Link>
            )
          }
          {
            path && (
              <Link
                href={path}
                className="px-4 py-2 font-medium border border-accent/20 rounded-md text-white duration-150 hover:bg-accent/50 hover:cursor-pointer"
              >
                View Project
              </Link>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

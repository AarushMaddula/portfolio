import Image from "next/image";
import Link from "next/link";

type ProjectCard = {
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  path: string;
  github: string;
  website: string;
};

function ProjectCard({ title, description, thumbnail, tags, path, github, website }: ProjectCard) {
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
        </div>

        <div className="pt-4 px-6">
          <h1 className="text-2xl font-semibold mb-2 text-gray-200">{title}</h1>
          <div className="text-sm text-gray-500 mb-6">{description}</div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
              return (
                <div key={tag} className="px-2 py-1 rounded-md bg-light font-medium text-sm text-gray-100">
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-1 px-6 pb-4 mt-6">
        {
          github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2 font-medium rounded-md text-white duration-150 hover:bg-accent/50 hover:cursor-pointer"
            >
              <img src="/icons/github-white.svg" alt="view github" className="w-6 h-6" />
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
              <img src="/icons/new-tab.svg" alt="view website" className="invert w-6 h-6" />
            </Link>
          )
        }
        {
          path && (
            <Link
              href={path}
              className="px-4 py-2 font-medium border border-accent rounded-md text-white duration-150 hover:bg-accent/50 hover:cursor-pointer"
            >
              View Project
            </Link>
          )
        }
      </div>
    </div>
  );
}

export default ProjectCard;

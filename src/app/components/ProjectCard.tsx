import Image from "next/image";

type ProjectCard = {
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
};

function ProjectCard({ title, description, thumbnail, tags }: ProjectCard) {
  return (
    <div className="rounded-lg border-sky-700 border-2 bg-slate-900 shadow-md flex flex-col">
      <div className="relative w-full aspect-5/3">
        <Image
          src={thumbnail}
          alt=""
          fill
          className="object-cover rounded-t-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-900 to-transparent"></div>

      </div>
      <div className="p-6 shadow-xl shadow-up-md">
        <h1 className="text-2xl font-semibold mb-2 text-gray-200">{title}</h1>
        <div className="text-gray-500 mb-6">{description}</div>
        <div className="flex gap-4">
          {tags.map((tag) => {
            return (
              <div key={tag} className="px-4 py-2 rounded-md bg-orange-500 font-medium text-gray-100">
                {tag}
              </div>
            );
          })}
      </div>
      </div>
    </div>
  );
}

export default ProjectCard;

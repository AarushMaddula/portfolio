import Image from "next/image";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import educationData from "@/data/education.json";
import experienceData from "@/data/experience.json";

function About() {
  return (
    <section
      id="about-me"
      className="bg-dark py-8 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 overflow-y-clip"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 col-span-1 lg:col-span-2">
        <div className="relative">
          <div className="absolute w-full h-full bg-accent/10 blur-3xl rounded-2xl"></div>
          <div className="relative">
            <h1 className="inline-block text-white font-bold text-4xl mb-6 slide-in">
              About Me!
            </h1>
            <p className="text-muted">
              I’m Aarush Maddula, a developer who loves turning ideas into
              things you can actually use. I’ve built everything from Java games
              (3D Tak, Othello AI) to web projects with Tailwind/Next.js, and
              even hardware experiments like modifying a 3D printer into a
              plotter.
              <br />
              <br />
              I enjoy building tools that are fast, clean, and
              purposeful—whether that means writing efficient code, designing
              intuitive interfaces, or teaching others to code (I’ve volunteered
              at tech camps and help classmates whenever I can).
              <br />
              <br />
              Outside of programming, you’ll probably find me at the gym, on my
              bike, or deep in some new project that I swore I wouldn’t start…
              yet somehow did.
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex justify-center items-center relative w-96 aspect-square rotating-border overflow-hidden rounded-full p-1">
            <div className="relative w-full h-full aspect-square rounded-full">
              <Image
                src={"/profile.jpg"}
                alt=""
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-white mb-6">Education</h2>
        <div className="flex flex-col gap-4">
          {educationData.map((data) => {
            return <EducationCard key={data.title} {...data} />;
          })}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-white mb-6">Experience</h2>
        <div className="flex flex-col gap-4">
          {experienceData.map((data) => {
            return <ExperienceCard key={data.title} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default About;

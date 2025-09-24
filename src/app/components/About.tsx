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
            <h1 className="inline-block text-white font-semibold text-4xl mb-6 slide-in">
              About Me!
            </h1>
            <p className="text-muted">
             Hi! I’m Aarush Maddula, a high school student passionate about engineering, coding, and building cool, challenging projects. I love learning new things, whether it’s learning a new programming language, trying a new software, or experimenting with new tools like 3D printing and laser-cutting. I believe that being curious and eager to tackle unfamiliar challenges is the key to success, so I always try to problem solve through difficult situations while never giving up, knowing the journey will be worth it.
             <br/>
             <br/>
             Outside of coding, you’ll find me biking around my community, lifting at the gym, trying new recipes, or exploring new places around my city. 
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

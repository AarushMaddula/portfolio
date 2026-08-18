import Image from "next/image";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import educationData from "@/data/education.json";
import experienceData from "@/data/experience.json";
import bioData from "@/data/bio.json";
import skillsData from "@/data/skills.json";
import TextFormatter from "./TextFormatter";

function About() {
  return (
    <section
      id="about-me"
      className="py-8 px-8 max-w-7xl mx-auto flex flex-col gap-12 overflow-y-clip"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 mb-4 appear">
        <div className="relative">
          <div className="absolute w-full h-full bg-accent/10 blur-3xl rounded-2xl"></div>
          <div className="relative flex flex-col">
            <h1 className="inline-block text-white font-semibold text-4xl mb-6 slide-in">
              About Me!
            </h1>
            <p className="text-muted">
              <TextFormatter text={bioData.bio}/>
            </p>
          </div>
        </div>
        

        <div>
          <div className="flex justify-center items-center relative w-72 aspect-square rotating-border overflow-hidden rounded-full p-1">
            <div className="relative w-full h-full aspect-square rounded-full">
              <Image
                src={bioData.profile_image_url}
                alt=""
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>

          
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-4 appear">
        {
          skillsData.map(({section_name, skills}) => {
            return (
              <div key={section_name}>
                <h3 className="text-xl font-semibold text-white mb-3">{section_name}</h3>
                <div className="flex flex-wrap gap-2">
                  {
                    skills.map((tag) => {
                      return (
                        <div key={tag} className="px-2 py-1 rounded-lg bg-light font-medium text-xs text-gray-100">
                          {tag}
                        </div>
                      );
                  })}
                </div>
              </div>
            )
          })
        }
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-white mb-6">Education</h2>
        <div className="flex flex-col md:flex-row gap-4">
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

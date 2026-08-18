import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';

import projectsData from "@/data/projectList.json";

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
}


export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <ProjectSection projectsData={projectsData}/>
      <Footer/>
    </>
  );
}

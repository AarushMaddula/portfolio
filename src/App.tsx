import { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <ProjectSection/>
      <Footer/>
    </>
  )
}

export default App;
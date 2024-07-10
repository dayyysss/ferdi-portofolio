import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Home, About, Projects, Contact, StarsCanvas, Footer } from "./components";
import AboutPage from "./components/about/AboutPage";
import ProjectPage from "./components/projects/ProjectsPage";
import ReactFullpage from '@fullpage/react-fullpage';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-hidden'>
        <Routes>
          <Route path="/" element={
            <div>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center overflow-hidden'>
                <Navbar />
                <Home />
              </div>
              <About />
              <Projects />
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
                <Footer />
              </div>
            </div>
          } />
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/projects" element={ <ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

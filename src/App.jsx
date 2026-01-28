import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Home, About, Projects, Contact, StarsCanvas, Footer } from "./components";
import AboutPage from "./components/about/AboutPage";
import ProjectPage from "./components/projects/ProjectsPage";
import FullPageWrapper from "./layouts/FullPageWrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-hidden'>
        <Routes>
          <Route path="/" element={
            <div>
              <Navbar />
              <FullPageWrapper>
                <div className='section bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                  <Home />
                </div>
                <div className='section'>
                  <About />
                </div>
                <div className='section'>
                  <Projects />
                </div>
                <div className='section relative'>
                  <Contact />
                  <StarsCanvas />
                  <Footer />
                </div>
              </FullPageWrapper>
            </div>
          } />
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
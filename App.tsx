
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';
import ProjectPage from "./pages/ProjectPage";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Portfolio />
                <About />
              </>
            }
          />
          {/* Project page */}
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

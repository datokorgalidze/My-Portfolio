// import logo from './logo.svg';
import './App.css';




import React from 'react';
import './App.css';
import Project from './Project';
import Contact from './Contact';
import Skills from './Skills';
import Myimage from './Myimage';


function App() {
  return (
    <div className="App">
      <header>
        <h1 className='name'>DAVID KORGALIDZE </h1>
        <h2 >Portfolio</h2>
      </header>
      <main>
        <section className="section-1">
       
         <Myimage/>
        </section>
        <section className="skills section-2">
          <h2>Skills</h2>
          <Skills/>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <div className="project-list"> 
              <Project/> 
          </div>
        </section>    
       
     </main>
        <footer>
        
            <Contact/>
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </footer>
        </div>
      );
    }

  export default App;
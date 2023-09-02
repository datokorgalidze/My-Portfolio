
import './App.css';

import React from 'react';
import './App.css';
import HomeSection from './HomeSection';
import Project from './Project';
import Contact from './Contact';
import Skills from './Skills';
import Myimage from './Myimage';
import HeaderNav from './HeaderNav';


function App() {
  return (
    <div className="App">
      
      <header>
      <div className='conteiner'>
          <h1 className='name'>DAVID KORGALIDZE </h1>
          <HeaderNav/>
        </div>
      </header>
     
      <main>
        <HomeSection/>
        <section className="section-2" id='about'> 
        <div className='conteiner'>
            <Myimage/>
         </div>
        </section>
        <section className="skills section-3">
        <div className='conteiner'>
            <h2 >Skills</h2>
            <Skills/>
          </div>
        </section>
        <section className="projects" id='myprojekts'>
        <div className='conteiner'>
            <h2 className='projects-title'>Projects</h2>
            <div className="project-list"> 
              <Project/> 
          </div>
          </div>
        </section>    
       
     </main>
        <footer id='contact'>
        <div className='conteiner'>
            <Contact/>
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </div>
          </footer>
         
        </div>
      );
    }

  export default App;

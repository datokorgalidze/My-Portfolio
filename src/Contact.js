

import React from 'react';
import LinkedInImage from './Myimages/LinkedInImage.gif';
import GitHubImage from './Myimages/GitHubImage.gif';
// import './contact.css'; // Import the CSS file for styling

function Contact() {
  return (
   
    <div className="contact">
      
      <div className='contactDescription'><p>I am eager to contribute my skills and learn from experienced professionals in a dynamic work environment. If you're looking for a motivated and dedicated Web Developer, let's connect! </p>  </div>
      <div className='icons'>
          <h2 className='ContactTitle'>Contact</h2>
           <div className="linkediniq">
              <a  href="https://www.linkedin.com/in/dato-korgalidze-b6369a270/" target="_blank" rel="noopener noreferrer"><img src={LinkedInImage} alt="LinkedIn" /></a>
              </div>     
            <p>
              <a href="https://github.com/datokorgalidze"><img src={GitHubImage} alt="GitHub" /></a>
            </p>
            <p>
            <a className='email' href="mailto:d.korgalidze@gmail.com">d.korgalidze@gmail.com</a>

          </p>
         </div>
      </div>
  );
}

export default Contact;


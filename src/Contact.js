// function contact (){
//     return(
//         <div className='contact'>
//         <h2>Contact</h2>
//         <p>Email: example@example.com</p>
//         <p>Phone: 123-456-7890</p>
//         <p>
//           LinkedIn: <a href="https://www.linkedin.com/in/your-profile">Your Profile</a>
//         </p>
//         <p>
//           GitHub: <a href="https://github.com/your-username">Your GitHub</a>
//         </p>
//     </div>
//     )
// }

// export default contact;

import React from 'react';
import LinkedInImage from './Myimages/LinkedInImage.png';
import GitHubImage from './Myimages/GitHubImage.png';
// import './contact.css'; // Import the CSS file for styling

function Contact() {
  return (
   
    <div className="contact">
      
      <div className='contactDescription'><p>I am eager to contribute my skills and learn from experienced professionals in a dynamic work environment. If you're looking for a motivated and dedicated Junior Developer, let's connect! </p>  </div>
      <div className='icons'>
          <h2 className='ContactTitle'>Contact</h2>
           <div className="linkediniq">
              <a  href="https://www.linkedin.com/in/dato-korgalidze-b6369a270/"><img src={LinkedInImage} alt="LinkedIn" /></a>
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


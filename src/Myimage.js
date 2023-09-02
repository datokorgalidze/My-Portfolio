import React from 'react';

import Myimage from './Myimages/myimage.jpg';

function myimage(){
    return(<div className='Description'>
   
    <div className='about'> 
      <h2 className='title-for-about'>About </h2> 
          <p>
            Hello i am Dato Krghalidze,I am very motivated and dedicated web developer with a strong foundation in programming.
            Passionate about creating efficient and user-friendly applications.    
            I became fascinated with web development when I saw how websites
            could combine creativity and functionality to deliver engaging user
            experiences. Web development is an ever-evolving field, and I love
            the challenge of staying current with the latest advancements. I
            regularly invest time in self-study, online courses, and attending
            industry conferences to expand my knowledge and sharpen my skills.
           
        </p>
       
     </div>
     <div class="myimage">
        <img src={Myimage} alt="img"/>
        
    </div>
 </div>)
}


export default myimage;


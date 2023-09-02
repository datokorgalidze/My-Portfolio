import React, { useEffect } from 'react';

function HeaderNav() {
    useEffect(() => {
        function scrollFunction() {
            const navbar = document.querySelector(".navbar");
            if (navbar) {
                if (window.scrollY > 20) {
                    navbar.style.top = "0";
                } else {
                    navbar.style.top = "-50px";
                }
            }
        }

        window.addEventListener("scroll", scrollFunction);
        return () => {
            window.removeEventListener("scroll", scrollFunction);
        };
    }, []);

    return (
      
          <div className="navbar">
              <a href="#home">HOME</a>
              <a href="#about">ABOUT</a>
              <a href="#contact">CONTACT</a>
          
        </div>
    );
}

export default HeaderNav;



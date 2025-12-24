import React, { useEffect, useRef } from 'react';
import Typed from "typed.js";

const Typing = () => {
          const typedRef = useRef(null);
    
      useEffect(() => {
        const typed = new Typed(typedRef.current, {
          strings: ["Web Developer", "Frontend Developer", "JavaScript Developer", "React Developer"],
          typeSpeed: 110,
          backSpeed: 100,
          backDelay: 500,
          loop: true,
        });
    
        // Destroy Typed instance on unmounting
        return () => {
          typed.destroy();
        };
      }, []);
        
    return (

        <span className='text-yellow-600'
          ref={typedRef}
        ></span>
    );
};

export default Typing;
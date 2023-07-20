import React, { useState } from 'react';

const Sub = () => {

  const [isVisible, setIsVisible] = useState(false);
 

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  

  let button;
  

        if(isVisible ){
     button= <button onClick={handleToggle}>Subscribe</button>
        }
        
        
          
      else{
          button= <button onClick={handleToggle}>UnSubscribe</button>
      }
      let paragraph;

      if(isVisible){
        paragraph= <p>heloo this the paragraph using toggle</p>
      }
     
     
    
     return<div>
      {button}
      {paragraph}
      </div> 
     
     
    
  
};

export default Sub;

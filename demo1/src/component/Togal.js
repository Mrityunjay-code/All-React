import React, { useState } from 'react';

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(false);


  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
    
      {isVisible && <p>This paragraph is now visible!Note that the development build is not optimized.
To create a production build, </p>}
    </div>
  );
};

export default Toggle;

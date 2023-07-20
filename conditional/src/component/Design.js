import React, { useState } from 'react';

const Design = () => {
  const [value, setValue] = useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  
  const getBorderStyle = () => {
    if (value === '') {
      return '5px solid red';
    } else {
      return '5px solid green';
    }
  }
  
  return (
    <div>
        <h1> Design</h1>
      
      <input type="text" value={value} onChange={handleChange} style={{ border: getBorderStyle() }}
      />
    </div>
  );
};

export default Design;

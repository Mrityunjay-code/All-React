import React from 'react'


const Counter = (props) => {
    const [count, setCount] = React.useState(props.initialCount);
  
    const handleClick = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <p>Counter Value: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
}

export default Counter
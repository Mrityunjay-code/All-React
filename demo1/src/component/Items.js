import React, { useState } from 'react'

function Items() {
    const[n, Number]=useState(0)
    const[num , Select]=useState(0)
    
   
    

    
     
  return (
   <div>
     <span >apple</span> <button onClick={()=>Number(n+1)}>+</button>{n} <button onClick={()=>Number(n-1)}>-</button><br/>
     <span >Banana</span> <button onClick={()=>Select(num+1)}>+</button>{num} <button onClick={()=>Select(num-1)}>-</button>
       
   
   </div>
    
  )
}

export default Items
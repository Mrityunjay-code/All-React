import React from 'react'

function Simple() {
    
    const handle =() =>{
        alert("button 1");
    }
    const handle2 =() =>{
        alert("button 2")
    }
    const handle3 =()=>{
        alert("button 3")
    }
  return (
    <>
    
    <button onClick={handle}>button</button>
    <button onClick={handle2}>button</button>
    <button onClick={handle3}>button</button>
    
    </>
  )
}

export default Simple
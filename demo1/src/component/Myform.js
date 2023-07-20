import React from 'react'


function Myform() {

    const show =(event) =>{
        const h =event.target.value
        console.log(event.target.value);
        alert("Hello "+h+"!!!");
    }
  return (
   <>
   <div>
    <input type='text' name ="n1" onChange={show}></input>
   </div>
   
   </>
  )
}

export default Myform
import React from 'react'
// import Vote from './Vote';
// import Novote from "./Novote";

function Final() {
  const status=(e)=>{
    const age=parseInt(e.target.elements.age.value);


    
    

    if(age>=18){
      alert("u can do vote");
    }
    else{
      alert("u can't do vote");
    }
  
  
}
return(
  <div>
    <form onSubmit={status}>
      <label>enter your age :</label>
      <input type='number' id='age' name='age' required/>
      <button type='submit'>Check</button>
    </form>
  </div>
);
}


export default Final
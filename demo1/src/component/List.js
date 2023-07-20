import React from 'react'


function List() {
    const All=[
      {id:1,name:"satendra"},
      {id:2,name:"mk"},
      {id:3,name:"ram"}
    ];
    return(
      
    <>
  <h1>list of numbers</h1>
  <hr/>
<ul>
  {All.map((s)=>{
    
    
return <li k={s.id}>{s.name}<hr/></li>

  })}
  
  
</ul>


   
   </>
   
  );
}

export default List
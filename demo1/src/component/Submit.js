

function Submit() {
    
    const click = (event) => 
    event.preventDefault();
   console.log("clicked")
  return (
   <>
   <form onSubmit={click}>
  <button type='submit'>Sunmit</button>

   </form>
   
   </>
  )
}

export default Submit
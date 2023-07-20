import React from 'react'
import Child from './Child'
import Child1 from './Child1'

function Parent() {
    const color ="Red"
  return (
  <>
  <div>
  <Child color={color}/>
    {/* <Child  message ="Hello, How are You" /> */}
    <Child1  color={color} />
  </div>
  
  </>
  )
}

export default Parent
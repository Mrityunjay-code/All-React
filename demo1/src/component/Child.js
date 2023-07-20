import React from 'react'

function Child(props) {
  return (
    <div style={{ color: props.color }}>Child: {props.color}</div>

  )
}


export default Child
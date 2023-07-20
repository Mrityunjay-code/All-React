import React from 'react'

function Child1(props) {
  return (
    <div style={{ color: props.color }}> child1: {props.color}</div>
  )
}

export default Child1
import React from 'react'

function Button({title, color}) {
  return (
    <button className={`hover-${color}`}>
      {title}
    </button>
  )
}

export default Button

import React from 'react'
import './FullName.css'

const name = {
    name: "Rafel Nadal",
}

const FullName = () => {
  return (
    <div><h1>{name.name}</h1></div>
  )
}

export default FullName
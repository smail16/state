import React from 'react'
import './Img.css'
const image={
    title:"rafa nadal photo",
    img:"rf.png",
}
const Img = () => {
  return (
    <div>
        <h2>{image.title}</h2>
        <img src={image.img}/>
    </div>
  )
}

export default Img
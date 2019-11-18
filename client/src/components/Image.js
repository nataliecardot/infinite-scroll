import React from 'react'

// Extracting image from props object using destructuring, thus don't need to use props.image
export default function Image({ image }) {
  return <img className="single-photo" src={image.urls.regular} alt="" />
}

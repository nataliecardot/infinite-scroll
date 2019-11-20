import React from 'react';

// Extracting image from props object using destructuring, thus don't need to use props.image
export default function Image({ image }) {
  return (
    <a href={image.links.html} target="_blank" rel="noopener noreferrer">
      <img className="single-image" src={image.urls.regular} alt="" />
    </a>
  );
}

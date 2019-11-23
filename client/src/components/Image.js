import React from 'react';

// Extracting image from props object using destructuring, thus don't need to use props.image
const Image = ({ image, photographer }) => {

  return (
    <div className="image-container">
      <a href={image.links.html} target="_blank" rel="noopener noreferrer">
        <img className="single-image" src={image.urls.regular} alt="" />
        <p className="attribution has-text-weight-light">{photographer} | Unsplash</p>
      </a>
    </div>
  );
}

export default Image;
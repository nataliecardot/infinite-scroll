import React from 'react';

const RandomImgBtn = ({ getRandomImage }) => {
  return (
    <div>
      <button className="button is-primary" onClick={getRandomImage}>Random Image</button>
    </div>
  );
}

export default RandomImgBtn;

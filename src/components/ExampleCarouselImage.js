import React from 'react';

function ExampleCarouselImage({ text,url }) {
  return (
    <img
      className="d-block w-100"
      src={url} // Replace with the actual image source
      alt={text}
    />
  );
}

export default ExampleCarouselImage;

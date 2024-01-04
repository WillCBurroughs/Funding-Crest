import React from 'react';

const ExampleCarouselImage = ({ text, imageName = "https://via.placeholder.com/1600x900"}) => {
  return (
    <img
      className="d-block w-100 rounded"
      src = {imageName}
      alt= {text}
    />
  );
};

export default ExampleCarouselImage;
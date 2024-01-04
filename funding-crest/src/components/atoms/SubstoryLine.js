import React from 'react';

const SubstoryLine = ({ color = "dimgray", height = "2px" }) => {
  return (
    <hr className='hr hr-blurry me-5 mb-4' style={{color: color, height: height}} ></hr>
  );
};

export default SubstoryLine;
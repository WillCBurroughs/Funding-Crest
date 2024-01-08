import React from 'react';

const HeaderSectionTag = ({ text }) => {
  return (
    <p style={{color: "#2153D3", fontWeight: "800", fontSize: "20px"}} className='me-5 mt-2'>
        {text}
    </p>
  );
};

export default HeaderSectionTag;
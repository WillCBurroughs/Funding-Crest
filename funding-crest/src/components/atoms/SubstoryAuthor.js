import React from 'react';

const SubstoryHeader = ({ text }) => {
  return (
    <p style={{color: "dimgray", fontWeight: "800", fontSize: "20px"}} className='me-5 mt-2'>
        {text}
    </p>
  );
};

export default SubstoryHeader;
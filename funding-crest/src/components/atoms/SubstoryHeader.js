import React from 'react';

const SecondaryHeadlinerTag = ({ text }) => {
  return (
    <h3 style={{color: "black", fontWeight: "800", marginTop: "-8px"}} className='me-5'>
        {text}
    </h3>
  );
};

export default SecondaryHeadlinerTag;
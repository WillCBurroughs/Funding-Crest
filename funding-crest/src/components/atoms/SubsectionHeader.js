import React from 'react';

const SubsectionHeader = ({ text }) => {
  return (
    <h3 style={{color: "black", fontWeight: "800", marginTop: "-10px"}} className='me-5'>
        {text}
    </h3>
  );
};

export default SubsectionHeader;
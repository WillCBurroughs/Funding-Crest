import React from 'react';

const SecondaryHeadlinerTag = ({ text, color: explicitColor }) => {
  let color = '';

  switch (text) {
    case 'Pitch Competition':
      color = '#339FCD';
      break;
    case 'Grant':
      color = '#5471FF';
      break;
    case 'Accelerator / Incubator':
      color = '#5498FF';
      break;
    default:
      color = 'black'; // Default color if the text doesn't match any condition
      break;
  }

  // Use explicitColor if provided, otherwise use the conditional color
  color = explicitColor || color;

  return (
    <h4 style={{ color, fontWeight: '700' }}>
      {text}
    </h4>
  );
};

export default SecondaryHeadlinerTag;
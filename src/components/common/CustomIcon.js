import React from 'react';

function CustomIcon(props) {
  return (
    <>
    	<img src={`icons/${props.icon}.svg`} style={{display: 'block'}} />
    </>
  );
}

export default CustomIcon;

import React from 'react';

function NavigationArrow(props) {
  console.log(props, 'test')

  return (
    <div className="arrowsCon">
      <button className="arrowBtn right" onClick={() => props.openBar('rightBar')}>
      	<i className="fas fa-chevron-left"></i>
      </button>
      <button className="arrowBtn left" onClick={() => props.openBar('leftBar')}>
      	<i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default NavigationArrow;

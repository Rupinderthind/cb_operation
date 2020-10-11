import React from 'react';

function NavigationArrow(props) {
  console.log(props, 'test')

  return (
    <div className="arrowsCon">
      
      <button className="arrowBtn left" onClick={() => props.openBar('leftBar')}>
        	<i className="fas fa-chevron-right"></i>
        </button>
      {!props.hideRight ? 
      	<button className="arrowBtn right" onClick={() => props.openBar('rightBar')}>
	      	<i className="fas fa-chevron-left"></i>
	      </button>
        :
        null
      }
    </div>
  );
}

export default NavigationArrow;

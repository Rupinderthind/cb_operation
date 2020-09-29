import React from 'react';

function HeadingBox(props) {
  return (
    <div className="headingBox">
      <div className="leftBar">
        <h5>Products</h5>
      </div>
      <div className="centerBar">
        <ul>
          <li className="active">
            Available
          </li>
          <li>
            Sold
          </li>
        </ul>
      </div>
      <div className="rightBar">
        <i className="fa fa-search" />
      </div>
    </div>
  );
}

export default HeadingBox;

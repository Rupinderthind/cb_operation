import React from 'react';
import CustomIcon from '../common/CustomIcon'

function CustomerInfo(props) {
  return (
    <div className="infoBox">
      <div className="imgCon">
        <img src="images/avatar.png" />
      </div>
      <h4>
        Christopher Pawelski
        <CustomIcon icon="Edit/Stroke" />
      </h4>
      <p>Chris Farming</p>
      <p>Country RD 25, Windom, MN</p>
      <p>U.S., 515141</p>
      <ul className="userActions">
        <li>
          <a href="">
            <i className="fa fa-comments" />
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa fa-envelope" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CustomerInfo;

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
            <CustomIcon icon="Icon/Chat%20Regular" />
          </a>
        </li>
        <li>
          <a href="">
            <CustomIcon icon="Icon/Email" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CustomerInfo;

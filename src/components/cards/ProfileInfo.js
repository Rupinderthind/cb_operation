import React from 'react';
import CustomIcon from '../common/CustomIcon'

function ProfileInfo(props) {
  return (
    <div className="infoBox">
      <div className="imgCon">
        <img src="images/avatar.png" />
      </div>
      <h4>
        Chad Rembold
        <CustomIcon icon="Edit/Stroke" />
      </h4>
      <p>Sales Rep.</p>
      <ul className="userActions">
        <li>
          <a href="">
            <CustomIcon icon="Icon/Phone" />
          </a>
        </li>
        <li>
          <a href="">
            <CustomIcon icon="Icon/Email" />
          </a>
        </li>
      </ul>
      <div className="reportingCon">
        <p>Reporting to</p>
        <div className="userCard">
          <div className="userCon">
            <CustomIcon icon="Placeholder/Person/Small" />
            <img src="images/avatar.png" />
          </div>
          <div className="userContent">
            <h5>White Jacques</h5>
            <p>Sales Head</p>
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
          
        </div>
      </div>
      
    </div>
  );
}

export default ProfileInfo;

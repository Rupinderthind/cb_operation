import React from 'react';
import CustomIcon from '../common/CustomIcon'

function ProfileInfo(props) {
  const renderExtraInfo = () => {
    if (props.teamMembers) {
      return  <div className="reportingCon">
                <p>
                  Team Members
                  <i onClick={() => props.openTeamModal()}><CustomIcon icon="Header/Icon/Add" /></i>
                </p>
                <ul className="teamMembersCon">
                  <li>
                    <div className="userCard">
                      <div className="userCon">
                        <CustomIcon icon="Placeholder/Person/Small" />
                      </div>
                      <div className="userContent">
                        <h5>White Jacques</h5>
                        <p>Sales Head</p>
                      </div>
                    </div>    
                  </li>
                  <li>
                    <div className="userCard">
                      <div className="userCon">
                        <CustomIcon icon="Placeholder/Person/Small" />
                      </div>
                      <div className="userContent">
                        <h5>White Jacques</h5>
                        <p>Sales Head</p>
                      </div>
                    </div>    
                  </li>
                  <li>
                    <div className="userCard">
                      <div className="userCon">
                        <CustomIcon icon="Placeholder/Person/Small" />
                      </div>
                      <div className="userContent">
                        <h5>White Jacques</h5>
                        <p>Sales Head</p>
                      </div>
                    </div>    
                  </li>
                  <li>
                    <div className="userCard">
                      <div className="userCon">
                        <CustomIcon icon="Placeholder/Person/Small" />
                      </div>
                      <div className="userContent">
                        <h5>White Jacques</h5>
                        <p>Sales Head</p>
                      </div>
                    </div>    
                  </li>
                </ul>
                
              </div>
    } else {
      return  <div className="reportingCon">
                <p>Reporting to</p>
                <div className="userCard">
                  <div className="userCon">
                    <CustomIcon icon="Placeholder/Person/Small" />
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
    }
  }
  return (
    <div className="infoBox">
      <div className="imgCon">
        <CustomIcon icon="Placeholder/Person/Small" />
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
      {renderExtraInfo()}
    </div>
  );
}

export default ProfileInfo;

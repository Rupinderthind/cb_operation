import React from 'react';
import CustomIcon from './CustomIcon'

function Header(props) {
  console.log(props, 'test')
  return (
    <div className="header">
      <div className="leftSide">
      	<a href="" className="logoLink">
      		<img src="images/logo.png" alt="logo" />
      	</a>
      </div>
      <div className="centerSide">
      	<ul>
      		<li>
      			<a href="" className="active">Dashborad</a>
      		</li>
      		<li>
      			<a href="">DealMode</a>
      		</li>
      	</ul>
      </div>
      <div className="rightSide">
      	<ul className="iconList">
      		<li>
      			<a href="">
            <CustomIcon icon="Navigation/Customers/Regular" />
      			</a>
      		</li>
      		<li>
      			<a href="">
              <CustomIcon icon="Navigation/Notifications/Regular" />
      			</a>
      		</li>
      		<li>
      			<a href="">
              <CustomIcon icon="Navigation/Chat/Regular" />
              <span className="badge">2</span>
      			</a>
      		</li>
      		<li>
      			<a href="" className="defaultBG">
              <CustomIcon icon="Placeholder/Person/Regular" />
      			</a>
      		</li>
      	</ul>
      </div>
    </div>
  );
}

export default Header;

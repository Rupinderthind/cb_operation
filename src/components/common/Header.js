import React, { useState } from 'react';
import CustomIcon from './CustomIcon'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom'

function Header(props) {
  console.log(props, 'test')

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

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
      			<Link to="/" className="active">Dashborad</Link>
      		</li>
      		<li>
      			<a href="">DealMode</a>
      		</li>
          <li>
            <a href="">Customers</a>
          </li>
          <li>
            <Link to="/team">My Team</Link>
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
      			<Link to="/chat">
              <CustomIcon icon="Navigation/Chat/Regular" />
              <span className="badge">2</span>
      			</Link>
      		</li>
      		<li>
      			
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle>
                <a className="defaultBG" onClick={() => toggle()}>
                  <CustomIcon icon="Placeholder/Person/Regular" />
                </a>
              </DropdownToggle>
              <DropdownMenu>
                <Link to="/profile">
                  <DropdownItem>Profile</DropdownItem>
                </Link>
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
      		</li>
      	</ul>
      </div>
    </div>
  );
}

export default Header;

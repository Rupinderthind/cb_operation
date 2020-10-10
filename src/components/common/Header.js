import React, { useState } from 'react';
import CustomIcon from './CustomIcon'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom'

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
      			<NavLink exact to="/" activeClassName="active">Dashborad</NavLink>
      		</li>
      		<li>
      			<a href="">DealMode</a>
      		</li>
          <li>
            <NavLink to="/customer" activeClassName="active">Customers</NavLink>
          </li>
          <li>
            <NavLink to="/team" activeClassName="active">My Team</NavLink>
          </li>
      	</ul>
      </div>
      <div className="rightSide">
      	<ul className="iconList">
      		<li>
      			<a href="">
              <CustomIcon icon="Navigation/Notifications/Regular" />
      			</a>
      		</li>
      		<li>
      			<NavLink to="/chat" activeClassName="active">
              <CustomIcon icon="Navigation/Chat/Regular" />
              <span className="badge">2</span>
      			</NavLink>
      		</li>
      		<li>
      			
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle>
                <a className="defaultBG" onClick={() => toggle()}>
                  <CustomIcon icon="Placeholder/Person/Regular" />
                </a>
              </DropdownToggle>
              <DropdownMenu>
                <NavLink to="/profile" activeClassName="active">
                  <DropdownItem>Profile</DropdownItem>
                </NavLink>
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

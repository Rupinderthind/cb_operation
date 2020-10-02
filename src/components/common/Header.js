import React from 'react';

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
      				<i className="fa fa-users" />
      			</a>
      		</li>
      		<li>
      			<a href="">
      				<i className="fa fa-bell" />
      			</a>
      		</li>
      		<li>
      			<a href="">
      				<i className="fa fa-comment" />
              <span className="badge">2</span>
      			</a>
      		</li>
      		<li>
      			<a href="" className="defaultBG">
      				<i className="fa fa-user" />
      			</a>
      		</li>
      	</ul>
      </div>
    </div>
  );
}

export default Header;

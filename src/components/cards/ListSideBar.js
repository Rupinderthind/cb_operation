import React from 'react';

function ListSideBar(props) {
  return (
    <div className="leftSidebarContent">
      <h4>Assigned Customers
        <button className="transparentBtn">
          <i className="fa fa-plus" />
        </button>
      </h4>
      <div className="searchBar">
        <i className="fa fa-search" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="listBox">
        <ul>
          <li>
            <a href="">
              <div className="userCon">
                <img src="images/avatar.png" />
              </div>
              Jhon Due
            </a>
          </li>
          <li>
            <a href="">
              <div className="userCon">
                <img src="images/avatar.png" />
              </div>
              Jhon Due
            </a>
          </li>
          <li>
            <a href="">
              <div className="userCon">
                <img src="images/avatar.png" />
              </div>
              Jhon Due
            </a>
          </li>
          <li>
            <a href="">
              <div className="userCon">
                <img src="images/avatar.png" />
              </div>
              Jhon Due
            </a>
          </li>
          <li>
            <a href="">
              <div className="userCon">
                <img src="images/avatar.png" />
              </div>
              Jhon Due
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ListSideBar;

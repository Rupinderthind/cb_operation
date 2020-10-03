import React from 'react';

function ListSideBar(props) {
  return (
    <div className="leftSidebarContent">
      <h4>Assigned Customers
        <button className="transparentBtn" onClick={() => props.setOpenModal && props.setOpenModal()}>
          <i className="fa fa-plus" />
        </button>
      </h4>
      <div className="searchBar">
        <i className="fa fa-search" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="listBox">
        <ul>
          <li onClick={() => props.setOpenModal && props.setOpenModal()}>
            <a>
              <div className="userCon">
                <img src="images/avatar.png" />
              </div>
              Jhon Due
            </a>
          </li>
          <li onClick={() => props.setOpenModal && props.setOpenModal()}>
            <a>
              <div className="userCon">
                <img src="images/avatar.png" />
              </div>
              Jhon Due
            </a>
          </li>
          <li onClick={() => props.setOpenModal && props.setOpenModal()}>
            <a>
              <div className="userCon">
                <img src="images/avatar.png" />
              </div>
              Jhon Due
            </a>
          </li>
          <li onClick={() => props.setOpenModal && props.setOpenModal()}>
            <a>
              <div className="userCon">
                <img src="images/avatar.png" />
              </div>
              Jhon Due
            </a>
          </li>
          <li onClick={() => props.setOpenModal && props.setOpenModal()}>
            <a>
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

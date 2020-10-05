import React from 'react';
import CustomIcon from '../common/CustomIcon'

function ListSideBar(props) {
  return (
    <div className="leftSidebarContent">
      <div className="crossSection">
        <i className="fa fa-times" onClick={() => props.openBar(null)}></i>
      </div>
      <h4>Assigned Customers
        <button className="transparentBtn" onClick={() => props.setOpenModal && props.setOpenModal()}>
          <CustomIcon icon="Header/Icon/Add" />
        </button>
      </h4>
      <div className="searchBar">
        <i><CustomIcon icon='Search' /></i>
        <input type="text" placeholder="Search" />
      </div>
      <div className="listBox">
        <ul>
          <li onClick={() => props.setOpenModal && props.setOpenModal()}>
            <a>
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              Jhon Due
            </a>
          </li>
          <li onClick={() => props.setOpenModal && props.setOpenModal()}>
            <a>
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              Jhon Due
            </a>
          </li>
          <li onClick={() => props.setOpenModal && props.setOpenModal()}>
            <a>
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              Jhon Due
            </a>
          </li>
          <li onClick={() => props.setOpenModal && props.setOpenModal()}>
            <a>
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              Jhon Due
            </a>
          </li>
          <li onClick={() => props.setOpenModal && props.setOpenModal()}>
            <a>
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
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

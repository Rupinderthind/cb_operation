import React from 'react';
import CustomIcon from '../common/CustomIcon'

function ListSideBar(props) {
  
  const onClickItem = () => {
    props.history.push('/customer')
  }

  const renderPopover = () => {
    if (props.popover) {
      return <div className="sidePopover">
              <div className="infoBox">
                <div className="imgCon">
                  <CustomIcon icon="Placeholder/Person/Small" />
                </div>
                <div className="popoverContent">
                  <h4>
                    Christopher Pawelski
                  </h4>
                  <p>Rachel Farming</p>
                  <p>43824 Country Rd 25</p>
                  <p>Windom, MN</p>
                  <p>U.S., 56101</p>
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
    <div className="leftSidebarContent">
      <div className="crossSection">
        <i className="fa fa-times" onClick={() => props.openBar(null)}></i>
      </div>
      <h4>My Customers
        <CustomIcon icon="Reassign" />
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
          <li>
            <a onClick={() => onClickItem()}>
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              Jhon Due
            </a>
            {renderPopover()}
          </li>
          <li>
            <a onClick={() => onClickItem()}>
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              Jhon Due
              {renderPopover()}
            </a>
          </li>
          <li>
            <a onClick={() => onClickItem()}>
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              Jhon Due
              {renderPopover()}
            </a>
          </li>
          <li>
            <a onClick={() => onClickItem()}>
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              Jhon Due
              {renderPopover()}
            </a>
          </li>
          <li>
            <a onClick={() => onClickItem()}>
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              Jhon Due
              {renderPopover()}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ListSideBar;

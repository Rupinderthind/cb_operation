import React from 'react';
import CustomIcon from './CustomIcon'

function HeadingBox(props) {
  const renderSearchBar = () => {
    if (props.renderSelect) {
      return <div className="selecBox">
        <select className="form-control">
          <option>September</option>
        </select>
      </div>
    }
  }
  return (
    <div className="headingBox">
      {props.title ?
        <div className="leftBar">
          <h5>{props.title}</h5>
        </div>
        : 
        null
      }
      
      <div className="centerBar">
        {renderSearchBar()}
        <ul>
          {props.tabs.map((item, index) => {
            return  <li className={props.activeTab === index && "active"} key={index} onClick={() => props.onChangeTab(index)}>
                      {item}
                    </li>
          })}
        </ul>
      </div>
      {!props.noRightSection ?
        <div className="rightBar">
          <CustomIcon icon="Search" />
        </div>
        : 
        null
      }
      
    </div>
  );
}

export default HeadingBox;

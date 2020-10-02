import React from 'react';

function HeadingBox(props) {
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
          <i className="fa fa-search" />
        </div>
        : 
        null
      }
      
    </div>
  );
}

export default HeadingBox;

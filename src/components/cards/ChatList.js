import React, {useState} from 'react';
import HeadingBox from '../common/HeadingBox'

const userTabs = ['Customers', 'Team']

const ChatList = () => {

	const [activeTab, setActiveTab] = useState(0)

	const renderTabs = () => {
		if(activeTab === 0){
			return <div className="listBox">
				        <ul>
				          <li>
				            <a href="">
				              <div className="userCon">
				                <img src="images/avatar.png" />
				              </div>
				              <div className="userName">				              	
				              	<span className="name">Jhon Due</span>
				              	<span className="text">Riyan King: tiam dolor aenean</span>
				              </div>				              
				              <span className="time">09:30 AM</span>
				            </a>
				          </li>
				          <li>
				            <a href="">
				              <div className="userCon">
				                <img src="images/avatar.png" />
				              </div>
				              <div className="userName">				              	
				              	<span className="name">Jhon Due</span>
				              	<span className="text">Riyan King: tiam dolor aenean</span>
				              </div>				              
				              <span className="time">Yesterday</span>
				            </a>
				          </li>
				          <li>
				            <a href="">
				              <div className="userCon">
				                <img src="images/avatar.png" />
				              </div>
				              <div className="userName">				              	
				              	<span className="name">Jhon Due</span>
				              	<span className="text">Riyan King: tiam dolor aenean</span>
				              </div>				              
				              <span className="time">Friday</span>
				            </a>
				          </li>
				          <li>
				            <a href="">
				              <div className="userCon">
				                <img src="images/avatar.png" />
				              </div>
				              <div className="userName">				              	
				              	<span className="name">Jhon Due</span>
				              	<span className="text">Riyan King: tiam dolor aenean</span>
				              </div>				              
				              <span className="time">09/22/2020</span>
				            </a>
				          </li>
				        </ul>
				      </div>
				    
		}
	}

	const onChangeTab = (currentTab) => {
		setActiveTab(currentTab)
	}

	return (
		<div className="leftSidebarContent chatList">
      <h4>Chat
        <button className="transparentBtn">
          <i className="fa fa-pen" />
        </button>
      </h4>
      <div className="searchBar">
        <i className="fa fa-search" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="tabCon">
      	<HeadingBox 
          activeTab={activeTab}
          tabs={userTabs}
          noRightSection
          onChangeTab={onChangeTab}
        /> 
      </div>
      {renderTabs()}
    </div> 
	)
}

export default ChatList;
import React, {useState} from 'react';
import HeadingBox from '../common/HeadingBox'
import CustomIcon from '../common/CustomIcon'

const userTabs = ['Customers', 'Team']

const ChatList = (props) => {

	const [activeTab, setActiveTab] = useState(0)

	const renderTabs = () => {
		if(activeTab === 0 || activeTab === 1){
			return <div className="listBox">
				        <ul>
				          <li>
				            <a href="">
				              <div className="userCon">
				                <CustomIcon icon="Placeholder/Person/Small" />
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
				                <CustomIcon icon="Placeholder/Person/Small" />
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
				                <CustomIcon icon="Placeholder/Person/Small" />
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
				                <CustomIcon icon="Placeholder/Person/Small" />
				              </div>
				              <div className="userName">				              	
				              	<span className="name">Jhon Due</span>
				              	<span className="text">Riyan King: tiam dolor aenean</span>
				              </div>				              
				              <span className="time">09/22/2020</span>
				            </a>
				          </li>
				          <li>
				            <a href="">
				              <div className="userCon">
				                <CustomIcon icon="Placeholder/Person/Small" />
				              </div>
				              <div className="userName">				              	
				              	<span className="name">Jhon Due</span>
				              	<span className="text">Riyan King: tiam dolor aenean</span>
				              </div>				              
				              <span className="time">09/22/2020</span>
				            </a>
				          </li>
				          <li>
				            <a href="">
				              <div className="userCon">
				                <CustomIcon icon="Placeholder/Person/Small" />
				              </div>
				              <div className="userName">				              	
				              	<span className="name">Jhon Due</span>
				              	<span className="text">Riyan King: tiam dolor aenean</span>
				              </div>				              
				              <span className="time">09/22/2020</span>
				            </a>
				          </li>
				          <li>
				            <a href="">
				              <div className="userCon">
				                <CustomIcon icon="Placeholder/Person/Small" />
				              </div>
				              <div className="userName">				              	
				              	<span className="name">Jhon Due</span>
				              	<span className="text">Riyan King: tiam dolor aenean</span>
				              </div>				              
				              <span className="time">09/22/2020</span>
				            </a>
				          </li>
				          <li>
				            <a href="">
				              <div className="userCon">
				                <CustomIcon icon="Placeholder/Person/Small" />
				              </div>
				              <div className="userName">				              	
				              	<span className="name">Jhon Due</span>
				              	<span className="text">Riyan King: tiam dolor aenean</span>
				              </div>				              
				              <span className="time">09/22/2020</span>
				            </a>
				          </li>
				          <li>
				            <a href="">
				              <div className="userCon">
				                <CustomIcon icon="Placeholder/Person/Small" />
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
        <button className="transparentBtn" onClick={() => props.openModal()}>
          <CustomIcon icon="Edit/Stroke" />
        </button>
      </h4>
      <div className="searchBar">
        <i><CustomIcon icon='search' /></i>
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
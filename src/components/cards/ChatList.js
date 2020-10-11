import React, {useState} from 'react';
import HeadingBox from '../common/HeadingBox'
import CustomIcon from '../common/CustomIcon'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const userTabs = ['Customers', 'Team']

const ChatList = (props) => {

	const [activeTab, setActiveTab] = useState(0)

	const renderTabs = () => {
		if(activeTab === 0){
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
				    
		} else if (activeTab === 1) {
			return <Accordion allowMultipleExpanded preExpanded={['group','directMessage']} style={{marginTop: 5}}>
		            <AccordionItem uuid="group">
		                <AccordionItemHeading>
		                    <AccordionItemButton>
		                       Group
		                    </AccordionItemButton>
		                </AccordionItemHeading>
		                <AccordionItemPanel>
	                    <div className="listBox">
								        <ul>
								          <li>
								            <a href="">
								              <div className="userCon">
								                <CustomIcon icon="Navigation/Customers/Regular" />
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
								                <CustomIcon icon="Navigation/Customers/Regular" />
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
								                <CustomIcon icon="Navigation/Customers/Regular" />
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
								                <CustomIcon icon="Navigation/Customers/Regular" />
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
								                <CustomIcon icon="Navigation/Customers/Regular" />
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
								                <CustomIcon icon="Navigation/Customers/Regular" />
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
		                </AccordionItemPanel>
		            </AccordionItem>
		            <AccordionItem uuid="directMessage">
		                <AccordionItemHeading>
		                    <AccordionItemButton>
		                      Direct Messages
		                      <i><CustomIcon icon="Header/Icon/Add" /></i>
		                    </AccordionItemButton>
		                </AccordionItemHeading>
		                <AccordionItemPanel>
		                   <div className="listBox">
									        <ul>
									          <li>
									            <a href="">
									              <div className="userCon">
									                <CustomIcon icon="Navigation/Customers/Regular" />
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
									                <CustomIcon icon="Navigation/Customers/Regular" />
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
									                <CustomIcon icon="Navigation/Customers/Regular" />
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
									                <CustomIcon icon="Navigation/Customers/Regular" />
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
									                <CustomIcon icon="Navigation/Customers/Regular" />
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
									                <CustomIcon icon="Navigation/Customers/Regular" />
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
		                </AccordionItemPanel>
		            </AccordionItem>
		        </Accordion>
		}
	}

	const onChangeTab = (currentTab) => {
		console.log(currentTab, 'test')
		setActiveTab(currentTab)
		if (currentTab === 1) {
			props.setIsTeamTab(true)
		} else {
			props.setIsTeamTab(false)
		}
	}

	return (
		<div className="leftSidebarContent chatList">
			<div className="crossSection">
        <i className="fa fa-times" onClick={() => props.openBar(null)}></i>
      </div>
      <h4>Chat
        <button className="transparentBtn" onClick={() => props.openModal()}>
          <CustomIcon icon="Edit/Stroke" />
        </button>
      </h4>
      <div className="searchBar">
        <i><CustomIcon icon='Search' /></i>
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
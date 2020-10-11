import React, {useState} from 'react';
import Header from '../../components/common/Header'
import HeadingBox from '../../components/common/HeadingBox'
import ItemCard from '../../components/cards/ItemCard'
import ChatList from '../../components/cards/ChatList'
import CustomerDetail from '../../components/cards/CustomerDetail'
import TableContent from '../../components/common/TableContent'
import CustomIcon from '../../components/common/CustomIcon'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NavigationArrow from '../../components/common/NavigationArrow'

const modalTabs = ['My Customers', 'All Customers']

const Chat = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalActiveTab, setModalActiveTab] = useState(0)
  const [barType, setBarType] = useState(null)
  const [isTeamTab, setIsTeamTab] = useState(false)

  const onChangeModalTab = (currentTab) => {
    setModalActiveTab(currentTab)
  }

  const openBar = (type) => {
    setBarType(type)
    if(type) {
      document.body.style.overflow = 'hidden'  
    } else {
      document.body.style.overflow = ''
    }
  }

  const renderPopover = () => {
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

  const renderModalTabs = () => {
    if (modalActiveTab === 0) {
      return  <div className="modalDetail">
                <h5 className="subHeading">Attach Product(s)</h5>
                <div className="itemList">
                  <ul>
                    <li>
                      <div className="itemImgBox">
                        <img src="images/banner.jpg" />
                      </div>
                      <div className="itemContent">
                        <h5>2020 JHON DEERE 6145R</h5>
                        <p>
                          <span>#hours</span>
                          <span>#150</span>
                          <span>#2020</span>
                        </p>
                        <h6>$139,896</h6>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="chipsCon">
                  <div className="listBox">
                    <ul>
                      <li>
                        <a href="">
                          <div className="userCon">
                            <CustomIcon icon="Placeholder/Person/Small" />
                          </div>
                          White Jacques                                               
                        </a>
                        <div className="iconCon">
                          <i className="fa fa-times" />
                        </div> 
                      </li>
                    </ul>
                  </div>
                </div>
                <h5 className="subHeading">Suggested Customers</h5>
                <div className="listBox">
                  <ul>
                    <li>
                      <a href="">
                        <div className="userCon">
                          <CustomIcon icon="Placeholder/Person/Small" />
                        </div>
                        White Jacques
                        <div className="iconCon">
                          <CustomIcon icon="Header/Icon/Add" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <div className="userCon">
                          <CustomIcon icon="Placeholder/Person/Small" />
                        </div>
                        White Jacques
                        <div className="iconCon">
                          <CustomIcon icon="Header/Icon/Add" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <div className="userCon">
                          <CustomIcon icon="Placeholder/Person/Small" />
                        </div>
                        White Jacques
                        <div className="iconCon">
                          <CustomIcon icon="Header/Icon/Add" />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
    } else if (modalActiveTab === 1) {
      return  <div className="modalDetail">
                <h5 className="subHeading">Attach Product(s)</h5>
                <div className="itemList">
                  <ul>
                    <li>
                      <div className="itemImgBox">
                        <img src="images/banner.jpg" />
                      </div>
                      <div className="itemContent">
                        <h5>2020 JHON DEERE 6145R</h5>
                        <p>
                          <span>#hours</span>
                          <span>#150</span>
                          <span>#2020</span>
                        </p>
                        <h6>$139,896</h6>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="chipsCon">
                  <div className="listBox">
                    <ul>
                      <li>
                        <a href="">
                          <div className="userCon">
                            <CustomIcon icon="Placeholder/Person/Small" />
                          </div>
                          White Jacques                                               
                        </a>
                        <div className="iconCon">
                          <i className="fa fa-times" />
                        </div> 
                      </li>
                    </ul>
                  </div>
                </div>
                <h5 className="subHeading">Suggested Customers</h5>
                <div className="listBox">
                  <ul>
                    <li>
                      <a href="">
                        <div className="userCon">
                          <CustomIcon icon="Placeholder/Person/Small" />
                        </div>
                        White Jacques
                        <div className="iconCon">
                          <CustomIcon icon="Header/Icon/Add" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <div className="userCon">
                          <CustomIcon icon="Placeholder/Person/Small" />
                        </div>
                        White Jacques
                        <div className="iconCon">
                          <CustomIcon icon="Header/Icon/Add" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <div className="userCon">
                          <CustomIcon icon="Placeholder/Person/Small" />
                        </div>
                        White Jacques
                        <div className="iconCon">
                          <CustomIcon icon="Header/Icon/Add" />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
    }
  }
  console.log(isTeamTab)
	return (
    <>
      <Header />
      <NavigationArrow openBar={openBar} />
      <div className="contentContainer">
      	<div className={barType == 'leftBar' ? "leftSidebar open" : "leftSidebar"}>
      		<ChatList 
            openModal={() => setOpenModal(true)}
            openBar={openBar}
            setIsTeamTab={setIsTeamTab}
          />
      	</div>
      	<div className="centerContent">
      		<div className="centerBoxContainer">
	      		<div className="chatboxCon">
              
              <div className="chatHeader">
                <div className="userCard">
                  <div className="userCon">
                    <CustomIcon icon="Placeholder/Person/Small" />
                  </div>
                  White Jacques
                </div>
                <button className="sendBtn attach">
                  <CustomIcon icon="Header/Icon/More" />
                </button>
                <button className="sendBtn">
                  <CustomIcon icon="Dropdown/List/Oneline/List/Single%20line/Icon/Info" />
                </button>
              </div>

              <div className="chatBody">
                <ul>
                  <li className="align-center">
                    <div className="dateCon">
                      Thursday, August 24th
                    </div>
                  </li>
                  <li>
                    <div className="userCard">
                      <div className="userCon">
                        <div className="userConInner">
                          <CustomIcon icon="Placeholder/Person/Small" />
                        </div>
                        {renderPopover()}
                      </div>
                      <div className="userContent">
                        <h6>
                          White Jacques
                          <span>8:13 AM</span>
                        </h6>
                        <p>Hey Guys, Hows is the business going on?</p>
                      </div>
                      
                    </div>
                  </li>
                  <li>
                    <div className="userCard">
                      <div className="userCon">
                        <div className="userConInner">
                          <CustomIcon icon="Placeholder/Person/Small" />
                        </div>
                        {renderPopover()}
                      </div>
                      <div className="userContent">
                        <h6>
                          White Jacques
                          <span>8:13 AM</span>
                        </h6>
                        <p>Hey Guys, Hows is the business going on?</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="userCard">
                      <div className="userCon">
                        <div className="userConInner">
                          <CustomIcon icon="Placeholder/Person/Small" />
                        </div>
                        {renderPopover()}
                      </div>
                      <div className="userContent">
                        <h6>
                          White Jacques
                          <span>8:13 AM</span>
                        </h6>
                        <p>Hey Guys, Hows is the business going on?</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="userCard">
                      <div className="userCon">
                        <div className="userConInner">
                          <CustomIcon icon="Placeholder/Person/Small" />
                        </div>
                        {renderPopover()}
                      </div>
                      <div className="userContent">
                        <h6>
                          White Jacques
                          <span>8:13 AM</span>
                        </h6>
                        <p>Hey Guys, Hows is the business going on?</p>
                      </div>
                    </div>
                  </li>
                  <li className="send">
                    <div className="userCard">
                      <div className="userCon">
                        <div className="userConInner">
                          <CustomIcon icon="Placeholder/Person/Small" />
                        </div>
                        {renderPopover()}
                      </div>
                      <div className="userContent">
                        <h6>
                          White Jacques
                          <span>8:13 AM</span>
                        </h6>
                        <p>Hey Guys, Hows is the business going on?</p>
                      </div>
                    </div>
                  </li>
                  <li className="send">
                    <div className="userCard">
                      <div className="userCon">
                        <div className="userConInner">
                          <CustomIcon icon="Placeholder/Person/Small" />
                        </div>
                        {renderPopover()}
                      </div>
                      <div className="userContent">
                        <h6>
                          White Jacques
                          <span>8:13 AM</span>
                        </h6>
                        <p>Hey Guys, Hows is the business going on?</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="chatFooter">
                <input type="text" className="form-control" placeholder="Type here..." />
                <button className="sendBtn attach">
                  <CustomIcon icon="Icon/Attach" />
                </button>
                <button className="sendBtn">
                  <CustomIcon icon="Form/Options/Send" />
                </button>
              </div>
            </div>
      		</div>
      	</div>
      	<div className={barType == 'rightBar' ? "rightSidebar open" : "rightSidebar"}>
      		<CustomerDetail openBar={openBar} isTeamTab={isTeamTab} />
      	</div>
      </div>

      <Modal isOpen={openModal} toggle={() => setOpenModal(false)}>
        <ModalBody>
          <div className="modalContent">
            <div className="modalHeader">
              <h3 className="heading">Message</h3>
              <HeadingBox 
                activeTab={modalActiveTab}
                tabs={modalTabs}
                noRightSection
                onChangeTab={onChangeModalTab}
              />         
            </div>
            {renderModalTabs()}
          </div>
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button color="secondary">Cancel</Button>{' '}
          <Button color="primary">Share</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Chat;
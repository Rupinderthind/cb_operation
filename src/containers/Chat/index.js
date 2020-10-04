import React, {useState} from 'react';
import Header from '../../components/common/Header'
import HeadingBox from '../../components/common/HeadingBox'
import ItemCard from '../../components/cards/ItemCard'
import ChatList from '../../components/cards/ChatList'
import CustomerDetail from '../../components/cards/CustomerDetail'
import TableContent from '../../components/common/TableContent'
import CustomIcon from '../../components/common/CustomIcon'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Chat = () => {
	return (
    <>
      <Header />
      <div className="contentContainer">
      	<div className="leftSidebar">
      		<ChatList />
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
                        <CustomIcon icon="Placeholder/Person/Small" />
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
                        <CustomIcon icon="Placeholder/Person/Small" />
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
                        <CustomIcon icon="Placeholder/Person/Small" />
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
                        <CustomIcon icon="Placeholder/Person/Small" />
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
                        <CustomIcon icon="Placeholder/Person/Small" />
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
                        <CustomIcon icon="Placeholder/Person/Small" />
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
      	<div className="rightSidebar">
      		<CustomerDetail />
      	</div>
      </div>
    </>
  )
}

export default Chat;
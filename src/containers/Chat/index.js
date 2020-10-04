import React, {useState} from 'react';
import Header from '../../components/common/Header'
import HeadingBox from '../../components/common/HeadingBox'
import ItemCard from '../../components/cards/ItemCard'
import ChatList from '../../components/cards/ChatList'
import CustomerDetail from '../../components/cards/CustomerDetail'
import TableContent from '../../components/common/TableContent'
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
	      		{/*<HeadingBox 
              title="Products" 
              activeTab={activeTab}
              tabs={tabs}
              onChangeTab={onChangeTab}
            />*/}
	      		{/*renderTabs()*/}
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
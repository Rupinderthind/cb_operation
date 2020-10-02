import React, {useState} from 'react';
import Header from '../../components/common/Header'
import HeadingBox from '../../components/common/HeadingBox'
import ItemCard from '../../components/cards/ItemCard'
import LeftSideBar from '../../components/cards/LeftSideBar'
import RightSideBar from '../../components/cards/RightSideBar'
import TableContent from '../../components/common/TableContent'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const tabs = ['Avaiable', 'Sold']
const modalTabs = ['Text', 'Email', 'Social']

function Home(props) {
  console.log(props, 'test')
  const [activeTab, setActiveTab] = useState(0)

  const renderTabs = () => {
    if (activeTab === 0) {
      return  <div>
                <ItemCard />
                <ItemCard />
                <ItemCard />
              </div>
    } else if (activeTab === 1) {
      return  <div className="contentArea">
                <TableContent />
              </div>
    }
  }

  const onChangeTab = (currentTab) => {
    setActiveTab(currentTab)
  }
  return (
    <>
      <Header />
      <div className="contentContainer">
      	<div className="leftSidebar">
      	<LeftSideBar />
      	</div>
      	<div className="centerContent">
      		<div className="centerBoxContainer">
	      		<HeadingBox 
              title="Products" 
              activeTab={activeTab}
              tabs={tabs}
              onChangeTab={onChangeTab}
            />
	      		{renderTabs()}
      		</div>
      	</div>
      	<div className="rightSidebar">
      		<RightSideBar />
      	</div>
      </div>
      <Modal isOpen={true}>
        <ModalBody>
          <div className="modalContent">
            <div className="modalHeader">
              <h3 className="heading">Suggested Share</h3>
              <HeadingBox 
                activeTab={activeTab}
                tabs={modalTabs}
                noRightSection
              />         
            </div>
            <div className="modalDetail">
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
                          <img src="images/avatar.png" />
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
                        <img src="images/avatar.png" />
                      </div>
                      White Jacques
                      <div className="iconCon">
                        <i className="fa fa-plus" />
                      </div>
                    </a>                     
                  </li>
                  <li>
                    <a href="">
                      <div className="userCon">
                        <img src="images/avatar.png" />
                      </div>
                      White Jacques
                      <div className="iconCon">
                        <i className="fa fa-plus" />
                      </div>
                    </a>                    
                  </li>
                  <li>
                    <a href="">
                      <div className="userCon">
                        <img src="images/avatar.png" />
                      </div>
                      White Jacques
                      <div className="iconCon">
                        <i className="fa fa-plus" />
                      </div>
                    </a>                   
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button color="secondary">Cancel</Button>{' '}
          <Button color="primary">Share</Button>
        </ModalFooter>
      </Modal>

      

    </>
  );
}

export default Home;

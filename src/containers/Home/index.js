import React, {useState} from 'react';
import Header from '../../components/common/Header'
import HeadingBox from '../../components/common/HeadingBox'
import ItemCard from '../../components/cards/ItemCard'
import LeftSideBar from '../../components/cards/LeftSideBar'
import ListSideBar from '../../components/cards/ListSideBar'
import TableContent from '../../components/common/TableContent'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CustomIcon from '../../components/common/CustomIcon'
import NavigationArrow from '../../components/common/NavigationArrow'

const tabs = ['Avaiable', 'Sold']
const modalTabs = ['Text', 'Email', 'Social']

function Home(props) {
  console.log(props, 'test')
  const [activeTab, setActiveTab] = useState(0)
  const [modalActiveTab, setModalActiveTab] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [barType, setBarType] = useState(null)

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

  const onChangeModalTab = (currentTab) => {
    setModalActiveTab(currentTab)
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
    } else if (modalActiveTab === 2) {
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
                <h5 className="subHeading">Select the channel you wanted to post</h5>
                <div className="socialList">
                  <ul>
                    <li>
                      <div className="socialIcon twitter">
                        <i className="fab fa-twitter"></i>
                      </div>
                      Twitter
                    </li>
                    <li>
                      <div className="socialIcon facebook">
                        <i className="fab fa-facebook-square"></i>
                      </div>
                      Facebook
                    </li>
                    <li>
                      <div className="socialIcon linkedin">
                        <i className="fab fa-linkedin"></i>
                      </div>
                      Linkedin
                    </li>
                    <li>
                      <div className="socialIcon tiktok">
                        <i className="fab fa-tiktok"></i>
                      </div>
                      TikTok
                    </li>
                    <li>
                      <div className="socialIcon whatsapp">
                        <i className="fab fa-whatsapp"></i>
                      </div>
                      WhatsApp
                    </li>
                    
                  </ul>
                </div>
              </div>
    }
  }

  const openBar = (type) => {
    setBarType(type)
    if(type) {
      document.body.style.overflow = 'hidden'  
    } else {
      document.body.style.overflow = ''
    }
    
  }

  return (
    <>
      <Header />
      <NavigationArrow openBar={openBar} />
      <div className="contentContainer">
      	<div className={barType == 'leftBar' ? "leftSidebar open" : "leftSidebar"}>
      	  <LeftSideBar setOpenModal={() => setOpenModal(true)} openBar={openBar} />
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
      	<div className={barType == 'rightBar' ? "rightSidebar open" : "rightSidebar"}>
      		<ListSideBar openBar={openBar} />
      	</div>
      </div>


      <Modal isOpen={openModal} toggle={() => setOpenModal(false)}>
        <ModalBody>
          <div className="modalContent">
            <div className="modalHeader">
              <h3 className="heading">Suggested Share</h3>
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
  );
}

export default Home;

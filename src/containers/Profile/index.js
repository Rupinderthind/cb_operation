import React, {useState} from 'react';
import Header from '../../components/common/Header'
import HeadingBox from '../../components/common/HeadingBox'
import ItemCard from '../../components/cards/ItemCard'
import LeftSideBar from '../../components/cards/LeftSideBar'
import ListSideBar from '../../components/cards/ListSideBar'
import TableContent from '../../components/common/TableContent'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ProfileInfo from '../../components/cards/ProfileInfo'
import { Tooltip } from 'reactstrap';
import CustomIcon from '../../components/common/CustomIcon'

const userTabs = ['M', 'Q', 'Y']
const modalTabs = ['Text', 'Email', 'Social']
const bottomTabs = ["DealMode", "Shared", "Invoice out", "Invoice In", "Sold"]

function Profile(props) {
  console.log(props, 'test')
  const [activeTab, setActiveTab] = useState(0)
  const [modalActiveTab, setModalActiveTab] = useState(0)
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const onChangeTab = (currentTab) => {
    setActiveTab(currentTab)
  }

  const renderTabs = () => {
    if (activeTab === 0) {
      return  <div className="tabContent noDataCon">
                <p className="noData">There are no deal records.</p>
              </div>
    } else {
      return  <div className="tabContent">
                <div className="itemList">
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
                        White Jacques
                      </div>
                    </li>
                    <li className="contentBox">
                      <div className="iconCon" id="TooltipExample">
                        <CustomIcon icon="Dropdown/List/Oneline/List/Single%20line/Icon/Info" />
                      </div>
                      <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                        Service due on 06/09/2020
                      </Tooltip>
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
                    <li className="contentBox">
                      <div className="iconCon">
                        <CustomIcon icon="Icon/Chat%20Regular" />
                      </div>
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
                    <li className="contentBox">
                      <div className="iconCon">
                        <CustomIcon icon="Icon/Email" />
                      </div>
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
                        White Jacques
                      </div>
                    </li>
                    <li className="contentBox">
                      <div className="iconCon">
                        <CustomIcon icon="Icon/Email" />
                      </div>
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
                    <li className="contentBox">
                      <div className="iconCon">
                        <CustomIcon icon="Icon/Chat%20Regular" />
                      </div>
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
                    <li className="contentBox">
                      <div className="iconCon">
                        <CustomIcon icon="Icon/Email" />
                      </div>
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
                        White Jacques
                      </div>
                    </li>
                    <li className="contentBox">
                      <div className="iconCon">
                        <CustomIcon icon="Icon/Email" />
                      </div>
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
                    <li className="contentBox">
                      <div className="iconCon">
                        <CustomIcon icon="Icon/Chat%20Regular" />
                      </div>
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
                    <li className="contentBox">
                      <div className="iconCon">
                        <CustomIcon icon="Icon/Email" />
                      </div>
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
              </div>
    }
  }

  return (
    <>
      <Header />
      <div className="contentContainer">
      	<div className="centerContent centeredArea">
      		<div className="centerBoxContainer">
	      		<div className="dealContentBox">
              <div className="customerInfoBox">
                <ProfileInfo />
              </div>

              <div className="dealInfoBox">
                <div className="dealTitleCon">
                  <HeadingBox 
                    title="Activity"
                    activeTab={0}
                    tabs={userTabs}
                    noRightSection
                    renderSelect
                  /> 
                </div>

                <div className="detailCards">
                  <div className="cardBox">
                    <div className="innerCardCon yellow">
                      <div className="iconBar">
                        <i className="fa fa-arrow-right diagonal" />
                      </div>
                      <h5>0</h5>
                      <h4>shared</h4>
                      <h3>$0.0</h3>
                    </div>
                  </div>
                  <div className="cardBox">
                    <div className="innerCardCon blueLign">
                      <div className="iconBar">
                        <i className="fa fa-arrow-up" />
                      </div>
                      <h5>0</h5>
                      <h4>order out</h4>
                      <h3>$0.0</h3>
                    </div>
                  </div>
                  <div className="cardBox">
                    <div className="innerCardCon blue">
                      <div className="iconBar">
                        <i className="fa fa-arrow-down" />
                      </div>
                      <h5>0</h5>
                      <h4>order in</h4>
                      <h3>$0.0</h3>
                    </div>
                  </div>
                  <div className="cardBox">
                    <div className="innerCardCon red">
                      <div className="iconBar">
                        <i className="fa fa-dollar-sign" />
                      </div>
                      <h5>0</h5>
                      <h4>sold</h4>
                      <h3>$0.0</h3>
                    </div>
                  </div>
                </div>

                <div className="bottomTabsCon">
                  <div className="bottomTabs">
                    <HeadingBox
                      activeTab={activeTab}
                      tabs={bottomTabs}
                      noRightSection
                      onChangeTab={onChangeTab}
                    /> 
                  </div>
                  <div className="searchTabs">
                    <CustomIcon icon="Search" />
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                </div>
                {renderTabs()}
                

              </div>

            </div>
      		</div>
      	</div>
      </div>

      

    </>
  );
}

export default Profile;

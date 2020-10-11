import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import CustomIcon from '../common/CustomIcon'	
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const CustomerDetail = (props) => {

  const renderSideInfo = () => {
    if (props.isTeamTab) {
      return <div className="leftSidebarContent customerDetail">
              <div className="crossSection">
                <i className="fa fa-times" onClick={() => props.openBar(null)}></i>
              </div>
              <h4 style={{marginBottom: 10}}>Information
                <button className="transparentBtn">
                  <CustomIcon icon="Header/Icon/More" />
                </button>
              </h4>
              <div className="leftSidebarContent chatList">
                <Accordion allowMultipleExpanded preExpanded={['info']}>
                  <AccordionItem uuid="info">
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
                </Accordion>
              </div>
            </div> 
    } else {
      return <div className="leftSidebarContent customerDetail">
                <div className="crossSection">
                  <i className="fa fa-times" onClick={() => props.openBar(null)}></i>
                </div>
                <h4>Customer Details
                  <button className="transparentBtn">
                    <CustomIcon icon="Header/Icon/More" />
                  </button>
                </h4>
                <TextField label="Business Name" variant="outlined" className="formElement" size="small" />
                <TextField label="Address" variant="outlined" className="formElement" size="small" />
                <TextField label="Email" variant="outlined" className="formElement" size="small" />
                <TextField label="Phone number" variant="outlined" className="formElement" size="small" />
                <div className="sibeBarTable">
                  <table>
                    <thead>
                      <tr>
                        <th>Purchased on</th>
                        <th>Service due</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>05/20/2020</td>
                        <td>08/19/2020</td>
                        <td>Pending</td>
                      </tr>
                      <tr>
                        <td>05/20/2020</td>
                        <td>08/19/2020</td>
                        <td>Pending</td>
                      </tr>
                      <tr>
                        <td>05/20/2020</td>
                        <td>08/19/2020</td>
                        <td>Pending</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div> 
    }
  }
	return (renderSideInfo());
}

export default CustomerDetail;
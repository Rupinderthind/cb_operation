import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';	

const CustomerDetail = () => {
	return (
		<div className="leftSidebarContent customerDetail">
      <h4>Customer Details
        <button className="transparentBtn">
          <i className="fa fa-ellipsis-v" />
        </button>
      </h4>
      <TextField label="Business Name" variant="outlined" className="formElement" size="small" />
      <TextField label="Address" variant="outlined" className="formElement" size="small" />
			<TextField label="Email" variant="outlined" className="formElement" size="small" />
			<TextField label="Phone number" variant="outlined" className="formElement" size="small" />
      {/*<div className="searchBar">
        <i className="fa fa-search" />
        <input type="text" placeholder="Search" />
      </div>*/}
    </div> 
	)
}

export default CustomerDetail;
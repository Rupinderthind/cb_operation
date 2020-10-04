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
	)
}

export default CustomerDetail;
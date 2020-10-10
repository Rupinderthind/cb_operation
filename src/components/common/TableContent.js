import React from 'react';
import CustomIcon from '../common/CustomIcon'

function TableContent(props) {
  return (
    <div className="tableContent">
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Product</th>
            <th>Sold on</th>
            <th>Services Due in</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="userCard">
                <div className="userCon">
                  <CustomIcon icon="Placeholder/Person/Small" />
                </div>
                White Jacques
              </div>
            </td>
            <td>
              BRILLION SS-1201
            </td>
            <td>
              08/19/2020
            </td>
            <td>
              45 days
            </td>
          </tr>
          <tr>
            <td>
              <div className="userCard">
                <div className="userCon">
                  <CustomIcon icon="Placeholder/Person/Small" />
                </div>
                White Jacques
              </div>
            </td>
            <td>
              BRILLION SS-1201
            </td>
            <td>
              08/19/2020
            </td>
            <td>
              45 days
            </td>
          </tr>
          <tr>
            <td>
              <div className="userCard">
                <div className="userCon">
                  <CustomIcon icon="Placeholder/Person/Small" />
                </div>
                White Jacques
              </div>
            </td>
            <td>
              BRILLION SS-1201
            </td>
            <td>
              08/19/2020
            </td>
            <td>
              45 days
            </td>
          </tr>
          <tr>
            <td>
              <div className="userCard">
                <div className="userCon">
                  <CustomIcon icon="Placeholder/Person/Small" />
                </div>
                White Jacques
              </div>
            </td>
            <td>
              BRILLION SS-1201
            </td>
            <td>
              08/19/2020
            </td>
            <td>
              45 days
            </td>
          </tr>
        </tbody>


      </table>
    </div>
  );
}

export default TableContent;

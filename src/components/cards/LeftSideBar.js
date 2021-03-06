import React from 'react';
import CustomIcon from '../common/CustomIcon'

function LeftSideBar(props) {
  return (
    <div className="leftSidebarContent">
      <div className="crossSection">
        <i className="fa fa-times" onClick={() => props.openBar(null)}></i>
      </div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1750674.551865144!2d75.40116905!3d31.0182739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1601317460851!5m2!1sen!2sin" 
        frameborder="0" 
        allowfullscreen="" 
        aria-hidden="false" 
        tabindex="0">
      </iframe>
      <h4>Suggested Share</h4>
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
      <div className="listBox">
        <ul>
          <li onClick={() => props.setOpenModal && props.setOpenModal()}>
            <a>
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              White Jacques
              <i>
                <CustomIcon icon="Icon/Share" />
              </i>
            </a>
          </li>
          <li onClick={() => props.setOpenModal && props.setOpenModal()}>
            <a>
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              White Jacques
              <i>
                <CustomIcon icon="Icon/Share" />
              </i>
            </a>
          </li>
          <li onClick={() => props.setOpenModal && props.setOpenModal()}>
            <a>
              <div className="userCon">
                <CustomIcon icon="Placeholder/Person/Small" />
              </div>
              White Jacques
              <i>
                <CustomIcon icon="Icon/Share" />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSideBar;

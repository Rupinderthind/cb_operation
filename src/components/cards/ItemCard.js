import React from 'react';
import CustomIcon from '../common/CustomIcon'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
};

function ItemCard(props) {
  return (
    <div className="itemBox">
      <div className="topSection">
        <OwlCarousel
          className="owl-theme"
          loop
          nav
          options={options}
          items={1}
        >
          <div class="item">
            <img src="images/banner.jpg" />
          </div>
          <div class="item">
            <img src="images/banner.jpg" />
          </div>
          <div class="item">
            <img src="images/banner.jpg" />
          </div>
          <div class="item">
            <img src="images/banner.jpg" />
          </div>
        </OwlCarousel>
        <button className="shareBtn" onClick={() => props.setOpenModal()}>
          <CustomIcon icon="Mobile_Share" />
        </button>
        <div className="sectionCointent">
          <h4>2020 JHON DEERE 6145R</h4>
          <p>
            <span>#hours</span>
            <span>#150</span>
            <span>#2020</span>
          </p>
          <button className="priceBtn">$139,896</button>
        </div>
      </div>
      <div className="bottomSection">
        <p><b>Chad Rembold</b> This is very recommended product, keep it sharing</p>
        <p><b>Ryan King</b> Thanks <b>Chad Rembold</b> for sharing a tip.</p>
        <a className="viewAllLink" href="">View all 3 comments</a>
      </div>
      <div className="commentBox">
        <div className="imgCon">
          <CustomIcon icon="Placeholder/Person/Small" />
        </div>
        <input type="text" placeholder="Add a Comment..." />
      </div>
    </div>
  );
}

export default ItemCard;

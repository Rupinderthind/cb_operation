import React from 'react';

function ItemCard(props) {
  return (
    <div className="itemBox">
      <div className="topSection">
        <img src="images/banner.jpg" />
        <button className="shareBtn" onClick={() => props.setOpenModal()}>s</button>
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
          <img src="images/avatar.png" />
        </div>
        <input type="text" placeholder="Add a Comment..." />
      </div>
    </div>
  );
}

export default ItemCard;

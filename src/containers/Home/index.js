import React from 'react';
import Header from '../../components/common/Header'
import HeadingBox from '../../components/common/HeadingBox'
import ItemCard from '../../components/cards/ItemCard'
import LeftSideBar from '../../components/cards/LeftSideBar'
import RightSideBar from '../../components/cards/RightSideBar'

function Home(props) {
  console.log(props, 'test')
  return (
    <>
      <Header />
      <div className="contentContainer">
      	<div className="leftSidebar">
      	<LeftSideBar />
      	</div>
      	<div className="centerContent">
      		<div className="centerBoxContainer">
	      		<HeadingBox />
	      		<ItemCard />
	      		<ItemCard />
	      		<ItemCard />
      		</div>
      	</div>
      	<div className="rightSidebar">
      		<RightSideBar />
      	</div>
      </div>
    </>
  );
}

export default Home;

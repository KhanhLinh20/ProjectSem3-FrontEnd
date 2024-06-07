import React from "react";

import "../css/Customer.css";
import { NavLink } from "react-router-dom";


export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const {
    data,
    dataIndex,
    isCenterSlide,
    swipeTo,
    slideIndex
  } = StackedCarouselSlideProps;

  const coverImage = data[dataIndex].image;
  const text = data[dataIndex].text;
  const title = data[dataIndex].title
  const navlin = data[dataIndex].navlin

  console.log(coverImage);
  return (
    <div className="card-card " draggable={false}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      <div className="detail fill">
        <div className="discription">
        <img
            style={{ width: 100 }}
            alt="Acb"
            className="cover-image"
            src={coverImage}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>

          
          </div>
         <NavLink to="/Profile" className="text-center"><button className='btn btn-outline-success'> {navlin}</button></NavLink>

          {/* <p>{text}</p> */}
        </div>
      </div>
    </div>
  );
});

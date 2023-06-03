import React from "react";
import HeroSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousal = () => {
    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "300px",
        infinite: true,  
        nextArrow : <NextArrow/>,
        prevArrow: <PrevArrow/>
      }
    
      const settings = {
        autoplay:true,
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,      
        nextArrow : <NextArrow/>,
        prevArrow: <PrevArrow/>  
      };

  const images = [
    "https://images.unsplash.com/photo-1685509169424-c3ec59122617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    "https://images.unsplash.com/photo-1682685797406-97f364419b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1685287417745-0ed40cb5b3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://plus.unsplash.com/premium_photo-1685011233851-22c3f4e7412b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    "https://images.unsplash.com/photo-1685521454448-0d6850f4dcb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1199&q=80",
  ];

  return (
    <>
    <div className="lg:hidden overflow-hidden">
    <HeroSlider {...settings}>
        {images.map((image) => {
          return (
            <div className="w-full h-64 md:h-80 py-3">
              <img src={image} alt="test" className="h-full w-full rounded-md"/>
            </div>
          );
        })}
      </HeroSlider>
    </div>
    <div className="hidden lg:block overflow-hidden">
    <HeroSlider {...settingsLg}>
        {images.map((image) => {
          return (
            <div className="w-full h-96 px-2 py-3">
              <img src={image} alt="test" className="h-full w-full rounded-md"/>
            </div>
          );
        })}
      </HeroSlider>
    </div>
      
    </>
  );
};

export default HeroCarousal;

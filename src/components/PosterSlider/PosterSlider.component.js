import React from 'react';
import settings from '../../configs/PosterCarousal.config';
import Slider from 'react-slick';
import Poster from '../Poster/poster.component';

const  PosterSlider = (props) => {
  return (
    <>
       <div className={`flex flex-col items-start ${props.isDark ? 'text-white' : 'text-gray-700'}`}>
        <h3 className=" text-xl font-bold">{props.title}</h3>
        <p className="text-sm">{props.subtitle}</p>
      </div>
      <Slider {...settings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} ></Poster>
        ))}
      </Slider>
    </>
  )
}

export default PosterSlider

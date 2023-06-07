import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/poster.component";
import settings from "../../configs/PosterCarousal.config";
import PremierImages from "../../configs/TempPosters.config";

const Premier = (props) => {
  console.log(props);
  return (
    <>
      <div className="flex flex-col items-start text-white">
        <h3 className=" text-xl font-bold">Premier</h3>
        <p className="text-sm">Brand new releases every Friday</p>
      </div>
      <Slider {...settings}>
        {PremierImages.map((image) => (
          <Poster {...props} {...image}></Poster>
        ))}
      </Slider>
    </>
  );
};

export default Premier;

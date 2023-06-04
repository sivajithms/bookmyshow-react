import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/poster.component";

const Premier = () => {

  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    arrows: true
  };

  const PremierImages = [
  {
    src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAzOS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357072-jacnvskvpe-portrait.jpg' ,
    alt: '2018',
    title: '2018 (Malayalam)',
    subtitle: 'Drama/Thriller'
  },
  {
    src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAzOS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357072-jacnvskvpe-portrait.jpg' ,
    alt: '2018',
    title: '2018 (Malayalam)',
    subtitle: 'Drama/Thriller'
  },
  {
    src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAzOS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357072-jacnvskvpe-portrait.jpg' ,
    alt: '2018',
    title: '2018 (Malayalam)',
    subtitle: 'Drama/Thriller'
  },
  {
    src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAzOS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357072-jacnvskvpe-portrait.jpg' ,
    alt: '2018',
    title: '2018 (Malayalam)',
    subtitle: 'Drama/Thriller'
  },
  {
    src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAzOS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357072-jacnvskvpe-portrait.jpg' ,
    alt: '2018',
    title: '2018 (Malayalam)',
    subtitle: 'Drama/Thriller'
  },
  {
    src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAzOS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357072-jacnvskvpe-portrait.jpg' ,
    alt: '20184',
    title: '2018 (Malayalam)',
    subtitle: 'Drama/Thriller'
  }
]
  
  return (
    <>
      <Slider {...settings}>
        {PremierImages.map((image)=>(
            <Poster {...image}></Poster>
        ))}
      </Slider>
    </>
  );
};

export default Premier;

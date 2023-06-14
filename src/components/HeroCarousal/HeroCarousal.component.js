import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousal = () => {

  const [images, setImages] = useState([])

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const getImages = await axios.get('/movie/now_playing')
      setImages(getImages.data.results);
    }
    requestNowPlayingMovies();
  }, [])

  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "300px",
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  const settings = {
    autoplay: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };


  return (
    <>
      <div className="lg:hidden overflow-hidden">
        <HeroSlider {...settings}>
          {images.map((image) => {
            return (
              <div className="w-full h-64 md:h-80 py-3">
                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="test" className="h-full w-full rounded-md" />
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
                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="test" className="h-full w-full rounded-md" />
              </div>
            );
          })}
        </HeroSlider>
      </div>

    </>
  );
};

export default HeroCarousal;

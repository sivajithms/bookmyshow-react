import React from "react";
import EntertainmenCardSlider from "../components/Entertainment/EntertainmenCard.component";
import Premier from "../components/Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../configs/TempPosters.config";

const HomePage = () => {
  return (
    <>
    <div className="flex flex-col gap-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800">
          The best of Entertainment
        </h1>
        <EntertainmenCardSlider />
      </div>

      <div className="bg-navCol-25 py-16">
        <div className="container mx-auto px-4">
          <div className="flex">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
              alt="premier"
              className="w-full h-full"
            />
          </div>
          <Premier isDark />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <PosterSlider images={TempPosters} title='new movies' subtitle='its the latest'/>
      </div>
      </div>
    </>
  );
};

export default HomePage;

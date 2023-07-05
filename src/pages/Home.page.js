import axios from "axios";
import React, { useState, useEffect } from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmenCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
// import Premier from "../components/Premier/Premier.component.js";
// import TempPosters from "../configs/TempPosters.config";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {   
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };

    const requestActionMovies = async () => {
        const response = await axios.get('/discover/movie', {
          params: {
            with_genres: 28 // Filter by action genre (genre ID for action is 28)
          }
        }); 
        setActionMovies(response.data.results)
    };

    const requestTopratedMovies = async () => {
      const response = await axios.get("/movie/top_rated");
        setTopRatedMovies(response.data.results)
    };

    requestPopularMovies();
    requestActionMovies();
    requestTopratedMovies();
  }, []);

  console.log({ actionMovies });

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
        <div className="bg-navCol-25 py-16">
          <div className="container mx-auto px-4">
            <div className="flex">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
              />
            </div>
            <PosterSlider
              images={popularMovies}
              title="Premiers"
              subtitle="Brand New Releases Every Friday"
              isDark
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <PosterSlider
          images={actionMovies}
          title="Action Movies"
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4">
        <PosterSlider
          images={topRatedMovies}
          title="Top Rated"
          isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;

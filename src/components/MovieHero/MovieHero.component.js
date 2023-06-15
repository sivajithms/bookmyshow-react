import React from "react";

const MovieHero = () => {
  return (
    <>
      <div className="md:hidden">
        <img
          src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
          alt="poster"
        />
      </div>

      <div className="hidden md:block lg:hidden">
        <img
          src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
          alt="poster"
        />
      </div>

      <div className="relative hidden lg:block" style={{ height: "40rem" }}>
        <div
          className="absolute h-full w-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
          }}
        />

        <div className="absolute z-30 w-3/5 h-96 left-52 top-10">
          <div className="flex">
            <img
              src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
              alt="poster"
              className="h-full w-2/5 rounded-xl "
            />
            <div className="flex px-4 w-30">
              <h1 className="text-white font-bold text-4xl t whitespace-normal">
                  Shang-Chi and the Legend of the Ten Rings
              </h1>
            </div>
           
          </div>
        </div>

        <img
          src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
          alt="poster"
          className="w-full h-full"
        />
      </div>
    </>
  );
};

export default MovieHero;

import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { BiCameraMovie } from "react-icons/bi";

const launchRazorPay = () => {

  const options = {
    key: "rzp_test_xdi2CrXTof2zyC",
    amount: 50000,
    currency: "INR",
    name: "BookMyShow clone",
    description: "Movie Purchase on Rental",
    image:
      "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
      alert("payment done");
    },
    theme: {
      color: "#c4242b",
    }
  };

  const rzp = new window.Razorpay(options)
  rzp.open()
};

const MoviePage = () => {
  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>
            Shang-Chi and The Legend of The Ten Rings features Simu Liu as
            Shang-Chi, who must confront the past he thought he left behind when
            he is drawn into the web of the mysterious Ten Rings organization.
            The film is directed by Destin Daniel Cretton and produced by Kevin
            Feige and Jonathan Schwartz.
          </p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">
            Applicable Offers
          </h1>
          <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
            <div className="w-8 h-8">
              <BiCameraMovie className="w-full h-full" />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
              <p className="text-gray-600 text-sm">
                Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                Pass @Rs.99
              </p>
            </div>
          </div>
        </div>
        <button onClick={launchRazorPay} class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">
  Book tickets
</button>
      </div>
    </>
  );
};
export default MoviePage;

// https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/transformers-rise-of-the-beasts-et00346319-1682680068.jpg

// https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/spider-man-across-the-spider-verse-et00347275-1684425314.jpg

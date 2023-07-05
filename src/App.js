import DefaultHOC from "./HOC/Default.HOC";
import HomePage from "./pages/Home.page";
import MovieHOC from "./HOC/Movie.HOC";
import MoviePage from "./pages/Movie.page";
import Plays from "./pages/Plays.page";
import axios from "axios";

//axios defaults 
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {}
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY

function App() {
  return (
    <>
      <DefaultHOC path='/' exact component={HomePage} />
      <DefaultHOC path='/plays' exact component={Plays} />
      <MovieHOC path='/movie/:id' exact component={MoviePage} />
    </>
  );
}

export default App;

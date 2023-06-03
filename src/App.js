import { Route, Routes } from "react-router-dom";
import DefaultHOC from "./HOC/Default.HOC";
import Temp from "./components/Temp";
import HomePage from "./pages/Home.page";


function App() {
  return (
    <>
    <DefaultHOC  path='/' component={HomePage}/>
    </>
  );
}

export default App;

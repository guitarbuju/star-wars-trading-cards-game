import "./App.css";
import BoxOffice from "../src/Pages/BoxOffice";
import Album from "../src/Pages/Album"
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Intro from "./Pages/Intro";
import BigLogo from "./Pages/BigLogo";
import Header from "./components/Header";



function App() {

const location = useLocation()

const noHead = location.pathname === '/' || location.pathname === '/biglogo';


  return (
    <>
    {!noHead && <Header/>}

      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path='homebase' element={<BoxOffice />} />
        <Route path='album' element={<Album />}/>
        <Route index  element={<Intro/>}/>
        <Route path='biglogo'  element={<BigLogo/>}/>
      </Routes>
    </>
  );
}

export default App;

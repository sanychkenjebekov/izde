import './App.scss';
import Header from "./companents/Header";
import {Route, Routes, useLocation} from "react-router-dom";
import Footer from "./companents/Footer";
import Home from "./companents/Home";
import Login from "./companents/Login/login";
import Agents from "./companents/Agents/agents";
import {useEffect} from "react";
import FavoriteSetings from "./companents/FavoritesSetings";
import PaidAd from "./companents/PaidAd";
import Favorite from "./companents/Favorite";


function App() {
    const {pathname} = useLocation()
    useEffect(()=>{
        window.scroll(0,0)
    },[pathname])
  return (
    <div className="App">
      <Header/>
        <Favorite/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/agents'} element={<Agents/>}/>
        <Route path={'/favoriteSetings'} element={<FavoriteSetings/>}/>
        <Route path={'/addProperty'} element={<PaidAd/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

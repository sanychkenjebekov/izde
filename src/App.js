import './App.scss';
import Header from "./companents/Header";
import {Route, Routes, useLocation} from "react-router-dom";
import Footer from "./companents/Footer";
import Home from "./companents/Home";
import Login from "./companents/Login/login";
import Agents from "./companents/Agents/agents";
import Buy from "./companents/Buy/buy";
import Rent from "./companents/Buy/buy/Rent";
import {useEffect} from "react";
import FavoriteSetings from "./companents/FavoritesSetings";
import PaidAd from "./companents/PaidAd";
import Reviews from "./companents/Reviews/reviews"
import Dream from "./companents/Buy/detailebuy";
import Favorite from "./companents/Favorite";
import AddPhoto from "./companents/AddPhoto";
import AgentsLesile from "./companents/AgentsLesile";
import Permission from "./companents/AdminPermission";





function App() {
    const {pathname} = useLocation()
    useEffect(()=>{
        window.scroll(0,0)
    },[pathname])
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/agents'} element={<Agents/>}/>
          <Route path={'/buy'} element={<Buy/>}/>
          <Route path={'/rent'} element={<Rent/>}/>
        <Route path={'/favoriteSetings'} element={<FavoriteSetings/>}/>
          <Route path={'/dream'} element={<Dream/>}/>
          <Route path={'/favoriteSetings'} element={<FavoriteSetings/>}/>
        <Route path={'/addProperty'} element={<PaidAd/>}/>
        <Route path={'/reviews'} element={<Reviews/>}/>
        <Route path={'/buyDetails'} element={<Dream/>}/>
        <Route path={'/rentDetails'} element={<Dream/>}/>
        <Route path={'/owner'} element={<Favorite/>}/>
        <Route path={'/addphoto'} element={<AddPhoto/>}/>
        <Route path={'/becomeagent'} element={<AgentsLesile/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

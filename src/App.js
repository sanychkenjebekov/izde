import "./App.scss";
import Header from "./companents/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./companents/Footer";
import Home from "./companents/Home";
import Login from "./companents/Login/login";
import Agents from "./companents/Agents/agents";
import Reviews from "./companents/Reviews/reviews"
import Buy from "./companents/Buy/buy";
import Rent from "./companents/Buy/buy/Rent";
import { useEffect } from "react";
import FavoriteSetings from "./companents/FavoritesSetings";
import PaidAd from "./companents/PaidAd";
import Dream from "./companents/Buy/detailebuy";
import Favorite from "./companents/Favorite";
import AddPhoto from "./companents/AddPhoto";
import AgentsLesile from "./companents/AgentsLesile";
import Payment from "./Agents/Payment";
import Reatly from "./Agents/Reatly";
import LoginUser from "./companents/LoginAdmin/loginUser";
import ForgatPass from "./companents/LoginAdmin/ForgatPass";
import PassSbros from "./companents/LoginAdmin/PassSbros";
import Registration from "./companents/Registration";
import Admin from "./companents/Admin";
import ChangeProf from "./companents/ChangeProf";
import Profile from "./companents/Profile";


function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/oauth/login"} element={<Login />} />
        <Route path={"/agents"} element={<Agents />} />
        <Route path={"/buy"} element={<Buy />} />
        <Route path={"/rent"} element={<Rent />} />
        <Route path={"/favoriteSetings"} element={<FavoriteSetings />} />
        <Route path={"/dream"} element={<Dream />} />
        <Route path={"/favoriteSetings"} element={<FavoriteSetings />} />
        <Route path={"/addProperty"} element={<PaidAd />} />
        <Route path={"/reviews"} element={<Reviews />} />
        <Route path={"/buyDetails"} element={<Dream />} />
        <Route path={"/rentDetails"} element={<Dream />} />
        <Route path={"/owner"} element={<Favorite />} />
        <Route path={"/addphoto"} element={<AddPhoto />} />
        <Route path={"/becomeagent"} element={<AgentsLesile />} />
        <Route path="/forgat" element={<ForgatPass />} />
        <Route path="/LoginAdmin" element={<LoginUser />} />
        <Route path="/passSbros" element={<PassSbros />} />
        <Route path="/oauth/register" element={<Registration />} />
        <Route path={"/reatly"} element={<Reatly />} />
        <Route path={"/payment"} element={<Payment />} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/change-profil"} element={<ChangeProf/>} />
        <Route path={"/change-profil/profil-setings"} element={<Profile/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

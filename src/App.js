import './App.scss';
import Header from "./companents/Header";
import {Route, Routes} from "react-router-dom";
import Footer from "./companents/Footer";
import Home from "./companents/Home";
import Login from "./companents/Login/login";
import Agents from "./companents/Agents/agents";
import Reviews from "./companents/Reviews/reviews"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/agents'} element={<Agents/>}/>
        <Route path={'/reviews'} element={<Reviews/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

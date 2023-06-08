import './App.scss';
import Header from "./companents/Header";
import {Route, Routes} from "react-router-dom";
import Footer from "./companents/Footer";
import Home from "./companents/Home";
import Login from "./companents/Login/login";
import Agents from "./companents/Agents/agents";
import Buy from "./companents/Buy";
import Dream from "./companents/Buy/detailebuy";
import Wifi from "./companents/Buy/detailebuy/tv";
import Rent from "./companents/Buy/Rent";

function App() {
  return (
    <div className="App">
      <Header/>
        {/*<Dream/>*/}
        {/*<Wifi/>*/}
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/agents'} element={<Agents/>}/>
          <Route path={'/buy'} element={<Buy/>}/>
          <Route path={'/rent'} element={<Rent/>}/>


      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

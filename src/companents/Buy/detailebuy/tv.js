import React from 'react';
// import { Map, Googl eApiWrapper } from 'google-maps-react';

import {BsDoorClosed} from "react-icons/bs";
import {LuMicrowave} from "react-icons/lu";
import { FaWifi} from "react-icons/fa";
import {GiWashingMachine} from "react-icons/gi";
import {TbAirConditioning} from "react-icons/tb";
import man from "../../../img/man.svg"
import {IoLogoNoSmoking} from "react-icons/io";
import {AiOutlineSound} from "react-icons/ai";
import {Link} from "react-router-dom";


const Wifi = () => {
    return (
        <div id='owner'>
            <div className="container">
                <div className="owner">

                    <div className="owner--tv">
                       <div className='owner--tv__how'>
                           <div className='owner--tv__how--log'>
                               <h1>Amenities</h1>
                           </div>
                           <div className='owner--tv__how--con'>
                               <div>
                                   <h2> <BsDoorClosed/> Balkony</h2>
                                   <h2> <LuMicrowave/> Microwave </h2>
                                   <h2> <FaWifi/> WiFi</h2>
                               </div>
                               <div>
                                   <h2>Covered parking </h2>
                                   <h2>  Central heating</h2>
                                   <h2>TV</h2>
                               </div>
                              <div>
                                  <h2> <GiWashingMachine/> Washing machine</h2>
                                  <h2> <TbAirConditioning/> Air-conditioner</h2>
                              </div>
                           </div>
                       </div>
                        <div className='owner--tv__timur'>
                            <div className='owner--tv__timur--pov'>
                                <h1>Owner</h1>
                            </div>
                            <img src={man} alt=""/>
                            <Link to={'/owner'}><h3>Timur Timurov</h3></Link>
                            <Link to={'/owner'}><div><button>Contact owner</button></div></Link>
                        </div>
                    </div>

                    <div className='owner--rules'>
                        <h4>House roules</h4>
                        <div className='owner--rules__to'>
                            <p> <IoLogoNoSmoking/> Smoking in the  apartment</p>
                            <p> <AiOutlineSound/> Listen to music loudly</p>
                        </div>
                    </div>

                    <div className='owner--maps'>
                        <div className='owner--maps__st'>
                            {/*<iframe*/}
                            {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.8375848408004!2d74.61053964250934!3d42.876272098112274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c722e4dfc9%3A0x16c010462673e2fa!2z0KLQoNCmINCT0KPQnA!5e0!3m2!1sru!2skg!4v1686157650628!5m2!1sru!2skg"*/}
                            {/*    width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"*/}
                            {/*    referrerPolicy="no-referrer-when-downgrade"></iframe>*/}
                        </div>
                        <div></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Wifi;
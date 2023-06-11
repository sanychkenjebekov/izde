import React from 'react';
// import { Map, Googl eApiWrapper } from 'google-maps-react';

import {BsDoorClosed} from "react-icons/bs";
import {LuMicrowave} from "react-icons/lu";
import {FaWifi} from "react-icons/fa";
import {GiWashingMachine} from "react-icons/gi";
import {TbAirConditioning} from "react-icons/tb";
import man from "../../../img/man.svg"
import {IoLogoNoSmoking} from "react-icons/io";
import {AiOutlineSound} from "react-icons/ai";
import miroom from "../../../img/miroom.png"
import miroom2 from "../../../img/miroom2.png"
import miroom3 from "../../../img/miroom3.png"
import Swip from "./swip";


const Wifi = () => {
    return (
        <>
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
                                        <h2><BsDoorClosed/> Balkony</h2>
                                        <h2><LuMicrowave/> Microwave </h2>
                                        <h2><FaWifi/> WiFi</h2>
                                    </div>
                                    <div>
                                        <h2>Covered parking </h2>
                                        <h2> Central heating</h2>
                                        <h2>TV</h2>
                                    </div>
                                    <div>
                                        <h2><GiWashingMachine/> Washing machine</h2>
                                        <h2><TbAirConditioning/> Air-conditioner</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='owner--tv__timur'>
                                <div className='owner--tv__timur--pov'>
                                    <h1>Owner</h1>
                                </div>
                                <img src={man} alt=""/>
                                <h3>Timur Timurov</h3>
                                <div>
                                    <button>Contact owner</button>
                                </div>
                            </div>
                        </div>

                        <div className='owner--rules'>
                            <h4>House roules</h4>
                            <div className='owner--rules__to'>
                                <p><IoLogoNoSmoking/> Smoking in the apartment</p>
                                <p><AiOutlineSound/> Listen to music loudly</p>
                            </div>
                        </div>

                        <div className='owner--maps'>
                            <div className='owner--maps__st'>
                                <iframe
                                    title="Google Map"
                                    width="600"
                                    height="450"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193848.87686173244!2dLONGITUDE!3dLATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU3JzUwLjEiTiA2MMKwMzgnNTAuMiJF!5e0!3m2!1sen!2sus!4v1604986943884!5m2!1sen!2sus"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className='owner--maps__shan'>
                                <img src={miroom} alt=""/>
                                <img src={miroom2} alt=""/>
                                <img src={miroom3} alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/*<Swip/>*/}
        </>
    );
};

export default Wifi;
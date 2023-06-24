import React from 'react';
import {MdLocationOn, MdPets} from "react-icons/md";
import {BsDoorClosed, BsThermometerHalf} from "react-icons/bs";
import {LuMicrowave} from "react-icons/lu";
import {BiWifi} from "react-icons/bi";
import {TbAirConditioning, TbParking} from "react-icons/tb";
import {GiWashingMachine} from "react-icons/gi";
import {GrCafeteria} from "react-icons/gr";
import {FaSwimmingPool} from "react-icons/fa";
import {CgGym} from "react-icons/cg";

const Series = () => {
    return (
        <div id='series'>
            <div className="container">
                <div className="series">
                    <div className="series--main">
                       <div className="series--main__right">
                           <div className="series--main__right--elit">
                               <h3>Series</h3>
                               <div className="series--main__right--elit__btn">
                                   <button>Elite</button>
                                   <button>105</button>
                                   <button>106</button>
                                   <button>104</button>
                                   <button>Individual project</button>
                               </div>
                           </div>
                           <div className="series--main__right--number">
                               <h3>Number of room</h3>
                               <div className="series--main__right--number__btn">
                                   <button>1</button>
                                   <button>2</button>
                                   <button>3</button>
                                   <button>4</button>
                                   <button>5</button>
                                   <button>6+</button>
                               </div>

                           </div>
                        <div className="series--main__right--bathroom">
                            <h3>Bathroom</h3>
                            <div className="series--main__right--bathroom__btn">
                                <button>Combined</button>
                                <button>Separate</button>
                            </div>
                        </div>
                           <div className="series--main__right--parking">
                               <h3>Type of parking</h3>
                               <div className="series--main__right--parking__btn">
                                   <button>Ground</button>
                                   <button>Underground</button>
                                   <button>No</button>
                               </div>
                           </div>
                           <div className="series--main__right--location">
                               <h3>Location:</h3>
                               <div className="series--main__right--location__btn">
                                   <select>
                                       <option><MdLocationOn/>Bishkek</option>
                                       <option><MdLocationOn/>Osh</option>
                                   </select>
                               </div>
                           </div>
                           <div className="series--main__right--square">
                               <h3>Square:</h3>
                               <div className="series--main__right--square__btn">
                                   <input type="text"/>
                               </div>
                           </div>
                           <div className="series--main__right--floor">
                               <h3>Floor</h3>
                               <div className="series--main__right--floor__btn">
                                   <input type="number"/> of <input type="number"/>
                               </div>
                           </div>
                           <div className="series--main__right--price">
                               <h3>Price</h3>
                           <div className="series--main__right--price__btn">
                               <input type="number"/>
                           </div>
                           </div>
                           <div className="series--main__right--about">
                               <h3>About property </h3>
                               <div className="series--main__right--about__btn">
                                   <textarea></textarea>
                               </div>
                           </div>
                       </div>
                        <div className="series--main__left">
                            <h3>Aminities:</h3>
                            <div className="series--main__left--checkbox">
                                <div className="series--main__left--checkbox__card">
                                    <input type="checkbox"/>
                                    <p><BsDoorClosed/>Balkony</p>
                                </div>
                                <div className="series--main__left--checkbox__card">
                                    <input type="checkbox"/>
                                    <p><LuMicrowave/>Microwave</p>
                                </div>
                                <div className="series--main__left--checkbox__card">
                                    <input type="checkbox"/>
                                    <p><BiWifi/>WiFi</p>
                                </div>
                                <div className="series--main__left--checkbox__card">
                                    <input type="checkbox"/>
                                    <p><TbParking/>Covered parking</p>
                                </div>
                                <div className="series--main__left--checkbox__card">
                                    <input type="checkbox"/>
                                    <p><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 14H19C19.2652 14 19.5196 14.1054 19.7071 14.2929C19.8946 14.4804 20 14.7348 20 15C20 15.2652 19.8946 15.5196 19.7071 15.7071C19.5196 15.8946 19.2652 16 19 16H1C0.734784 16 0.48043 15.8946 0.292893 15.7071C0.105357 15.5196 0 15.2652 0 15C0 14.7348 0.105357 14.4804 0.292893 14.2929C0.48043 14.1054 0.734784 14 1 14ZM2 0H18C18.5304 0 19.0391 0.210714 19.4142 0.585786C19.7893 0.960859 20 1.46957 20 2V12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8946 19.2652 13 19 13H1C0.734784 13 0.48043 12.8946 0.292893 12.7071C0.105357 12.5196 0 12.2652 0 12V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0V0ZM18 11V2H2V11H18Z" fill="#004A60"/>
                                    </svg>
                                        TV</p>
                                </div>
                                <div className="series--main__left--checkbox__card">
                                    <input type="checkbox"/>
                                    <p><BsThermometerHalf/>Central heating</p>
                                </div>
                                <div className="series--main__left--checkbox__card">
                                    <input type="checkbox"/>
                                    <p><GiWashingMachine/>Washing machine</p>
                                </div>
                                <div className="series--main__left--checkbox__card">
                                    <input type="checkbox"/>
                                    <p><TbAirConditioning/>Air-conditioner</p>
                                </div>
                                <div className="series--main__left--checkbox__card">
                                    <input type="checkbox"/>
                                    <p><GrCafeteria/>Tableware</p>
                                </div>
                                <div className="series--main__left--checkbox__card">
                                    <input type="checkbox"/>
                                    <p><FaSwimmingPool/>Swimming pool</p>
                                </div>
                                <div className="series--main__left--checkbox__card">
                                    <input type="checkbox"/>
                                    <p><CgGym/>Gym</p>
                                </div>
                                <div className="series--main__left--checkbox__card">
                                    <input type="checkbox"/>
                                    <p><MdPets/>Pet friendly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='series--btn'>Send to admin</button>
                </div>
            </div>
        </div>
    );
};

export default Series;
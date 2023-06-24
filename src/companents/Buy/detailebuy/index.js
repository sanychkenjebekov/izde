import React, {useState} from 'react';
import one from "../../../img/one.png"
import two from "../../../img/two.png"
import three from "../../../img/three.png"
import four from "../../../img/four.png"
import five from "../../../img/five.png"
import {BsBookmark, BsBuilding, BsBuildings, BsFillBookmarkFill, BsPersonAdd} from "react-icons/bs";
import {FaBath, FaVectorSquare} from "react-icons/fa";
import {BiBed, BiHomeAlt2} from "react-icons/bi";
import Tv from "./tv";
import Swip from "./swip";
import "./media.scss"


const Dream = () => {
    const [img, setImg] = useState(one)
    const [fav, setFav] = useState(false)
    return (
        <>

        <div id="dream">
            <div className="container">
                <div className="dream">
                    <h1>Rent a dream apartment</h1>
                    <div className="dream--photos">
                        <img width={561} height={375} style={{borderRadius:'20px 0 0 20px'}} src={img} alt=""/>
                        <div className='dream--photos__four'>
                            <img onClick={()=>setImg(two)} src={two} alt=""/>
                            <img onClick={()=>setImg(five)} src={five} alt=""/>
                            <img onClick={()=>setImg(three)} src={three} alt=""/>
                            <img onClick={()=>setImg(four)} src={four} alt=""/>
                        </div>
                    </div>
                    <div className='dream--texts'>
                        {fav ?
                            <h2 onClick={()=>setFav(false)}>The Grand Estate <BsFillBookmarkFill/></h2>
                            :
                            <h2 onClick={()=>setFav(true)}>The Grand Estate <BsBookmark/></h2>
                        }

                        <div className='dream--texts__text'>
                            <div className='dream--texts__text--room'>
                                <h3><BiHomeAlt2/> Apartment</h3>
                                <h3><FaVectorSquare/> Square: 120 m2</h3>
                                </div>
                                <div className='dream--texts__text--room'>
                                    <h3><BiBed/> 1 Bedroom</h3>
                                    <h3><FaBath/> 1 Bathroom</h3>
                                </div>
                                <div className='dream--texts__text--room'>
                                    <h3>Furnished</h3>

                                    <h3><BsBuilding/> Floor:3 of 12</h3>
                                </div>
                                <div className='dream--texts__text--room'>
                                    <h3><BsPersonAdd/> Without settlement</h3>
                                    <h3><BsBuildings/> Serie: Elite</h3>
                                </div>
                            </div>

                            <div className='dream--texts__stay'>
                                <div>
                                    <p>The unsurpassed panoramic view into the horizon, where earth and sky embrace, and the
                                        enticing summer breeze, offer moments of unique relaxation and wellbeing. The calm
                                        design of the property, combined with the harmonious synthesis of natural material,
                                        and the exceptional landscape of Aleomandra, complete this luxurious setting. <br/>
                                        The location of Untold Mykonos is ideal. It offers absolute privacy and tranquillity
                                        to guests, only 200 meters from the serene, crystal clear Glyfadi beach, and has
                                        direct access to tourist amenities.
                                    </p>
                                </div>
                                <div className='dream--texts__stay--second'>
                                    <div className='dream--texts__stay--second__mini'>
                                        <h4>60 000com <span>/month</span></h4>
                                        <div className='dream--texts__stay--second__mini--bi'>
                                            <div className='dream--texts__stay--second__mini--bi__do'>
                                                <h5>Minimum stay</h5>
                                                <p>6 month</p>
                                            </div>

                                            <div className='dream--texts__stay--second__mini--bi__do'>
                                                <h5>Deposit</h5>
                                                <p>20 000 с</p>
                                            </div>
                                        </div>
                                        <button>Contact owner</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tv/>
            <Swip/>
        </>
    );
};

export default Dream;
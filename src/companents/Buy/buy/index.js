import React from 'react';
import {FiSearch} from "react-icons/fi";
import "../style.scss"
import {AiFillCheckCircle} from "react-icons/ai";
import {RiMedalFill} from "react-icons/ri";
import flat from "../../../img/flat.png"
import "./media.scss"
import svg from "../../../img/svg.svg"
import {FaBath, FaVectorSquare} from "react-icons/fa";
import {BiBed} from "react-icons/bi";
import {Link} from "react-router-dom";

const Buy = () => {
    return (
        <div id='buy'>
            <div className="container">
                <div className="buy">
                    <div className="buy--inputs">
                        <div className='buy--inputs__pro'>
                            <div className="buy--inputs__pro--add">
                                <input type="text" placeholder="Enter an address or city "/>
                                <div className='buy--inputs__pro--add__bs'>
                                    <button> <FiSearch/> Search</button>
                                </div>
                            </div>
                        </div>

                        <div className="buy--inputs__sell">
                            <div>
                                <select className='buy--inputs__sell--to'>
                                    <option> <img src={svg} alt=""/> Property type</option>
                                    <option value="Property type">Property type</option>
                                </select>
                            </div>
                            <select  className='buy--inputs__sell--cup'>
                                <option>Property type</option>
                            </select>
                            <select  className='buy--inputs__sell--cup'>
                                <option>Property type</option>
                            </select>
                        </div>
                    </div>
                    <div className="buy--red">
                        <div className='buy--red__btn'>
                            <button>SUPERAGENTS <RiMedalFill/> </button>
                            <button className='buy--red__btn--name'>VERIFIED <AiFillCheckCircle/> </button>
                        </div>
                        <div className='buy--red__text'>
                            <h1>Sort by:</h1>
                            <select>
                                <option value="">Featured</option>
                            </select>
                        </div>
                    </div>
                    <Link to={'/buyDetails'}><div className='buy--more'>
                        <div>
                            <Link to={`/dream`}>
                                <div className='buy--more__card'>
                                    <div className='buy--more__card--into'>
                                        <div className='buy--more__card--into__flat'>
                                            <img className='buy--more__card--into__flat--img' src={flat} alt=""/>
                                        </div>
                                        <div className='buy--more__card--into__right'>
                                            <div className='buy--more__card--into__right--one'>
                                                <h2>Apartment</h2>
                                                <h3>The Grand Estate</h3>
                                            </div>
                                            <div className='buy--more__card--into__right--two'>
                                                <span> <FaBath/> 1 Bathroom <br/> <BiBed/> 1 Bedroom</span>
                                                <span> <FaVectorSquare/> Square: 120 m2</span>
                                            </div>

                                            <div className='buy--more__card--into__right--three'>
                                                <h4>Bishkek</h4>
                                                <span>$ 100 000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className='buy--more__card'>
                                <div className='buy--more__card--into'>
                                    <div className='buy--more__card--into__flat'>
                                        <img className='buy--more__card--into__flat--img' src={flat} alt=""/>
                                    </div>
                                    <div className='buy--more__card--into__right'>
                                        <div className='buy--more__card--into__right--one'>
                                            <h2>Apartment</h2>
                                            <h3>The Grand Estate</h3>
                                        </div>
                                        <div className='buy--more__card--into__right--two'>
                                            <span> <FaBath/> 1 Bathroom <br/> <BiBed/> 1 Bedroom</span>
                                            <span> <FaVectorSquare/> Square: 120 m2</span>
                                        </div>

                                        <div className='buy--more__card--into__right--three'>
                                            <h4>Bishkek</h4>
                                            <span>$ 100 000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='buy--more__card'>
                                <div className='buy--more__card--into'>
                                    <div className='buy--more__card--into__flat'>
                                        <img className='buy--more__card--into__flat--img' src={flat} alt=""/>
                                    </div>
                                    <div className='buy--more__card--into__right'>
                                        <div className='buy--more__card--into__right--one'>
                                            <h2>Apartment</h2>
                                            <h3>The Grand Estate</h3>
                                        </div>
                                        <div className='buy--more__card--into__right--two'>
                                            <span> <FaBath/> 1 Bathroom <br/> <BiBed/> 1 Bedroom</span>
                                            <span> <FaVectorSquare/> Square: 120 m2</span>
                                        </div>

                                        <div className='buy--more__card--into__right--three'>
                                            <h4>Bishkek</h4>
                                            <span>$ 100 000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='buy--more__card'>
                                <div className='buy--more__card--into'>
                                    <div className='buy--more__card--into__flat'>
                                        <img className='buy--more__card--into__flat--img' src={flat} alt=""/>
                                    </div>
                                    <div className='buy--more__card--into__right'>
                                        <div className='buy--more__card--into__right--one'>
                                            <h2>Apartment</h2>
                                            <h3>The Grand Estate</h3>
                                        </div>
                                        <div className='buy--more__card--into__right--two'>
                                            <span> <FaBath/> 1 Bathroom <br/> <BiBed/> 1 Bedroom</span>
                                            <span> <FaVectorSquare/> Square: 120 m2</span>
                                        </div>

                                        <div className='buy--more__card--into__right--three'>
                                            <h4>Bishkek</h4>
                                            <span>$ 100 000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='buy--more__card'>
                                <div className='buy--more__card--into'>
                                    <div className='buy--more__card--into__flat'>
                                        <img className='buy--more__card--into__flat--img' src={flat} alt=""/>
                                    </div>
                                    <div className='buy--more__card--into__right'>
                                        <div className='buy--more__card--into__right--one'>
                                            <h2>Apartment</h2>
                                            <h3>The Grand Estate</h3>
                                        </div>
                                        <div className='buy--more__card--into__right--two'>
                                            <span> <FaBath/> 1 Bathroom <br/> <BiBed/> 1 Bedroom</span>
                                            <span> <FaVectorSquare/> Square: 120 m2</span>
                                        </div>

                                        <div className='buy--more__card--into__right--three'>
                                            <h4>Bishkek</h4>
                                            <span>$ 100 000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='buy--more__card'>
                                <div className='buy--more__card--into'>
                                    <div className='buy--more__card--into__flat'>
                                        <img className='buy--more__card--into__flat--img' src={flat} alt=""/>
                                    </div>
                                    <div className='buy--more__card--into__right'>
                                        <div className='buy--more__card--into__right--one'>
                                            <h2>Apartment</h2>
                                            <h3>The Grand Estate</h3>
                                        </div>
                                        <div className='buy--more__card--into__right--two'>
                                            <span> <FaBath/> 1 Bathroom <br/> <BiBed/> 1 Bedroom</span>
                                            <span> <FaVectorSquare/> Square: 120 m2</span>
                                        </div>

                                        <div className='buy--more__card--into__right--three'>
                                            <h4>Bishkek</h4>
                                            <span>$ 100 000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='buy--more__card'>
                                <div className='buy--more__card--into'>
                                    <div className='buy--more__card--into__flat'>
                                        <img className='buy--more__card--into__flat--img' src={flat} alt=""/>
                                    </div>
                                    <div className='buy--more__card--into__right'>
                                        <div className='buy--more__card--into__right--one'>
                                            <h2>Apartment</h2>
                                            <h3>The Grand Estate</h3>
                                        </div>
                                        <div className='buy--more__card--into__right--two'>
                                            <span> <FaBath/> 1 Bathroom <br/> <BiBed/> 1 Bedroom</span>
                                            <span> <FaVectorSquare/> Square: 120 m2</span>
                                        </div>

                                        <div className='buy--more__card--into__right--three'>
                                            <h4>Bishkek</h4>
                                            <span>$ 100 000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='buy--more__card'>
                                <div className='buy--more__card--into'>
                                    <div className='buy--more__card--into__flat'>
                                        <img className='buy--more__card--into__flat--img' src={flat} alt=""/>
                                    </div>
                                    <div className='buy--more__card--into__right'>
                                        <div className='buy--more__card--into__right--one'>
                                            <h2>Apartment</h2>
                                            <h3>The Grand Estate</h3>
                                        </div>
                                        <div className='buy--more__card--into__right--two'>
                                            <span> <FaBath/> 1 Bathroom <br/> <BiBed/> 1 Bedroom</span>
                                            <span> <FaVectorSquare/> Square: 120 m2</span>
                                        </div>

                                        <div className='buy--more__card--into__right--three'>
                                            <h4>Bishkek</h4>
                                            <span>$ 100 000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className='buy--more__sale'>
                            <hr/>
                            <div className='buy--more__sale--nine'>
                                <h5>Popular Searches</h5>
                                <a href="src/companents/Buy/buy/index#">Properties for sale</a>
                                <a href="src/companents/Buy/buy/index#">Apartments for sale</a>
                                <a href="src/companents/Buy/buy/index#">Villas for sale</a>
                                <a href="src/companents/Buy/buy/index#">Townhouses for sale</a>
                                <a href="src/companents/Buy/buy/index#">Compounds for sale</a>
                                <a href="src/companents/Buy/buy/index#">Duplexes for sale</a>
                                <a href="src/companents/Buy/buy/index#">Land for sale</a>
                                <a href="src/companents/Buy/buy/index#">Hotel Apartments for sale</a>
                            </div>
                        </div>
                    </div></Link>
                    <div className='buy--num'>
                        <div className='buy--num__he'>
                            <h6>1</h6>
                        </div>
                        <div className='buy--num__be'>
                            <p>2</p>
                        </div>
                        <div className='buy--num__be'>
                            <p>3</p>
                        </div>
                        <div className='buy--num__be'>
                            <p>4</p>
                        </div>
                        <div className='buy--num__be'>
                            <p>5</p>
                        </div>
                        <div className='buy--num__be'>
                            <p>6</p>
                        </div>
                        <div className='buy--num__be'>
                            <p>7</p>
                        </div>
                        <div className='buy--num__be'>
                            <p>8</p>
                        </div>
                        <div className='buy--num__be'>
                            <p>9</p>
                        </div>
                        <div className='buy--num__be'>
                            <p>10</p>
                        </div>
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buy;
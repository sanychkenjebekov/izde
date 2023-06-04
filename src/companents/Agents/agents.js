import React from "react";
import {CiSearch} from 'react-icons/ci'
import './agents.scss'
import './media.scss'
import card from '../../img/card.jpg'



const Agents = () => {
    return (
        <div id='agent'>
            <section id="agents">
                <div className="container">
                    <div className="agents">
                        <h1>Find your agent to find your home</h1>
                        <div className="agents__block">
                            <div className="agents__block--search">
                                <input className="none" placeholder='Enter an address or city ' type="text"/>
                                <div className="agents__block--search-icon">
                                    <input placeholder='Name or the location of the agent' type="text"/>
                                    <button><CiSearch className='icon'/> Search</button>
                                </div>
                            </div>
                            <select className="section0">
                                <option>Language</option>
                            </select>
                            <select className='section2'>
                                <option>Natinality</option>
                            </select>
                            <div className="section">
                                <select className="sec">
                                    <option>Language</option>
                                </select>
                                <select className="sec">
                                    <option>Service</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section id="hero">
                <div className="container">
                    <div className="hero">
                        <div className="hero__card">
                            <img src={card} alt=""/>
                            <h1>Leslie Alexander</h1>
                            <span>SENIOR PROPERTY ADVISOR</span>
                            <button>SUPERAGENT</button>
                        </div>
                        <div className="hero__card">
                            <img src={card} alt=""/>
                            <h1>Leslie Alexander</h1>
                            <span>SENIOR PROPERTY ADVISOR</span>
                            <button>SUPERAGENT</button>
                        </div>
                        <div className="hero__card">
                            <img src={card} alt=""/>
                            <h1>Leslie Alexander</h1>
                            <span>SENIOR PROPERTY ADVISOR</span>
                            <button>SUPERAGENT</button>
                        </div>
                        <div className="hero__card">
                            <img src={card} alt=""/>
                            <h1>Leslie Alexander</h1>
                            <span>SENIOR PROPERTY ADVISOR</span>
                            <button>SUPERAGENT</button>
                        </div>
                        <div className="hero__card">
                            <img src={card} alt=""/>
                            <h1>Leslie Alexander</h1>
                            <span>SENIOR PROPERTY ADVISOR</span>
                            <button>SUPERAGENT</button>
                        </div>
                        <div className="hero__card">
                            <img src={card} alt=""/>
                            <h1>Leslie Alexander</h1>
                            <span>SENIOR PROPERTY ADVISOR</span>
                            <button>SUPERAGENT</button>
                        </div>
                        <div className="hero__card">
                            <img src={card} alt=""/>
                            <h1>Leslie Alexander</h1>
                            <span>SENIOR PROPERTY ADVISOR</span>
                            <button>SUPERAGENT</button>
                        </div>
                        <div className="hero__card">
                            <img src={card} alt=""/>
                            <h1>Leslie Alexander</h1>
                            <span>SENIOR PROPERTY ADVISOR</span>
                            <button>SUPERAGENT</button>
                        </div>
                    </div>
                    <div className='button'>
                        <button>See more</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Agents;

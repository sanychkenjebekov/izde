import React, {useState} from 'react';
import lilo from "../../img/lilo.svg"
import girle from "../../img/girle.svg"
import "../style.scss"
import {FiMessageSquare} from "react-icons/fi";
import {TbHomeDollar} from "react-icons/tb";
import {BsCheckCircleFill, BsCurrencyDollar, BsPerson, BsSearch} from "react-icons/bs";
import {IoSettingsOutline} from "react-icons/io5";
import {HiOutlineArrowUturnLeft} from "react-icons/hi2";
import {RiVisaLine} from "react-icons/ri";
import {HiClock, HiFlag} from "react-icons/hi";
import {AiFillMinusCircle} from "react-icons/ai";
import real from "../../img/real.svg"
import real2 from "../../img/real2.svg"
import real3 from "../../img/real3.svg"
import real4 from "../../img/real4.svg"
import {Link} from "react-router-dom";


const Reatly = () => {
    return (
        <div id='payment'>
            <div className="container">
                <div className="payment">
                    <div className='left'>
                        <div className="payment--all">
                            <img src={lilo} alt=""/>
                        </div>
                        <div className='Payment--second'>
                            <div className='payment--second__profile'>
                                <img src={girle} alt=""/>
                                <div className='payment--second__profile--die'>
                                    <h1>Lesliep</h1>
                                    <p>Admin</p>
                                </div>
                            </div>
                            <div className='payment--second__ment'>
                                <button className="payment--second__ment--btn"> <FiMessageSquare/>  Inbox </button>
                                <button className="payment--second__ment--btn"> <BsPerson/>  Agents </button>
                                <button className="payment--second__ment--tv"> <TbHomeDollar/>  Realty </button>
                                <Link to={'/payment'}>
                                    <button className="payment--second__ment--btn"> <BsCurrencyDollar/>  Payment </button>
                                </Link>
                            </div>
                        </div>
                        <div className='payment--set'>
                            <h3> <IoSettingsOutline/>  Settings</h3>
                            <h4> <HiOutlineArrowUturnLeft/>  Logout</h4>
                        </div>
                    </div>
                    <div className='payment--right'>
                        <div className='payment--right__search'>
                            <div className='payment--right__search--two'>
                                <input type="text" placeholder='Search'/>
                                <BsSearch/>
                            </div>
                            <div>
                                <select>
                                    <option>English</option>
                                    <option>Russian</option>
                                    <option>Kyrgyz</option>
                                </select>
                            </div>

                            {/*<div style={{margin: 20, width: 200}}>*/}
                            {/*    <select option={options} defaultValue={value} onChange={setValue()}/>*/}
                            {/*</div>*/}

                        </div>



                        <div className='payment--right__pane'>
                            <h1>Eleanor Pane</h1>
                            <h2>Application for confirmation of publication...</h2>
                            <div className='payment--right__pane--june'>
                                <h3>sat 17 June</h3>
                                <p>12:00 PM</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='payment--right__pane'>
                            <h1>Jenny Wilson</h1>
                            <h2>Application for confirmation of publication...</h2>
                            <div className='payment--right__pane--june'>
                                <h3>sat 17 June</h3>
                                <p>12:00 PM</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='payment--right__pane'>
                            <h1>Leslie Alexander</h1>
                            <h2>Application for confirmation of publication...</h2>
                            <div className='payment--right__pane--june'>
                                <h3>sat 17 June</h3>
                                <p>12:00 PM</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='payment--right__pane'>
                            <h1>Leslie Alexander</h1>
                            <h2>Application for confirmation of publication...</h2>
                            <div className='payment--right__pane--june'>
                                <h3>sat 17 June</h3>
                                <p>12:00 PM</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='payment--right__pane'>
                            <h1>Albert Flores</h1>
                            <h2>Application for confirmation of publication...</h2>
                            <div className='payment--right__pane--june'>
                                <h3>sat 17 June</h3>
                                <p>12:00 PM</p>
                            </div>
                        </div>
                        <hr/>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reatly;
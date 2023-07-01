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
import usa from "../../img/usa.svg"
import {Link} from "react-router-dom";


const Payment = () => {


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
                               <Link to={'/reatly'}>
                                   <button className="payment--second__ment--btn"> <TbHomeDollar/>  Realty </button>
                               </Link>
                               <button className="payment--second__ment--tv"> <BsCurrencyDollar/>  Payment </button>
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

                        <div className='payment--right__sms'>
                            <h5>06c1774-7f3d-46ad...90a8</h5>
                            <span> <BsCheckCircleFill/> Succeeded</span>
                            <h6>$19,623.00 <span>USD</span></h6>
                            <h6> <RiVisaLine/> •••• 4242</h6>
                            <h6>Mar 23, 2022, 13:00 PM</h6>
                        </div>
                        <div className='payment--right__sms'>
                            <h5>06c1774-7f3d-46ad...90a8</h5>
                            <h7> <HiClock/> Pending</h7>
                            <h6>$19,623.00 <span>USD</span></h6>
                            <h6>  <img src={real} alt=""/> •••• 4242</h6>
                            <h6>Mar 23, 2022, 13:00 PM</h6>
                        </div>
                        <div className='payment--right__sms'>
                            <h5>06c1774-7f3d-46ad...90a8</h5>
                            <h3> <AiFillMinusCircle/> Declined</h3>
                            <h6>$19,623.00 <span>USD</span></h6>
                            <h6><img src={real2} alt=""/>•••• 4242</h6>
                            <h6>Mar 23, 2022, 13:00 PM</h6>
                        </div>
                        <div className='payment--right__sms'>
                        <h5>06c1774-7f3d-46ad...90a8</h5>
                        <span> <BsCheckCircleFill/> Succeeded</span>
                        <h6>$19,623.00 <span>USD</span></h6>
                        <h6><img src={real3} alt=""/> •••• 4242</h6>
                        <h6>Mar 23, 2022, 13:00 PM</h6>
                    </div>
                        <div className='payment--right__sms'>
                            <h5>06c1774-7f3d-46ad...90a8</h5>
                            <h2> <HiFlag/> Create</h2>
                            <h6>$19,623.00 <span>USD</span></h6>
                            <h6><img src={real4} alt=""/> •••• 4242</h6>
                            <h6>Mar 23, 2022, 13:00 PM</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
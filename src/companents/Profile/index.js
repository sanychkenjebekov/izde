import React from 'react';
import Picture from "../../img/profile picture.svg"
import {AiOutlineArrowLeft} from "react-icons/ai";
import {CiSaveDown2} from "react-icons/ci";
import {PiPencilSimpleLine} from "react-icons/pi";
import {RiShoppingBasketLine} from "react-icons/ri";


const Profile = () => {
    return (
        <div id='profile'>
            <div className="container">
                <div className='first'>
                    <div className='icons'>
                        <AiOutlineArrowLeft className='icons--arrow'/>
                        <div className='three'>
                            <CiSaveDown2 className='three--down'/>
                            <PiPencilSimpleLine className='three--pencil'/>
                            <RiShoppingBasketLine className='three--basket'/>
                        </div>
                    </div>

                    <div className='picture'>
                        <img src={Picture} alt="" className='picture--image'/>
                        <div className='divs'>
                            <div className='line'>
                                <input type='nam=' placeholder='Firstname Lastname' className='line--inp'/>
                            </div>
                            <div className='lin'>
                                <input type="text" placeholder='Your job tittle' className='lin--inp'/>
                            </div>
                        </div>
                    </div>
                    <div className='global'>
                        <div className="contact">
                            <h1 className='contact--h1'>CONTACT</h1>
                            <input type="email" placeholder='Email' className='contact--input1'/>
                            <input type="text" placeholder='Phone No.' className='contact--input2'/>
                            <input type="text" placeholder='Areas:' className='contact--input3'/>
                        </div>
                        <div className='social'>
                            <h1 className='social--h1'>SOCIAL</h1>
                            <input type="text" className='social--input'/>
                        </div>
                    </div>
                    <div className='lines'>

                    </div>
                    <div className='works'>
                        <div className="education">
                            <div className="selected">
                                <h1 className="selected--h1">SELECTED WORK</h1>
                                <div className="inputs">
                                    <input type="text" placeholder='Work name 1' className='inputs--input1'/>
                                    {/*<input type="text"*/}
                                    {/*       placeholder='Here a short explanation about the project. Not more than 2 or 3 lines. '*/}
                                    {/*       className='inputs--input2'/>*/}
                                    <textarea placeholder='Here a short explanation about the project. Not more than 2 or 3 lines.' className='inputs--input2'></textarea>
                                    <div className='inputs--icon'>
                                        <PiPencilSimpleLine className='inputs--icon__pen' />
                                        <RiShoppingBasketLine className='inputs--icon__bas'/>
                                    </div>
                                    <input type="text" placeholder='URL to work' className='inputs--input3'/>
                                </div>
                            </div>
                            <div className='experience'>
                                <h1 className='experience--h1'>EXPERIENCE</h1>
                                <input type="text" placeholder='Job title' className='experience--4'/>
                                <input type="text" className='experience--one'/>
                                <input type="text" className='experience--two'/>
                                {/*<input type="text"*/}
                                {/*       placeholder='Here a short explanation about what you did at this company. Not more than 3 or 4 lines. '*/}
                                {/*       className='experience--three'/>*/}
                                <textarea className='experience--three' placeholder='Here a short explanation about what you did at this company. Not more than 3 or 4 lines.'></textarea>
                            </div>
                            <div className='experience--icon'>
                                <PiPencilSimpleLine className='experience--icon__pen' />
                                <RiShoppingBasketLine className='experience--icon__bas'/>
                            </div>

                            <div className='edu'>
                                <h1 className='edu--h1'>EDUCATION</h1>
                                <input type="text" placeholder="Degree & Name" className='edu--inp'/>
                                <input type="text" className='edu--inp2'/>
                            </div>
                        </div>
                        <div className='lin'>
                        </div>
                        <div className='skills'>
                            <div className='hobbies'>
                                <h1 className='hobbies--h1'>SKILLS</h1>
                                <input type="text" className='hobbies--input3'/>
                            </div>
                            <div className='hobbies'>
                                <h1 className='hobbies--h1'>LANGUAGES</h1>
                                <input type="text" className='hobbies--input3'/>
                            </div>
                            <div className='hobbies'>
                                <h1 className='hobbies--h1'>HOBBIES</h1>
                                <input type="text" className='hobbies--input3'/>
                            </div>
                        </div>
                    </div>
                    <div className='buttons'>
                        <button className='buttons--btn'>Save</button>
                        <button className='buttons--btn'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
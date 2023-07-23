import React, {useContext, useEffect, useState} from 'react';
import Picture from "../../img/profile picture.svg"
import {AiOutlineArrowLeft} from "react-icons/ai";
import {CiSaveDown2} from "react-icons/ci";
import {PiPencilSimpleLine} from "react-icons/pi";
import {RiShoppingBasketLine} from "react-icons/ri";
import {Link, useNavigate} from "react-router-dom";
import {GlobalContext} from "../../context";
import pic from '../../img/pictures.svg'

const Profile = () => {
    const {setAgentLesile, picture, setPicture,setPictureAdent} = useContext(GlobalContext)
    const nav = useNavigate()

    const change = (e) => {
        setPicture(URL.createObjectURL(e.target.files[0]))
        setPictureAdent(true)
    }
    const agentTrue = () => {
        const i1 = document.querySelector('.i1')
        const i2 = document.querySelector('.i2')
        const i3 = document.querySelector('.i3')
        const i4 = document.querySelector('.i4')
        const i5 = document.querySelector('.i5')
        const i6 = document.querySelector('.i6')
        const i7 = document.querySelector('.i7')
        const i8 = document.querySelector('.i8')
        const i9 = document.querySelector('.i9')
        const i10 = document.querySelector('.i10')
        const i11 = document.querySelector('.i11')
        const i12 = document.querySelector('.i12')
        const i13 = document.querySelector('.i13')
        const i14 = document.querySelector('.i14')
        const i15 = document.querySelector('.i15')
        const i16 = document.querySelector('.i16')
        const i17 = document.querySelector('.i17')
        const i18 = document.querySelector('.i18')
        i1.classList.add('active')
        i2.classList.add('active')
        i3.classList.add('active')
        i4.classList.add('active')
        i5.classList.add('active')
        i6.classList.add('active')
        i7.classList.add('active')
        i8.classList.add('active')
        i9.classList.add('active')
        i10.classList.add('active')
        i11.classList.add('active')
        i12.classList.add('active')
        i13.classList.add('active')
        i14.classList.add('active')
        i15.classList.add('active')
        i16.classList.add('active')
        i17.classList.add('active')
        i18.classList.add('active')
        if (i1.value.trim() !== '' && i2.value.trim() !== '' && i3.value.trim() !== '' && i4.value.trim() !== '' && i5.value.trim() !== '' && i6.value.trim() !== '' && i7.value.trim() !== '' && i8.value.trim() !== '' && i9.value.trim() !== '' && i10.value.trim() !== '' && i11.value.trim() !== '' && i12.value.trim() !== '' && i13.value.trim() !== '' && i14.value.trim() !== '' && i15.value.trim() !== '' && i16.value.trim() !== '' && i17.value.trim() !== '' && i18.value.trim() !== '') {
            setAgentLesile(true)
            nav('/change-profil')
        } else {
            if (i1.value.trim() === '') {
                i1.style.border = '0.924px solid red'
            } else {
                i1.style.border = '0.924px solid #AFC6CD'
            }
            if (i2.value.trim() === '') {
                i2.style.border = '0.924px solid red'
            } else {
                i2.style.border = '0.924px solid #AFC6CD'
            }
            if (i3.value.trim() === '') {
                i3.style.border = '0.924px solid red'
            } else {
                i3.style.border = '0.924px solid #AFC6CD'
            }
            if (i4.value.trim() === '') {
                i4.style.border = '0.924px solid red'
            } else {
                i4.style.border = '0.924px solid #AFC6CD'
            }
            if (i5.value.trim() === '') {
                i5.style.border = '0.924px solid red'
            } else {
                i5.style.border = '0.924px solid #AFC6CD'
            }
            if (i6.value.trim() === '') {
                i6.style.border = '0.924px solid red'
            } else {
                i6.style.border = '0.924px solid #AFC6CD'
            }
            if (i7.value.trim() === '') {
                i7.style.border = '0.924px solid red'
            } else {
                i7.style.border = '0.924px solid #AFC6CD'
            }
            if (i8.value.trim() === '') {
                i8.style.border = '0.924px solid red'
            } else {
                i8.style.border = '0.924px solid #AFC6CD'
            }
            if (i9.value.trim() === '') {
                i9.style.border = '0.924px solid red'
            } else {
                i9.style.border = '0.924px solid #AFC6CD'
            }
            if (i10.value.trim() === '') {
                i10.style.border = '0.924px solid red'
            } else {
                i10.style.border = '0.924px solid #AFC6CD'
            }
            if (i11.value.trim() === '') {
                i11.style.border = '0.924px solid red'
            } else {
                i11.style.border = '0.924px solid #AFC6CD'
            }
            if (i12.value.trim() === '') {
                i12.style.border = '0.924px solid red'
            } else {
                i12.style.border = '0.924px solid #AFC6CD'
            }
            if (i13.value.trim() === '') {
                i13.style.border = '0.924px solid red'
            } else {
                i13.style.border = '0.924px solid #AFC6CD'
            }
            if (i14.value.trim() === '') {
                i14.style.border = '0.924px solid red'
            } else {
                i14.style.border = '0.924px solid #AFC6CD'
            }
            if (i15.value.trim() === '') {
                i15.style.border = '0.924px solid red'
            } else {
                i15.style.border = '0.924px solid #AFC6CD'
            }
            if (i16.value.trim() === '') {
                i16.style.border = '0.924px solid red'
            } else {
                i16.style.border = '0.924px solid #AFC6CD'
            }
            if (i17.value.trim() === '') {
                i17.style.border = '0.924px solid red'
            } else {
                i17.style.border = '0.924px solid #AFC6CD'
            }
            if (i18.value.trim() === '') {
                i18.style.border = '0.924px solid red'
            } else {
                i18.style.border = '0.924px solid #AFC6CD'
            }
        }
    }
    const fullProf = () => {
        const i1 = document.querySelector('.i1')
        const i2 = document.querySelector('.i2')
        const i3 = document.querySelector('.i3')
        const i4 = document.querySelector('.i4')
        const i5 = document.querySelector('.i5')
        const i6 = document.querySelector('.i6')
        const i7 = document.querySelector('.i7')
        const i8 = document.querySelector('.i8')
        const i9 = document.querySelector('.i9')
        const i10 = document.querySelector('.i10')
        const i11 = document.querySelector('.i11')
        const i12 = document.querySelector('.i12')
        const i13 = document.querySelector('.i13')
        const i14 = document.querySelector('.i14')
        const i15 = document.querySelector('.i15')
        const i16 = document.querySelector('.i16')
        const i17 = document.querySelector('.i17')
        const i18 = document.querySelector('.i18')

        if (i1.value.trim() === '' && i1.classList.contains('active')) {
            i1.style.border = '0.924px solid red'
        } else {
            i1.style.border = '0.924px solid #AFC6CD'
        }
        if (i2.value.trim() === '' && i2.classList.contains('active')) {
            i2.style.border = '0.924px solid red'
        } else {
            i2.style.border = '0.924px solid #AFC6CD'
        }
        if (i3.value.trim() === '' && i3.classList.contains('active')) {
            i3.style.border = '0.924px solid red'
        } else {
            i3.style.border = '0.924px solid #AFC6CD'
        }
        if (i4.value.trim() === '' && i4.classList.contains('active')) {
            i4.style.border = '0.924px solid red'
        } else {
            i4.style.border = '0.924px solid #AFC6CD'
        }
        if (i5.value.trim() === '' && i5.classList.contains('active')) {
            i5.style.border = '0.924px solid red'
        } else {
            i5.style.border = '0.924px solid #AFC6CD'
        }
        if (i6.value.trim() === '' && i6.classList.contains('active')) {
            i6.style.border = '0.924px solid red'
        } else {
            i6.style.border = '0.924px solid #AFC6CD'
        }
        if (i7.value.trim() === '' && i7.classList.contains('active')) {
            i7.style.border = '0.924px solid red'
        } else {
            i7.style.border = '0.924px solid #AFC6CD'
        }
        if (i8.value.trim() === '' && i8.classList.contains('active')) {
            i8.style.border = '0.924px solid red'
        } else {
            i8.style.border = '0.924px solid #AFC6CD'
        }
        if (i9.value.trim() === '' && i9.classList.contains('active')) {
            i9.style.border = '0.924px solid red'
        } else {
            i9.style.border = '0.924px solid #AFC6CD'
        }
        if (i10.value.trim() === '' && i10.classList.contains('active')) {
            i10.style.border = '0.924px solid red'
        } else {
            i10.style.border = '0.924px solid #AFC6CD'
        }
        if (i11.value.trim() === '' && i11.classList.contains('active')) {
            i11.style.border = '0.924px solid red'
        } else {
            i11.style.border = '0.924px solid #AFC6CD'
        }
        if (i12.value.trim() === '' && i12.classList.contains('active')) {
            i12.style.border = '0.924px solid red'
        } else {
            i12.style.border = '0.924px solid #AFC6CD'
        }
        if (i13.value.trim() === '' && i13.classList.contains('active')) {
            i13.style.border = '0.924px solid red'
        } else {
            i13.style.border = '0.924px solid #AFC6CD'
        }
        if (i14.value.trim() === '' && i14.classList.contains('active')) {
            i14.style.border = '0.924px solid red'
        } else {
            i14.style.border = '0.924px solid #AFC6CD'
        }
        if (i15.value.trim() === '' && i15.classList.contains('active')) {
            i15.style.border = '0.924px solid red'
        } else {
            i15.style.border = '0.924px solid #AFC6CD'
        }
        if (i16.value.trim() === '' && i16.classList.contains('active')) {
            i16.style.border = '0.924px solid red'
        } else {
            i16.style.border = '0.924px solid #AFC6CD'
        }
        if (i17.value.trim() === '' && i17.classList.contains('active')) {
            i17.style.border = '0.924px solid red'
        } else {
            i17.style.border = '0.924px solid #AFC6CD'
        }
        if (i18.value.trim() === '' && i18.classList.contains('active')) {
            i18.style.border = '0.924px solid red'
        } else {
            i18.style.border = '0.924px solid #AFC6CD'
        }

    }
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
                        <div className="picture--i">
                            <img src={picture} alt="" className='picture--image'/>
                            <img style={{position: 'absolute', margin: '115px 0 0 -55px', zIndex: '0'}} src={pic}
                                 alt=""/>
                            <input onChange={change} style={{
                                position: 'absolute',
                                width: '125px',
                                margin: '0 0 0 -130px',
                                padding: '50px 0 70px 0',
                                cursor: 'pointer',
                                opacity: '0',
                                zIndex: '1'
                            }} type="file"/>
                        </div>
                        <div className='divs'>
                            <div className='line'>
                                <input onInput={fullProf} type='nam=' placeholder='Firstname Lastname'
                                       className='line--inp i1'/>
                            </div>
                            <div className='lin'>
                                <input onInput={fullProf} type="text" placeholder='Your job tittle'
                                       className='lin--inp i2'/>
                            </div>
                        </div>
                    </div>
                    <div className='global'>
                        <div className="contact">
                            <h1 className='contact--h1'>CONTACT</h1>
                            <input onInput={fullProf} type="email" placeholder='Email' className='contact--input1 i3'/>
                            <input onInput={fullProf} type="number" placeholder='Phone No.'
                                   className='contact--input2 i4'/>
                            <input onInput={fullProf} type="text" placeholder='Areas:' className='contact--input3 i5'/>
                        </div>
                        <div className='social'>
                            <h1 className='social--h1'>SOCIAL</h1>
                            <input onInput={fullProf} type="text" className='social--input i6'/>
                        </div>
                    </div>
                    <div className='lines'>

                    </div>
                    <div className='works'>
                        <div className="education">
                            <div className="selected">
                                <h1 className="selected--h1">SELECTED WORK</h1>
                                <div className="inputs">
                                    <input onInput={fullProf} type="text" placeholder='Work name 1'
                                           className='inputs--input1 i7'/>
                                    {/*<input type="text"*/}
                                    {/*       placeholder='Here a short explanation about the project. Not more than 2 or 3 lines. '*/}
                                    {/*       className='inputs--input2'/>*/}
                                    <textarea onInput={fullProf}
                                              placeholder='Here a short explanation about the project. Not more than 2 or 3 lines.'
                                              className='inputs--input2 i8'></textarea>
                                    <div className='inputs--icon'>
                                        <PiPencilSimpleLine className='inputs--icon__pen'/>
                                        <RiShoppingBasketLine className='inputs--icon__bas'/>
                                    </div>
                                    <input onInput={fullProf} type="text" placeholder='URL to work'
                                           className='inputs--input3 i9'/>
                                </div>
                            </div>
                            <div className='experience'>
                                <h1 className='experience--h1'>EXPERIENCE</h1>
                                <input onInput={fullProf} type="text" placeholder='Job title'
                                       className='experience--4 i10'/>
                                <input onInput={fullProf} type="text" className='experience--one i11'/>
                                <input onInput={fullProf} type="text" className='experience--two i12'/>
                                {/*<input type="text"*/}
                                {/*       placeholder='Here a short explanation about what you did at this company. Not more than 3 or 4 lines. '*/}
                                {/*       className='experience--three'/>*/}
                                <textarea onInput={fullProf} className='experience--three i13'
                                          placeholder='Here a short explanation about what you did at this company. Not more than 3 or 4 lines.'></textarea>
                            </div>
                            <div className='experience--icon'>
                                <PiPencilSimpleLine className='experience--icon__pen'/>
                                <RiShoppingBasketLine className='experience--icon__bas'/>
                            </div>

                            <div className='edu'>
                                <h1 className='edu--h1'>EDUCATION</h1>
                                <input onInput={fullProf} type="text" placeholder="Degree & Name"
                                       className='edu--inp i14'/>
                                <input onInput={fullProf} type="text" className='edu--inp2 i15'/>
                            </div>
                        </div>
                        <div className='lin'>
                        </div>
                        <div className='skills'>
                            <div className='hobbies'>
                                <h1 className='hobbies--h1'>SKILLS</h1>
                                <input onInput={fullProf} type="text" className='hobbies--input3 i16'/>
                            </div>
                            <div className='hobbies'>
                                <h1 className='hobbies--h1'>LANGUAGES</h1>
                                <input onInput={fullProf} type="text" className='hobbies--input3 i17'/>
                            </div>
                            <div className='hobbies'>
                                <h1 className='hobbies--h1'>HOBBIES</h1>
                                <input onInput={fullProf} type="text" className='hobbies--input3 i18'/>
                            </div>
                        </div>
                    </div>
                    <div className='buttons'>
                        <button onClick={agentTrue} className='buttons--btn'>Save</button>
                        <Link to={'/change-profil'}>
                            <button className='buttons--btn'>Cancel</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
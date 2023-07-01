import React from 'react';
import logo from '../../img/Logo.svg'
import admImg from '../../img/unsplash_3TLl_97HNJo.png'
import {FaRegCommentAlt} from "react-icons/fa";
import {AiOutlineArrowLeft, AiOutlineHome, AiOutlineUser, AiOutlineWifi} from "react-icons/ai";
import {FiDollarSign, FiSearch} from "react-icons/fi";
import {IoSettingsOutline} from "react-icons/io5";
import one from '../../img/one.png'
import two from '../../img/two.png'
import {ImLocation} from "react-icons/im";
import {TbAirConditioning, TbMicrowave} from "react-icons/tb";
import {PiSwimmingPoolDuotone, PiTelevisionSimple} from "react-icons/pi";
import {GiWashingMachine} from "react-icons/gi";
import {GrCafeteria} from "react-icons/gr";
import {BsDoorClosed, BsPersonWorkspace, BsThermometerHalf} from "react-icons/bs";
import {RiParkingBoxLine} from "react-icons/ri";
import {CgGym} from "react-icons/cg";
import {MdOutlinePets} from "react-icons/md";


const Permission = () => {

    const buy = (e)=>{
        const buy = document.querySelector('.permission--main__detail--nbr__bRent--btn1')
        const r = document.querySelector('.permission--main__detail--nbr__bRent--btn2')
        if(!e.target.classList.contains('active')){
            e.target.classList.add('active')
            buy.style.background = '#0762E5'
            buy.style.color = 'white'

            e.target.classList.remove('active')
            r.style.background = 'none'
            r.style.color = 'rgba(0, 74, 96, 0.7)'
        }else {
            e.target.classList.remove('active')
            buy.style.background = 'none'
            buy.style.color = 'rgba(0, 74, 96, 0.7)'
        }
    }
    const rent = (e)=>{
        const r = document.querySelector('.permission--main__detail--nbr__bRent--btn2')
        const buy = document.querySelector('.permission--main__detail--nbr__bRent--btn1')
        if(!e.target.classList.contains('active')){
            e.target.classList.add('active')
            r.style.background = '#0762E5'
            r.style.color = 'white'

            e.target.classList.remove('active')
            buy.style.background = 'none'
            buy.style.color = 'rgba(0, 74, 96, 0.7)'
        }else {
            e.target.classList.remove('active')
            r.style.background = 'none'
            r.style.color = 'rgba(0, 74, 96, 0.7)'
        }
    }
const dis=()=>{
        const dis = document.querySelector('.modalDecline')
    dis.style.display = 'block'
}
    const disClose=()=>{
        const dis = document.querySelector('.modalDecline')
        dis.style.display = 'none'
    }
    const acept=()=>{
        const dis = document.querySelector('.modalAccept')
        dis.style.display = 'block'
    }
    const aceptClose=()=>{
        const dis = document.querySelector('.modalAccept')
        dis.style.display = 'none'
    }

    return (
        <div id='permission'>
            <div className="container">
                <div className="permission">
                    <div className="permission--main">
                        <div className="permission--main__prof">
                            <div className="permission--main__prof--logo">
                                <h1>FIND.KG <img src={logo} alt=""/></h1>
                            </div>
                            <div className="permission--main__prof--imgs">
                                <img src={admImg} alt=""/>
                                <div className="permission--main__prof--imgs__data">
                                    <h5>Leslie</h5>
                                    <p>Admin</p>
                                </div>
                            </div>
                            <div className="permission--main__prof--btn">
                                <button><FaRegCommentAlt/> Inbox</button>
                                <button><AiOutlineUser/> Agents</button>
                                <button><AiOutlineHome/> Realty</button>
                                <button><FiDollarSign/> Payment</button>
                                <div className="permission--main__prof--btn__two">
                                    <button><IoSettingsOutline/> Settings</button>
                                    <button><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.1429 3.4001H4.85724V0.850121C4.85726 0.696236 4.82743 0.545231 4.77095 0.413217C4.71447 0.281202 4.63345 0.173131 4.53653 0.100534C4.43961 0.0279359 4.33043 -0.00646484 4.22065 0.00100116C4.11086 0.00846717 4.00458 0.0575201 3.91314 0.142926L0.270313 3.5429C0.18716 3.62052 0.118982 3.72569 0.0718269 3.84905C0.0246722 3.97242 0 4.11018 0 4.2501C0 4.39001 0.0246722 4.52777 0.0718269 4.65114C0.118982 4.7745 0.18716 4.87967 0.270313 4.95729L3.91314 8.35726C4.00458 8.44267 4.11086 8.49172 4.22065 8.49919C4.33043 8.50666 4.43961 8.47225 4.53653 8.39966C4.63345 8.32706 4.71447 8.21899 4.77095 8.08697C4.82743 7.95496 4.85726 7.80395 4.85724 7.65007V5.10009H12.1429C13.109 5.10009 14.0356 5.6374 14.7188 6.59383C15.4019 7.55026 15.7857 8.84746 15.7857 10.2001C15.7857 11.5526 15.4019 12.8498 14.7188 13.8063C14.0356 14.7627 13.109 15.3 12.1429 15.3H3.03583C2.8748 15.3 2.72038 15.3896 2.60651 15.549C2.49265 15.7084 2.42869 15.9246 2.42869 16.15C2.42869 16.3754 2.49265 16.5916 2.60651 16.751C2.72038 16.9104 2.8748 17 3.03583 17H12.1429C13.4311 17 14.6665 16.2836 15.5774 15.0083C16.4883 13.7331 17 12.0035 17 10.2001C17 8.39659 16.4883 6.667 15.5774 5.39176C14.6665 4.11652 13.4311 3.4001 12.1429 3.4001Z" fill="#F91B1B"/>
                                    </svg>
                                        Logout</button>
                                </div>
                            </div>
                        </div>
                        <div className="permission--main__detail">
                            <div className="permission--main__detail--menu">
                                <div className="permission--main__detail--menu__search">
                                    <FiSearch className='permission--main__detail--menu__search--s'/>
                                    <input placeholder='search' type="search"/>
                                </div>
                                <div className="permission--main__detail--menu__sel">
                                    <select>
                                        <option>English</option>
                                        <option>English</option>
                                    </select>
                                    <h2><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 10.75C10.4142 10.75 10.75 10.4142 10.75 10C10.75 9.58579 10.4142 9.25 10 9.25C9.58579 9.25 9.25 9.58579 9.25 10C9.25 10.4142 9.58579 10.75 10 10.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15.833 10.75C16.2472 10.75 16.583 10.4142 16.583 10C16.583 9.58579 16.2472 9.25 15.833 9.25C15.4188 9.25 15.083 9.58579 15.083 10C15.083 10.4142 15.4188 10.75 15.833 10.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.16699 10.75C4.58121 10.75 4.91699 10.4142 4.91699 10C4.91699 9.58579 4.58121 9.25 4.16699 9.25C3.75278 9.25 3.41699 9.58579 3.41699 10C3.41699 10.4142 3.75278 10.75 4.16699 10.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    </h2>
                                </div>
                            </div>
                            <div className="permission--main__detail--nbr">
                                <div className="permission--main__detail--nbr__name">
                                    <h1>Eleanor Pane</h1>
                                    <p> mail@iconscout.com> </p>
                                </div>
                                <div className="permission--main__detail--nbr__bRent">
                                    <button className='permission--main__detail--nbr__bRent--btn1' onClick={buy}>Buy</button>
                                    <button className='permission--main__detail--nbr__bRent--btn2' onClick={rent}>Rent</button>
                                </div>
                            </div>
                            <div className="permission--main__detail--imAll">
                                <div className="permission--main__detail--imAll__all">
                                    <img src={one} alt=""/>
                                    <div className="permission--main__detail--imAll__all--imgs">
                                        <div className="permission--main__detail--imAll__all--imgs__i">
                                            <img src={two} alt=""/>
                                            <img src={two} alt=""/>
                                        </div>
                                        <div className="permission--main__detail--imAll__all--imgs__i2">
                                            <img src={two} alt=""/>
                                            <img src={two} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <input type="file"/>
                            </div>
                            <div className="permission--main__detail--inp">
                                <div className="permission--main__detail--inp__one">
                                    <p>Name</p>
                                    <input type="text"/>
                                </div>
                                <div className="permission--main__detail--inp__one">
                                    <p>Mobile number</p>
                                    <input placeholder='+996...' type="number"/>
                                </div>
                                <div className="permission--main__detail--inp__one">
                                    <p>E-mail Address</p>
                                    <input type="email"/>
                                </div>
                                <div className="permission--main__detail--inp__two">
                                    <p>Series</p>
                                    <div className="permission--main__detail--inp__two--btn">
                                        <button>Elite</button>
                                        <button>105</button>
                                        <button>106</button>
                                        <button>104</button>
                                        <button>Individual project</button>
                                    </div>
                                </div>
                                <div className="permission--main__detail--inp__two">
                                    <p>Number of room</p>
                                    <div className="permission--main__detail--inp__two--btn2">
                                        <button>1</button>
                                        <button>2</button>
                                        <button>3</button>
                                        <button>4</button>
                                        <button>5</button>
                                        <button>6+</button>
                                    </div>
                                </div>
                                <div className="permission--main__detail--inp__two">
                                    <p>Bathroom</p>
                                    <div className="permission--main__detail--inp__two--btn2">
                                        <button>Combined</button>
                                        <button>Separate</button>
                                    </div>
                                </div>
                                <div className="permission--main__detail--inp__two">
                                    <p>Type of parking</p>
                                    <div className="permission--main__detail--inp__two--btn2">
                                        <button>Ground</button>
                                        <button>Underground</button>
                                        <button>No</button>
                                    </div>
                                </div>
                                <div className="permission--main__detail--inp__one">
                                    <p>Location: </p>
                                    <button><ImLocation/> Bishkek</button>
                                </div>
                                <div className="permission--main__detail--inp__one">
                                    <p>Square: </p>
                                    <button>m2</button>
                                </div>
                                <div className="permission--main__detail--inp__one">
                                    <p>Floor </p>
                                    <div className="permission--main__detail--inp__one--inp">
                                        <input type="text"/>
                                        of
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div className="permission--main__detail--inp__one">
                                    <p>Price </p>
                                    <input type="text"/>
                                </div>
                                <div className="permission--main__detail--inp__one">
                                    <p>About property  </p>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="permission--main__detail--aminities">
                                <h3>Aminities: </h3>
                                <div className="permission--main__detail--aminities__chekbox">
                                    <div className="permission--main__detail--aminities__chekbox--one">
                                        <div className="permission--main__detail--aminities__chekbox--one__chek">
                                            <p><input type="checkbox"/><TbMicrowave/> Microwave </p>
                                            <p><input type="checkbox"/><AiOutlineWifi/> WiFi </p>
                                            <p><input type="checkbox"/><PiTelevisionSimple/> TV </p>
                                            <p><input type="checkbox"/><GiWashingMachine/> Washing machine </p>
                                            <p><input type="checkbox"/><TbAirConditioning/> Air-conditioner </p>
                                            <p><input type="checkbox"/><GrCafeteria/> Tableware </p>
                                        </div>
                                    </div>
                                    <div className="permission--main__detail--aminities__chekbox--one">
                                        <div className="permission--main__detail--aminities__chekbox--one__chek">
                                            <p><input type="checkbox"/><BsDoorClosed/> Balkony </p>
                                            <p><input type="checkbox"/><RiParkingBoxLine/> Covered parking  </p>
                                            <p><input type="checkbox"/><BsThermometerHalf/> Central heating </p>
                                            <p><input type="checkbox"/><PiSwimmingPoolDuotone/> Swimming pool </p>
                                            <p><input type="checkbox"/><CgGym/> Gym </p>
                                            <p><input type="checkbox"/><BsPersonWorkspace/> Workspace </p>
                                            <p><input type="checkbox"/><MdOutlinePets/> Pet friendly </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="permission--main__detail--btn">
                                <button onClick={dis}>Decline</button>
                                <button onClick={acept}>Accept</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modalDecline">
                    <div className="modalDecline--all">
                        <div className="modalDecline--all__date">
                            <p style={{cursor:'pointer'}} onClick={disClose}><AiOutlineArrowLeft/></p>
                            <p>Mar 23, 2022, 13:00 PM</p>
                        </div>
                        <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M57.5 0C-19.1584 2.40679 -19.175 112.585 57.5 115C134.158 112.593 134.175 2.415 57.5 0Z" fill="#F44336"/>
                            <path d="M64.6626 58.3662L85.7629 37.4543C90.3927 32.9989 83.2267 25.8968 78.7311 30.4853L57.6308 51.3972L36.5305 30.4853C32.0349 25.8968 24.8688 32.9989 29.4987 37.4543L50.599 58.3662L29.4987 79.2782C24.8738 83.7336 32.0349 90.8406 36.5305 86.2471L57.6308 65.3352L78.7311 86.2471C83.2267 90.8406 90.3927 83.7336 85.7629 79.2782L64.6626 58.3662Z" fill="#EEEEEE"/>
                        </svg>
                        <h2>Make sure all field are filled in correctly and try again</h2>
                        <div className="modalDecline--all__btn">
                            <button>No</button>
                            <button>Yes,to try one more </button>
                        </div>
                    </div>
                </div>
                <div className="modalAccept">
                    <div className="modalAccept--all">
                        <div className="modalAccept--all__date">
                            <p style={{cursor:'pointer'}} onClick={aceptClose}><AiOutlineArrowLeft/></p>
                            <p><span>Published</span> Mar 23, 2022, 13:00 PM</p>
                        </div>
                        <div className="modalAccept--all__mail">
                            <h3>Eleanor Pane</h3>
                            <h4>mail@iconscout.com></h4>
                        </div>
                        <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_232_4230)">
                                <mask id="mask0_232_4230"  maskUnits="userSpaceOnUse" x="0" y="0" width="138" height="138">
                                    <path d="M0 0H138V138H0V0Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_232_4230)">
                                    <path d="M120.75 69C120.75 75.7959 119.411 82.5253 116.811 88.8039C114.21 95.0825 110.398 100.787 105.593 105.593C100.787 110.398 95.0825 114.21 88.8039 116.811C82.5253 119.411 75.7959 120.75 69 120.75C62.2041 120.75 55.4747 119.411 49.1961 116.811C42.9175 114.21 37.2127 110.398 32.4072 105.593C27.6018 100.787 23.7899 95.0825 21.1892 88.8039C18.5886 82.5253 17.25 75.7959 17.25 69C17.25 55.275 22.7022 42.1122 32.4072 32.4072C42.1122 22.7022 55.275 17.25 69 17.25C82.725 17.25 95.8878 22.7022 105.593 32.4072C115.298 42.1122 120.75 55.275 120.75 69Z" fill="#1B76F9"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M69 23C56.8 23 45.0998 27.8464 36.4731 36.4731C27.8464 45.0998 23 56.8 23 69C23 81.2 27.8464 92.9002 36.4731 101.527C45.0998 110.154 56.8 115 69 115C81.2 115 92.9002 110.154 101.527 101.527C110.154 92.9002 115 81.2 115 69C115 56.8 110.154 45.0998 101.527 36.4731C92.9002 27.8464 81.2 23 69 23ZM11.5 69C11.5 37.2428 37.2428 11.5 69 11.5C100.757 11.5 126.5 37.2428 126.5 69C126.5 100.757 100.757 126.5 69 126.5C37.2428 126.5 11.5 100.757 11.5 69Z" fill="#1B76F9"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M90.3153 53.4345C91.3933 54.5128 91.9989 55.9751 91.9989 57.4997C91.9989 59.0244 91.3933 60.4867 90.3153 61.565L67.3153 84.565C66.2371 85.643 64.7748 86.2485 63.2501 86.2485C61.7254 86.2485 60.2631 85.643 59.1848 84.565L47.6849 73.065C47.1357 72.5346 46.6976 71.9001 46.3963 71.1986C46.0949 70.497 45.9363 69.7425 45.9297 68.9791C45.923 68.2156 46.0685 67.4584 46.3576 66.7518C46.6467 66.0451 47.0737 65.4031 47.6136 64.8632C48.1535 64.3233 48.7955 63.8964 49.5021 63.6073C50.2088 63.3182 50.9659 63.1727 51.7294 63.1793C52.4929 63.1859 53.2474 63.3446 53.9489 63.6459C54.6504 63.9473 55.2849 64.3853 55.8153 64.9345L61.2204 70.3395C61.7595 70.8785 62.4906 71.1813 63.253 71.1813C64.0153 71.1813 64.7465 70.8785 65.2856 70.3395L82.1848 53.4345C83.2631 52.3565 84.7254 51.751 86.2501 51.751C87.7748 51.751 89.2371 52.3565 90.3153 53.4345Z" fill="white"/>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_232_4230">
                                    <rect width="138" height="138" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <h2>Congratulations ,your application has been successfully published on the site.</h2>
                        <img src={one} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Permission;
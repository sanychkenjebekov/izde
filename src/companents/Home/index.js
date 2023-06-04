import React, {useEffect} from 'react';
import {BiSearch} from "react-icons/bi";
import Easy from "./Easy";
import Explore from "./Explore";
import Meet from "./Meet";

const Home = () => {
    const rent = (e)=>{
        const rent = document.querySelector('.rent')
        const buy = document.querySelector('.buy')
        if(!e.target.classList.contains('active')){
            e.target.classList.add('active')
            rent.style.background = '#1B76F9'
            rent.style.color = 'white'

            buy.classList.remove('active')
            buy.style.background = 'none'
            buy.style.color = 'rgba(0, 74, 96, 0.7)'

        }else {
            e.target.classList.remove('active')
            rent.style.background = 'none'
            rent.style.color = 'rgba(0, 74, 96, 0.7)'
        }
    }
    const buy = (e)=>{
        const buy = document.querySelector('.buy')
        const rent = document.querySelector('.rent')
        if(!e.target.classList.contains('active')){
            e.target.classList.add('active')
            buy.style.background = '#1B76F9'
            buy.style.color = 'white'

            rent.classList.remove('active')
            rent.style.background = 'none'
            rent.style.color = 'rgba(0, 74, 96, 0.7)'

        }else {
            e.target.classList.remove('active')
            buy.style.background = 'none'
            buy.style.color = 'rgba(0, 74, 96, 0.7)'
        }
    }
    return (
        <>
            <div id='home'>
                <div className="container">
                    <div className="home">
                        <h1>Let’s find a perfect <br/> home for you!</h1>
                    </div>
                    <div className="filter">
                        <div className="filter--sel">
                            <div className="filter--sel__btn">

                                <button onClick={rent} className='rent'>Rent</button>
                                <button onClick={buy} className='buy'>Buy</button>
                            </div>
                            <div className="filter--sel__option">
                                <select>
                                    <option>Property type</option>
                                    <option>Property type2</option>
                                </select>
                                <select className='rooms'>
                                    <option>Rooms</option>
                                    <option>Rooms2</option>
                                </select>
                                <select className='price'>
                                    <option>Price</option>
                                    <option>Price2</option>
                                </select>
                            </div>
                        </div>
                        <div className="filter--inp">
                            <input placeholder='Enter an address or city' type="search"/>
                            <button><BiSearch className='searchIcon'/> Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <Easy/>
            <Explore/>
            <Meet/>
        </>
    );
};

export default Home;
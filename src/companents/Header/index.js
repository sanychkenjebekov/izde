import React, {useContext, useEffect} from 'react';
import logo from '../../img/Logo.svg'
import {Link, NavLink} from "react-router-dom";
import user from '../../img/user.svg'
import {GlobalContext} from "../../context";



const Header = () => {
    const {users,burgerUser,setBurgerUser} = useContext(GlobalContext)
    const {profil,setProfil,burgerProfil,setBurgerProfil} = useContext(GlobalContext)

    const burger = (e)=>{
        const b = document.querySelector('.header--burgerAll__burger--1')
        const b2 = document.querySelector('.header--burgerAll__burger--2')
        const b3 = document.querySelector('.header--burgerAll__burger--3')
        const bg = document.querySelector('.bg')
        const bMunu = document.querySelector('.burgerMenu')
        if(!e.target.classList.contains('active')){
            e.target.classList.add('active')
            b2.style.opacity = '0'
            b.style.transform = 'rotate(45deg)'
            b3.style.transform = 'rotate(-45deg)'
            b3.style.margin = '-17px 0 0 0'
            bMunu.style.transform = 'translate(0)'
            bg.style.display = 'block'
        }else {
            e.target.classList.remove('active')
            b2.style.opacity = '1'
            b.style.transform = 'inherit'
            b3.style.transform = 'inherit'
            b3.style.margin = '0'
            bMunu.style.transform = 'translate(100%)'
            bg.style.display = 'none'
        }
    }
    const removeBurger = ()=>{
        const bMunu = document.querySelector('.burgerMenu')
        const b = document.querySelector('.header--burgerAll__burger--1')
        const b2 = document.querySelector('.header--burgerAll__burger--2')
        const b3 = document.querySelector('.header--burgerAll__burger--3')
        const bg = document.querySelector('.bg')
        bMunu.classList.remove('active')
        b2.style.opacity = '1'
        b.style.transform = 'inherit'
        b3.style.transform = 'inherit'
        b3.style.margin = '0'
        bMunu.style.transform = 'translate(100%)'
        bg.style.display = 'none'
    }
    useEffect(()=>{
        const hUser = document.querySelector('.headerUser')
        const hLogin = document.querySelector('.headerLogin')
        const bLogin = document.querySelector('.burgerLogin')
        const bUser = document.querySelector('.burgerUser')
        if(users === true){
           setProfil(false)
            setBurgerProfil(false)
            hUser.style.display = 'block'
            bUser.style.display = 'block'
        }else {
            hUser.style.display = 'none'
            bUser.style.display = 'none'
        }
        if(profil === true){
            hLogin.style.display = 'block'
            bLogin.style.display = 'block'
        }else {
            hLogin.style.display = 'none'
            bLogin.style.display = 'none'
        }
    },[users,profil,burgerUser,burgerProfil])
    return (
      <div id="header">
        <div className="container">
          <div className="header">
            <div className="header--logo">
              <NavLink onClick={removeBurger} to={"/"}>
                IZDE.KG
              </NavLink>
              <img src={logo} alt="" />
            </div>
            <div className="header--menu">
              <NavLink onClick={removeBurger} to={"/buy"}>
                Buy
              </NavLink>
              <NavLink onClick={removeBurger} to={"/rent"}>
                Rent
              </NavLink>
              <NavLink onClick={removeBurger} to={"/agents"}>
                Agents
              </NavLink>
              <NavLink onClick={removeBurger} to={"/reviews"}>
                Reviews
              </NavLink>
            </div>
            <div className="header--len">
              <select>
                <option>English</option>
                <option>Русский</option>
              </select>
              <Link onClick={removeBurger} to={"/oauth/login"}>
                <button className="headerLogin">Log in</button>
              </Link>
              <Link to={"/favoriteSetings"}>
                <img className="headerUser" src={user} alt="" />
              </Link>
            </div>
            <div onClick={burger} className="header--burgerAll">
              <div className="header--burgerAll__burger">
                <p className="header--burgerAll__burger--1"></p>
                <p className="header--burgerAll__burger--2"></p>
                <p className="header--burgerAll__burger--3"></p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div style={{ transform: "translateX(100%)" }} className="burgerMenu">
          <div className="burgerMenu__a">
            <NavLink onClick={removeBurger} to={"/buy"}>
              Buy
            </NavLink>
            <NavLink onClick={removeBurger} to={"/rent"}>
              Rent
            </NavLink>
            <NavLink onClick={removeBurger} to={"/agents"}>
              Agents
            </NavLink>
            <NavLink onClick={removeBurger} to={"/reviews"}>
              Reviews
            </NavLink>
          </div>
          <div className="burgerMenu--leng">
            <select className="sel">
              <option>English</option>
              <option>Русский</option>
            </select>
            <Link onClick={removeBurger} to={"/login"}>
              <button className="burgerLogin">Log in</button>
            </Link>
            <Link to={"/favoriteSetings"}>
              <img className="burgerUser" src={user} alt="" />
            </Link>
          </div>
        </div>
        <div className="bg"></div>
      </div>
    );
};

export default Header;

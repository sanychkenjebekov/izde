import React from 'react';
import logo from '../../img/Logo.svg'
import facebook from '../../img/facebook icon.svg'
import inn from '../../img/in icon.svg'
import insta from '../../img/inst icon.svg'
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div id='footer'>
            <div className="container">
                <div className="footer">
                    <div className="footer--logo">
                        <div className="footer--logo__h1">
                            <NavLink to={'/'}>IZDE.KG</NavLink>
                            <img src={logo} alt=""/>
                        </div>
                        <p>The shortest distance between paradise and the place you call home.</p>
                    </div>
                    <div className="footer--menu">
                        <div className="footer--menu__all">
                            <h3>About</h3>
                            <a href="#">About us</a>
                            <a href="#">Features</a>
                            <a href="#">News & Blogs</a>
                        </div>
                        <div className="footer--menu__all">
                            <h3>Company</h3>
                            <a href="#">How we work</a>
                            <a href="#">Capital</a>
                            <a href="#">Security</a>
                        </div>
                        <div className="footer--menu__all">
                            <h3>Support</h3>
                            <a href="#">FAQ</a>
                            <a href="#">Support Center</a>
                            <a href="#">Contact Us</a>
                        </div>
                        <div className="footer--menu__all">
                            <h3>Follow us</h3>
                            <div className="footer--menu__all--icon">
                                <a href="#"><img src={facebook} alt=""/></a>
                                <a href="#"><img src={inn} alt=""/></a>
                                <a href="#"><img src={insta} alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import easy from '../../../img/easy.png'
import easy2 from '../../../img/easy2.png'
import {Link} from "react-router-dom";

const Easy = () => {
    return (
        <div id='easy'>
            <div className="container">
                <div className="easy">
                    <h1>Easy Home Search</h1>
                    <p className='p'>We can help you to find your dream home</p>
                    <div className="easy--cardAll">
                        <Link to={'/agents'}><div className="easy--cardAll__card">
                            <img width={380} src={easy} alt=""/>
                            <h5><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99999 5.16667C9.41448 5.16667 10.771 5.72858 11.7712 6.72877C12.7714 7.72896 13.3333 9.08552 13.3333 10.5C13.3333 11.9145 12.7714 13.271 11.7712 14.2712C10.771 15.2714 9.41448 15.8333 7.99999 15.8333C6.5855 15.8333 5.22895 15.2714 4.22875 14.2712C3.22856 13.271 2.66666 11.9145 2.66666 10.5C2.66666 9.08552 3.22856 7.72896 4.22875 6.72877C5.22895 5.72858 6.5855 5.16667 7.99999 5.16667ZM7.99999 7.50001L7.11799 9.28667L5.14666 9.57334L6.57332 10.9633L6.23666 12.9273L7.99999 12L9.76332 12.9267L9.42666 10.9633L10.8533 9.57267L8.88199 9.28601L7.99999 7.50001ZM8.66666 1.83267L12 1.83334V3.83334L11.0913 4.59201C10.3373 4.19639 9.51403 3.94989 8.66666 3.86601V1.83334V1.83267ZM7.33332 1.83267V3.86601C6.48622 3.94977 5.66321 4.19604 4.90932 4.59134L3.99999 3.83334V1.83334L7.33332 1.83267Z" fill="white"/>
                            </svg>
                                SUPERAGENTS
                            </h5>
                            <div className="easy--cardAll__card--title">
                                <h3>Find your SuperAgent</h3>
                                <p>The most responsive agents with up-to-date and improved accuracy on the properties you are searching for.</p>
                            </div>
                        </div></Link>
                        <Link to={'/buy'}><div className="easy--cardAll__card">
                            <img width={380} src={easy2} alt=""/>
                            <h5><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15.1667C4.318 15.1667 1.33334 12.182 1.33334 8.50001C1.33334 4.81801 4.318 1.83334 8 1.83334C11.682 1.83334 14.6667 4.81801 14.6667 8.50001C14.6667 12.182 11.682 15.1667 8 15.1667ZM7.33534 11.1667L12.0487 6.45268L11.106 5.51001L7.33534 9.28134L5.44934 7.39534L4.50667 8.33801L7.33534 11.1667Z" fill="white"/>
                            </svg>
                                VERIFIED
                            </h5>
                            <div className="easy--cardAll__card--title">
                                <h3>Verified listings</h3>
                                <p>Explore property listing that have passed our verification process</p>
                            </div>
                        </div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Easy;
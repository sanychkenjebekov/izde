import React, {useContext, useEffect, useState} from "react";
import lesi from '../../img/paragon.png';
import para from '../../img/profil.png'
import {BsTelephone} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {GlobalContext} from "../../context";
function AgentsLesile() {
    const {picture,pictureAgent} = useContext(GlobalContext)

    return (
        <section id="lesile">
            <div className="container">
                <div className="lesile">

                    <div className="lesile--block">
                        <div className="lesile--block__group">
                            <img src={pictureAgent ? picture : para} alt="img"/>
                            <div className="lesile--block__group--text">
                                <h1>Leslie Alexander</h1>
                                <h4>senior property advisor</h4>
                                <button>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.49984 5.16667C9.91432 5.16667 11.2709 5.72857 12.2711 6.72877C13.2713 7.72896 13.8332 9.08552 13.8332 10.5C13.8332 11.9145 13.2713 13.271 12.2711 14.2712C11.2709 15.2714 9.91432 15.8333 8.49984 15.8333C7.08535 15.8333 5.7288 15.2714 4.7286 14.2712C3.72841 13.271 3.1665 11.9145 3.1665 10.5C3.1665 9.08552 3.72841 7.72896 4.7286 6.72877C5.7288 5.72857 7.08535 5.16667 8.49984 5.16667ZM8.49984 7.50001L7.61784 9.28667L5.6465 9.57334L7.07317 10.9633L6.7365 12.9273L8.49984 12L10.2632 12.9267L9.9265 10.9633L11.3532 9.57267L9.38184 9.28601L8.49984 7.50001ZM9.1665 1.83267L12.4998 1.83334V3.83334L11.5912 4.59201C10.8371 4.19639 10.0139 3.94989 9.1665 3.86601V1.83334V1.83267ZM7.83317 1.83267V3.86601C6.98607 3.94977 6.16305 4.19604 5.40917 4.59134L4.49984 3.83334V1.83334L7.83317 1.83267Z" fill="white"/>
                                    </svg>
                                    superagent</button>
                                <p>Languages: <b> English, Russian</b></p>
                            </div>
                        </div>
                        <div className="lesile--block__contact">
                            <h2>Contact this agent</h2>
                            <div className="lesile--block__contact--btn">
                                <button>
                                    <BsTelephone/>
                                    Call agent</button>
                                <button>
                                    <AiOutlineMail/>
                                    Email agent</button>
                            </div>
                        </div>
                    </div>

                    <div className="lesile--group2">
                        <div className="lesile--group2__text">
                            <h1>Personal information</h1>
                            <div className="lesile--group2__text--para">
                                <p>Areas: <b>Bishkek</b></p>
                                <p>Active listings:<b>15 Properties</b></p>
                                <p>Experience since:<b>2020</b></p>
                            </div>
                        </div>
                        <div className="lesile--group2__compy">
                            <h2>Company</h2>
                            <img src={lesi} alt="igm"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AgentsLesile;
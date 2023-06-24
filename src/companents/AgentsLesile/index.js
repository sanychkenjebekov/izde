import React from "react";
import lesi from '../../img/paragon.png';
import para from '../../img/lesile.png'
import {BsTelephone} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
function AgentsLesile() {
    return (
        <section id="lesile">
            <div className="container">
                <div className="lesile">

                    <div className="lesile--block">
                        <div className="lesile--block__group">
                            <img src={para} alt="img"/>
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
                                    {/*<svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*    <path d="M9.866 10.682C10.8043 12.3305 12.1695 13.6957 13.818 14.634L14.702 13.396C14.8442 13.1969 15.0543 13.0569 15.2928 13.0023C15.5313 12.9478 15.7814 12.9825 15.996 13.1C17.4103 13.8729 18.9722 14.3378 20.579 14.464C20.8298 14.4839 21.0638 14.5975 21.2345 14.7823C21.4052 14.9671 21.5 15.2094 21.5 15.461V19.923C21.5001 20.1706 21.4083 20.4094 21.2424 20.5932C21.0765 20.777 20.8483 20.8927 20.602 20.918C20.072 20.973 19.538 21 19 21C10.44 21 3.5 14.06 3.5 5.5C3.5 4.962 3.527 4.428 3.582 3.898C3.60725 3.6517 3.72298 3.42352 3.90679 3.25763C4.0906 3.09175 4.32941 2.99995 4.577 3H9.039C9.29056 2.99997 9.5329 3.09475 9.71768 3.26545C9.90247 3.43615 10.0161 3.67022 10.036 3.921C10.1622 5.52779 10.6271 7.08968 11.4 8.504C11.5175 8.71856 11.5522 8.96874 11.4977 9.2072C11.4431 9.44565 11.3031 9.65584 11.104 9.798L9.866 10.682ZM7.344 10.025L9.244 8.668C8.70478 7.50409 8.33535 6.26884 8.147 5H5.51C5.504 5.166 5.501 5.333 5.501 5.5C5.5 12.956 11.544 19 19 19C19.167 19 19.334 18.997 19.5 18.99V16.353C18.2312 16.1646 16.9959 15.7952 15.832 15.256L14.475 17.156C13.9287 16.9437 13.398 16.6931 12.887 16.406L12.829 16.373C10.8676 15.2567 9.24328 13.6324 8.127 11.671L8.094 11.613C7.80691 11.102 7.55628 10.5713 7.344 10.025Z" fill="#004A60" fill-opacity="0.7"/>*/}
                                    {/*</svg>*/}
                                    <BsTelephone/>
                                    Call agent</button>
                                <button>
                                    {/*<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*    <path d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM20 7.238L12.072 14.338L4 7.216V19H20V7.238ZM4.511 5L12.061 11.662L19.502 5H4.511Z" fill="#004A60" fill-opacity="0.7"/>*/}
                                    {/*</svg>*/}
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
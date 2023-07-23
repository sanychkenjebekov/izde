import React, {useContext} from "react";
import prof from '../../img/profil.png';
import gale from '../../img/galery.png'
import {Link} from "react-router-dom";
import AgentsLesile from "../AgentsLesile";
import {GlobalContext} from "../../context";
function ChangeProf() {
    const {agentLesile} = useContext(GlobalContext)
    return (
        <>
        {
       agentLesile ? <AgentsLesile/> :
        <section id="lesile2">
            <div className="container">
                <div className="lesile2">

                    <div className="lesile2--block">
                        <div className="lesile2--block__group">
                            <img src={prof} alt="igm"/>
                            <div className="lesile2--block__group--text">
                                <Link to={'/change-profil/profil-setings'}>Change profile
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.66667 21.3333H4.552L16.9707 8.91465L15.0853 7.02932L2.66667 19.448V21.3333ZM24 24H0V18.3427L17.9133 0.429323C18.1634 0.179361 18.5024 0.0389404 18.856 0.0389404C19.2096 0.0389404 19.5486 0.179361 19.7987 0.429323L23.5707 4.20132C23.8206 4.45136 23.9611 4.79044 23.9611 5.14399C23.9611 5.49754 23.8206 5.83662 23.5707 6.08666L8.324 21.3333H24V24ZM16.9707 5.14399L18.856 7.02932L20.7413 5.14399L18.856 3.25866L16.9707 5.14399Z" fill="#1B76F9"/>
                                    </svg>
                                </Link>
                                <h4>Name Surname</h4>
                                <h3>Your position:</h3>
                                <p>Languages:</p>
                            </div>
                        </div>
                        <div className="lesile2--block__contact">
                            <h2>Your Contacts</h2>
                            <div className="lesile2--block__contact--btn">
                                <button>Add number</button>
                                <button>Add email</button>
                            </div>
                        </div>
                    </div>

                    <div className="lesile2--group2">
                        <div className="lesile2--group2__text">
                            <h1>Personal information</h1>
                            <div className="lesile2--group2__text--para">
                                <p>Areas:</p>
                                <p>Active listings:</p>
                                <p>Experience since:</p>
                            </div>
                        </div>
                        <div className="lesile2--group2__compy">
                            <h2>Company</h2>
                            <img src={gale} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
}
        </>
    )
}
export default ChangeProf;
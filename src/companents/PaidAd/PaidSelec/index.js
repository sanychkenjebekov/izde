import React from 'react';
import pay from '../../../img/elkart.png'
import pay2 from '../../../img/odengi.png'
import pay3 from '../../../img/mbank.png'
import pay4 from '../../../img/elsome.png'
import pay5 from '../../../img/Visa.png'
import pay6 from '../../../img/GooglePay.png'
import {Link} from "react-router-dom";

const PaidSel = () => {
    const sale = (e)=>{
        const s = document.querySelector('.paidSale')
        const r = document.querySelector('.paidRent')
        if(!e.target.classList.contains('active')){
            e.target.classList.add('active')
            s.style.background = '#0762E5'
            s.style.color = 'white'

            e.target.classList.remove('active')
            r.style.background = 'none'
            r.style.color = 'rgba(0, 74, 96, 0.7)'
        }else {
            e.target.classList.remove('active')
            s.style.background = 'none'
            s.style.color = 'rgba(0, 74, 96, 0.7)'
        }
    }
    const rent = (e)=>{
        const r = document.querySelector('.paidRent')
        const s = document.querySelector('.paidSale')
        if(!e.target.classList.contains('active')){
            e.target.classList.add('active')
            r.style.background = '#0762E5'
            r.style.color = 'white'

            e.target.classList.remove('active')
            s.style.background = 'none'
            s.style.color = 'rgba(0, 74, 96, 0.7)'
        }else {
            e.target.classList.remove('active')
            r.style.background = 'none'
            r.style.color = 'rgba(0, 74, 96, 0.7)'
        }
    }
    return (
        <div id='paidSel'>
            <div className="container">
                <div className="paidSel">
                    <div className="paidSel--paidSelAll">
                        <div className="paidSel--paidSelAll__sale">
                            <h3>Select a category</h3>
                            <div className="paidSel--paidSelAll__sale--btn">
                                <button onClick={sale} className='paidSale'>Sale</button>
                                <button onClick={rent} className='paidRent'>Rent</button>
                            </div>
                        </div>
                        <div className="paidSel--paidSelAll__type">
                            <h3>Your property type</h3>
                            <div className="paidSel--paidSelAll__type--btn">
                                <button>Apartment</button>
                                <button>Townhouse</button>
                                <button>Penthouse</button>
                                <button>Office</button>
                            </div>
                        </div>
                    </div>
                    <Link to={'/addDate'}><button className='btnCenter'>Continue</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PaidSel;
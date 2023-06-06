import React from 'react';

const PaidSel = () => {
    const sale = (e)=>{
        const s = document.querySelector('.paidSale')
        if(!e.target.classList.contains('active')){
            e.target.classList.add('active')
            s.style.background = '#0762E5'
            s.style.color = 'white'
        }else {
            e.target.classList.remove('active')
            s.style.background = 'none'
            s.style.color = 'rgba(0, 74, 96, 0.7)'
        }
    }
    const rent = (e)=>{
        const r = document.querySelector('.paidRent')
        if(!e.target.classList.contains('active')){
            e.target.classList.add('active')
            r.style.background = '#0762E5'
            r.style.color = 'white'
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
                    <button className='btnCenter'>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default PaidSel;
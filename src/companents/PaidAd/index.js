import React from 'react';
import PaidSel from "./PaidSelec";

const PaidAd = () => {
    return (
        <>
        <div id='paidAd'>
            <div className="container">
                <div className="paidAd">
                    <h1>Place a paid ad
                        from 7 to 30 days</h1>
                    <button>Place an ad</button>
                </div>
            </div>
        </div>
            <PaidSel/>
        </>
    );
};

export default PaidAd;
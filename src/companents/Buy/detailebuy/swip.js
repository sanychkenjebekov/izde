import React from 'react';
import ex from '../../../img/explore.png'
import ex2 from '../../../img/explore2.png'
import ex3 from '../../../img/explore3.png'
import ex4 from '../../../img/explore4.png'


const Swip = () => {
    return (
        <div id='exploreSwip'>
            <div className="container">
                <div className='swip'>
                    <h5>Similar places in Bishkek</h5>
                </div>
                <div className="exploreSwip">
                    <div className="exploreSwip--card">
                        <img src={ex} alt=""/>
                        <h3>The Grand Estate</h3>
                        <div className="exploreSwip--card__price">
                            <p>Bishkek</p>
                            <span>$ 100 000</span>
                        </div>
                    </div>
                    <div className="exploreSwip--card">
                        <img src={ex2} alt=""/>
                        <h3>The Grand Estate</h3>
                        <div className="exploreSwip--card__price">
                            <p>Bishkek</p>
                            <span>$ 100 000</span>
                        </div>
                    </div>
                    <div className="exploreSwip--card">
                        <img src={ex3} alt=""/>
                        <h3>The Grand Estate</h3>
                        <div className="exploreSwip--card__price">
                            <p>Bishkek</p>
                            <span>$ 100 000</span>
                        </div>
                    </div>
                    <div className="exploreSwip--card">
                        <img src={ex4} alt=""/>
                        <h3>The Grand Estate</h3>
                        <div className="exploreSwip--card__price">
                            <p>Bishkek</p>
                            <span>$ 100 000</span>
                        </div>
                    </div>
                    <div className="exploreSwip--card">
                        <img src={ex} alt=""/>
                        <h3>The Grand Estate</h3>
                        <div className="exploreSwip--card__price">
                            <p>Bishkek</p>
                            <span>$ 100 000</span>
                        </div>
                    </div>
                    <div className="exploreSwip--card">
                        <img src={ex2} alt=""/>
                        <h3>The Grand Estate</h3>
                        <div className="exploreSwip--card__price">
                            <p>Bishkek</p>
                            <span>$ 100 000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Swip;
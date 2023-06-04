import React from 'react';
import ExploreSwip from "../ExploreSwip";

const Explore = () => {
    return (
        <div id='explore'>
            <div className="container">
                <div className="explore">
                    <div className="explore--about">
                        <h1>Explore the New Properties</h1>
                        <div className="explore--about__btn">
                            <select>
                                <option>Recently added</option>
                                <option>Recently added2</option>
                            </select>
                            <button>See more</button>
                        </div>
                    </div>
                    <ExploreSwip/>
                </div>
            </div>
        </div>
    );
};

export default Explore;
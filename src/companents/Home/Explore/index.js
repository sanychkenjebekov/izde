import React from 'react';
import ExploreSwip from "../ExploreSwip";
import {Link} from "react-router-dom";

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
                            <Link to={'/buy'}><button>See more</button></Link>
                        </div>
                    </div>
                    <ExploreSwip/>
                </div>
            </div>
        </div>
    );
};

export default Explore;
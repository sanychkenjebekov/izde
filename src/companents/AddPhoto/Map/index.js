import React from 'react';

const Map = () => {
    return (
        <div id='map'>
            <div className="container">
                <div className="map">
                    <iframe
                        title="Google Map"
                        width="100%"
                        height="450"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193848.87686173244!2dLONGITUDE!3dLATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU3JzUwLjEiTiA2MMKwMzgnNTAuMiJF!5e0!3m2!1sen!2sus!4v1604986943884!5m2!1sen!2sus"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Map;
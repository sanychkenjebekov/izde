import React, {useEffect, useState} from 'react';
import two from "../../img/two.png";
import five from "../../img/five.png";
import three from "../../img/three.png";
import four from "../../img/four.png";
import one from "../../img/one.png";
import Series from "./Series";
import Map from "./Map";


const AddPhoto = () => {
    const [addImg, setAddImg] = useState(one)
    const change = ()=>{
        const fil = document.querySelector('.f')
        const img = document.querySelector('.image')
        img.style.object ='cover'
            img.src = URL.createObjectURL(fil.files[0])
    }
    return (
        <div id="dream">
            <div className="container">
                <div className="dream">
                    <h1>Property characteristics</h1>
                    <div className="dream--photos">
                        <img className='image' width={561} height={375} style={{borderRadius: '20px 0 0 20px'}} src={addImg} alt=""/>
                        <div className='dream--photos__four'>
                            <img className='i1' src={two} alt=""/>
                            <img className='i2' src={five} alt=""/>
                            <img className='i3' src={three} alt=""/>
                            <img className='i4' src={four} alt=""/>
                        </div>
                    </div>
                    <input onChange={change} className='f' type="file"/>
                </div>
            </div>
            <Series/>
            <Map/>
        </div>
    );
};

export default AddPhoto;
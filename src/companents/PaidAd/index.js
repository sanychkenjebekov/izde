import React from 'react';
import PaidSel from "./PaidSelec";
import pay from "../../img/elkart.png";
import pay2 from "../../img/odengi.png";
import pay3 from "../../img/mbank.png";
import pay4 from "../../img/elsome.png";
import pay5 from "../../img/Visa.png";
import pay6 from "../../img/GooglePay.png";
import lik from '../../img/tick-circle.png'

const PaidAd = () => {
  const likeBtn = ()=>{
      const like = document.querySelector('.likeAll')
      const likeBg = document.querySelector('.likeBg')
      const i1 = document.querySelector('.i1')
      const i2 = document.querySelector('.i2')
      const i3 = document.querySelector('.i3')
      if(i1.value.trim() !== '' && i2.value.trim() !== '' && i3.value.trim() !== ''){
          like.style.display = 'block'
          likeBg.style.display = 'block'
          i1.value = ''
          i2.value = ''
          i3.value = ''
          window.setTimeout(()=>{
              like.style.display = 'none'
              likeBg.style.display = 'none'
              const modal = document.querySelector('.payCardAlls')
              const bg = document.querySelector('.payCardBg')
              modal.style.display = 'none'
              bg.style.display = 'none'
              i1.classList.remove('active')
              i2.classList.remove('active')
              i3.classList.remove('active')
          },3000)
      }else {
          i1.classList.add('active')
          i2.classList.add('active')
          i3.classList.add('active')
        if(i1.value.trim() === ''){
            i1.style.border = '1px solid red'
        }else {
            i1.style.border = 'none'
        }
        if(i2.value.trim() === ''){
            i2.style.border = '1px solid red'
        }else {
            i2.style.border = 'none'
        }
        if(i3.value.trim() === ''){
              i3.style.border = '1px solid red'
        }else {
            i3.style.border = 'none'
        }
      }
  }
    const btnPay =()=>{
        const modal = document.querySelector('.payCardAlls')
        const bg = document.querySelector('.payCardBg')
        modal.style.display = 'block'
        bg.style.display = 'block'
    }
    const btnCancel =()=>{
        const modal = document.querySelector('.payCardAlls')
        const bg = document.querySelector('.payCardBg')
        modal.style.display = 'none'
        bg.style.display = 'none'
        const i1 = document.querySelector('.i1')
        const i2 = document.querySelector('.i2')
        const i3 = document.querySelector('.i3')
        i1.classList.remove('active')
        i2.classList.remove('active')
        i3.classList.remove('active')
        i1.style.border = 'none'
        i2.style.border = 'none'
        i3.style.border = 'none'
        i1.value = ''
        i2.value = ''
        i3.value = ''
    }
    const errInp = (e)=>{
      const i1 = document.querySelector('.i1')
      const i2 = document.querySelector('.i2')
      const i3 = document.querySelector('.i3')
        if(e.target.classList.contains('active') && i1.value.trim() === ''){
            i1.style.border = '1px solid red'
        }else {
            i1.style.border = 'none'
        }
        if(e.target.classList.contains('active') && i2.value.trim() === ''){
            i2.style.border = '1px solid red'
        }else {
            i2.style.border = 'none'
        }
        if(e.target.classList.contains('active') && i3.value.trim() === ''){
            i3.style.border = '1px solid red'
        }else {
            i3.style.border = 'none'
        }
    }
    return (
        <>
        <div id='paidAd'>
            <div className="container">
                <div className="paidAd">
                    <h1>Place a paid ad
                        from 7 to 30 days</h1>
                    <button onClick={btnPay}>Place an ad</button>
                </div>
            </div>
            <div className="payCardAlls">
                <div className="payCardAlls--payCardAll">
                    <div className="payCardAlls--payCardAll__card">
                        <h1>Choose a payment method</h1>
                        <div className="payCardAlls--payCardAll__card--pay">
                            <img src={pay} alt=""/>
                            <img src={pay2} alt=""/>
                            <img src={pay3} alt=""/>
                            <img src={pay4} alt=""/>
                            <img src={pay5} alt=""/>
                            <img src={pay6} alt=""/>
                        </div>
                        <div className="payCardAlls--payCardAll__card--inp">
                            <p>Card number:</p>
                            <input className='i1' onInput={errInp} type="number"/>
                            <p>Validity period</p>
                            <div className="payCardAlls--payCardAll__card--inp__two">
                                <input className='i2' onInput={errInp} type="number"/>
                                <input className='i3' onInput={errInp} type="number"/>
                            </div>
                        </div>
                        <div className="payCardAlls--payCardAll__card--btn">
                            <button onClick={btnCancel}>Cancel</button>
                            <button onClick={likeBtn}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="payCardBg">

            </div>
            <div className="likeAll">
            <div className="likeAll--like">
                <img src={lik} alt=""/>
                <div className="likeAll--like__h">
                <h2>Congratulations!</h2>
                    <h2>Your payment has been accepted</h2>
            </div>
            </div>
        </div>
            <div className="likeBg"></div>
        </div>
            <PaidSel/>
        </>
    );
};

export default PaidAd;
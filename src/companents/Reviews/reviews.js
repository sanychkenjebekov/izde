import React from 'react';
import {CiSearch} from "react-icons/ci";
import Rectangle from "../../img/Rectangle 9.svg"
import {MdOutlineTextsms} from 'react-icons/md'
import {RiPencilLine} from 'react-icons/ri'
import {RxStarFilled} from 'react-icons/rx'
import {RiStarHalfFill} from 'react-icons/ri'
import {BiStar} from 'react-icons/bi'


const Reviews = () => {
    return (
        <div id="review">
            <section id='reviews'>
                <div className="container">
                    <div className="building">
                        <h2>Building Reviews</h2>
                    </div>
                    <div className="building--bl">
                        <div className="building--bl__search">
                            <input className="first" type="text" placeholder="Enter building name or community"/>
                        </div>
                        <div className="building--bl__search--icon">
                            <button><CiSearch className='icon'/> Search</button>
                        </div>
                    </div>
                </div>
            </section>
            <section id='global'>
                <div className="container">
                    <div className='top'>
                        <div className='top--grand'>
                            <h1 className='top--grand__h'>Top reviewed buildings in Bishkek</h1>

                            <div className='layout'>
                                <div className='all'>
                                    <div className='all--line'>
                                        <div className='estate'>
                                            <img src={Rectangle} className='estate--image' alt=""/>
                                            <div className="apartment">
                                                <div className='apartments'>
                                                    <h1 className='apartments--title'>Apartment</h1>
                                                    <p className='apartments--text'>The Grand Estate</p>
                                                </div>
                                                <div className='err'>
                                                    <div className='err--ic'>
                                                        <div className='err--ic__first'>
                                                            <RxStarFilled/>
                                                            <p>5/5</p>
                                                        </div>
                                                    </div>
                                                    <div className='feedbacks'>
                                                        <div className='feedback'>
                                                            <div className='feedback--lin'>
                                                                <MdOutlineTextsms/>
                                                                <p className="feedback--lin__tx">Read reviews</p>
                                                            </div>
                                                        </div>
                                                        <div className='feedback'>
                                                            <div className='feedback--lin'>
                                                                <RiPencilLine className='feedback--lin__ri'/>
                                                                <p className="feedback--lin__tx">Write review</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='all--line'>
                                        <div className='estate'>
                                            <img src={Rectangle} className='estate--image' alt=""/>
                                            <div className="apartment">
                                                <div className='apartments'>
                                                    <h1 className='apartments--title'>Apartment</h1>
                                                    <p className='apartments--text'>The Grand Estate</p>
                                                </div>
                                                <div className='err'>
                                                    <div className='err--ic'>
                                                        <div className='err--ic__first'>
                                                            <RxStarFilled/>
                                                            <p>5/5</p>
                                                        </div>
                                                    </div>
                                                    <div className='feedbacks'>
                                                        <div className='feedback'>
                                                            <div className='feedback--lin'>
                                                                <MdOutlineTextsms/>
                                                                <p className="feedback--lin__tx">Read reviews</p>
                                                            </div>
                                                        </div>
                                                        <div className='feedback'>
                                                            <div className='feedback--lin'>
                                                                <RiPencilLine className='feedback--lin__ri'/>
                                                                <p className="feedback--lin__tx">Write review</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='all--line'>
                                        <div className='estate'>
                                            <img src={Rectangle} className='estate--image' alt=""/>
                                            <div className="apartment">
                                                <div className='apartments'>
                                                    <h1 className='apartments--title'>Apartment</h1>
                                                    <p className='apartments--text'>The Grand Estate</p>
                                                </div>
                                                <div className='err'>
                                                    <div className='err--ic'>
                                                        <div className='err--ic__first'>
                                                            <RiStarHalfFill/>
                                                            <p>5/5</p>
                                                        </div>
                                                    </div>
                                                    <div className='feedbacks'>
                                                        <div className='feedback'>
                                                            <div className='feedback--lin'>
                                                                <MdOutlineTextsms/>
                                                                <p className="feedback--lin__tx">Read reviews</p>
                                                            </div>
                                                        </div>
                                                        <div className='feedback'>
                                                            <div className='feedback--lin'>
                                                                <RiPencilLine className='feedback--lin__ri'/>
                                                                <p className="feedback--lin__tx">Write review</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='all--line'>
                                        <div className='estate'>
                                            <img src={Rectangle} className='estate--image' alt=""/>
                                            <div className="apartment">
                                                <div className='apartments'>
                                                    <h1 className='apartments--title'>Apartment</h1>
                                                    <p className='apartments--text'>The Grand Estate</p>
                                                </div>
                                                <div className='err'>
                                                    <div className='err--ic'>
                                                        <div className='err--ic__first'>
                                                            <BiStar/>
                                                            <p>5/5</p>
                                                        </div>
                                                    </div>
                                                    <div className='feedbacks'>
                                                        <div className='feedback'>
                                                            <div className='feedback--lin'>
                                                                <MdOutlineTextsms/>
                                                                <p className="feedback--lin__tx">Read reviews</p>
                                                            </div>
                                                        </div>
                                                        <div className='feedback'>
                                                            <div className='feedback--lin'>
                                                                <RiPencilLine className='feedback--lin__ri'/>
                                                                <p className="feedback--lin__tx">Write review</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='all--line'>
                                        <div className='estate'>
                                            <img src={Rectangle} className='estate--image' alt=""/>
                                            <div className="apartment">
                                                <div className='apartments'>
                                                    <h1 className='apartments--title'>Apartment</h1>
                                                    <p className='apartments--text'>The Grand Estate</p>
                                                </div>
                                                <div className='err'>
                                                    <div className='err--ic'>
                                                        <div className='err--ic__first'>
                                                            <RxStarFilled/>
                                                            <p>5/5</p>
                                                        </div>
                                                    </div>
                                                    <div className='feedbacks'>
                                                        <div className='feedback'>
                                                            <div className='feedback--lin'>
                                                                <MdOutlineTextsms/>
                                                                <p className="feedback--lin__tx">Read reviews</p>
                                                            </div>
                                                        </div>
                                                        <div className='feedback'>
                                                            <div className='feedback--lin'>
                                                                <RiPencilLine className='feedback--lin__ri'/>
                                                                <p className="feedback--lin__tx">Write review</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              <div className="recent">
                                  <div className='latest'>
                                      <h1 className='latest--h'>Latest reviews</h1>
                                      <div className='line'>
                                          <div className='line--more'>
                                              <span>Apartment</span>
                                              <h2 className='line--more__title'>The Grand Estate</h2>
                                              <div className='line--more__icon'>
                                                  <RiStarHalfFill/>
                                                  <p>4/5</p>
                                              </div>
                                              <p className='line--more__text'>It’s an awesome home with a great view to a
                                                  city. I would definitely recommend to rent this property</p>
                                              <div className='line--more__li'>
                                                  <MdOutlineTextsms className="line--more__li--ico"/>
                                                  <p className='line--more__li--p'>More reviews</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className='latest'>
                                      <div className='line'>
                                          <div className='line--more'>
                                              <span>Apartment</span>
                                              <h2 className='line--more__title'>The Grand Estate</h2>
                                              <div className='line--more__icon'>
                                                  <BiStar/>
                                                  <p>4/5</p>
                                              </div>
                                              <p className='line--more__text'>It’s an awesome home with a great view to a
                                                  city. I would definitely recommend to rent this property</p>
                                              <div className='line--more__li'>
                                                  <MdOutlineTextsms className="line--more__li--ico"/>
                                                  <p className='line--more__li--p'>More reviews</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className='latest'>
                                      <div className='line'>
                                          <div className='line--more'>
                                              <span>Apartment</span>
                                              <h2 className='line--more__title'>The Grand Estate</h2>
                                              <div className='line--more__icon'>
                                                  <RiStarHalfFill/>
                                                  <p>4/5</p>
                                              </div>
                                              <p className='line--more__text'>It’s an awesome home with a great view to a
                                                  city. I would definitely recommend to rent this property</p>
                                              <div className='line--more__li'>
                                                  <MdOutlineTextsms className="line--more__li--ico"/>
                                                  <p className='line--more__li--p'>More reviews</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className='latest'>
                                      <div className='line'>
                                          <div className='line--more'>
                                              <span>Apartment</span>
                                              <h2 className='line--more__title'>The Grand Estate</h2>
                                              <div className='line--more__icon'>
                                                  <BiStar/>
                                                  <p>4/5</p>
                                              </div>
                                              <p className='line--more__text'>It’s an awesome home with a great view to a
                                                  city. I would definitely recommend to rent this property</p>
                                              <div className='line--more__li'>
                                                  <MdOutlineTextsms className="line--more__li--ico"/>
                                                  <p className='line--more__li--p'>More reviews</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                            </div>


                        </div>
                    </div>

                </div>
            </section>

        </div>

    );
};

export default Reviews;
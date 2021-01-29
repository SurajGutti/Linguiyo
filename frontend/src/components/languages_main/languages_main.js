import React from 'react'
import './languages_main.css'
import ReactPlayer from 'react-player'

import TurkishCoffeeImage from './assets/Turkish-images/4.JPG';
import MasalaChaiImage from './assets/Indian-Chai-Images/2.jpg'
import TestImage from './assets/Indian-Chai-Images/3.jpg'
import CoffeeImage from './assets/Turkish-images/3.jpeg';
function LanguagesMain() {
    return (
        <div className="container-fluid mt-4 language_main">
            <div>
                <h1 className="text-center">Languages</h1>
            </div>
            <div className="row d-flex justify-content-center">

                <div className="col-md-9">
                    <div className="col-md-12 col-xs-12 video_container">
                        <div className='player-wrapper'>
                            <ReactPlayer
                                className='react-player'
                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                width='100%'
                                height='100%'
                            />
                        </div>

                    </div>
                </div>

                {/* <EachCulture image={TurkishCoffeeImage} title="Turkish Coffee Fortune Reading" price={45} description="Turkish coffee fortune reading is an authentic tradition dating back to the Ottoman empire of the 1600s."/>
                <EachCulture image={MasalaChaiImage} title=" Masala Chai and Pakoda the Indian Way" price={15} description="Learn the intricacies of the preparation of Indian food & some of India’s best-known dishes by taking part in a fun electronic class."/>    */}
            </div>

            <div className="row d-flex justify-content-between cards_">

                <div className="col-md-3 p-0">
                    <div style={{ backgroundImage: `url('${TurkishCoffeeImage}')` }} className="col-md-12 col-xs-12 each_card_">
                        <div className="innerfade_">

                        </div>
                        <div className="row desc_container">
                            <div className="desc">
                                <h3>
                                 Indian
                            </h3>
                            </div>

                        </div>



                    </div>
                </div>
                <div className="col-md-3 p-0">
                    <div style={{ backgroundImage: `url('${MasalaChaiImage}')` }} className="col-md-12 col-xs-12 each_card_">
                        <div className="innerfade_">

                        </div>
                        <div className="row desc_container">
                            <div className="desc">
                                <h3>
                                    French
                            </h3>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-md-3 p-0">
                    <div style={{ backgroundImage: `url('${CoffeeImage}')` }} className="col-md-12 col-xs-12 each_card_">
                        <div className="innerfade_">

                        </div>
                        <div className="row desc_container">
                            <div className="desc">
                                <h3>
                                    Spanish
                            </h3>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="col-md-3 p-0  mt-4 ml-1">
                    <div style={{ backgroundImage: `url('${TestImage}')` }} className="col-md-12 col-xs-12 each_card_">
                        <div className="innerfade_">

                        </div>
                        <div className="row desc_container">
                            <div className="desc">
                                <h3>
                                    Chineese
                            </h3>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanguagesMain

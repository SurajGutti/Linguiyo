import React from 'react'
import './CulturalExperience.css'
import EachCulture from './EachCulture'
import ReactPlayer from 'react-player'
import TurkishCoffeeImage from './Turkish-images/4.JPG';
import MasalaChaiImage from './Indian-Chai-Images/6.jpeg'
import CoffeeImage from './Turkish-images/3.jpeg';
function CulturalExperience(props) {
    return (
        <div className="container-fluid mt-4 cultural_main">
            <div>
                <h1 className="text-center">Cultural Experiences</h1>
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

            <div className="row d-flex justify-content-around cards_ mlk_">

                <div onClick={()=> props.history.push('/cultural-experiences/1')} className="col-md-3 p-0">
                    <div style={{ backgroundImage: `url('${CoffeeImage}')` }} className="col-md-12 col-xs-12 each_card_">
                        <div className="innerfade_">

                        </div>
                        <div className="row desc_container">
                            <div className="desc">
                                <h3>
                                    Turkish Coffee
                            </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={()=> props.history.push('/cultural-experiences/2')} className="col-md-3 p-0">
                    <div style={{ backgroundImage: `url('${MasalaChaiImage}')` }} className="col-md-12 col-xs-12 each_card_">
                        <div className="innerfade_">

                        </div>
                        <div className="row desc_container">
                            <div className="desc">
                                <h3>
                                    Indian Chai
                            </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={()=> props.history.push('/cultural-experiences/2')} className="col-md-3 p-0">
                    <div style={{ backgroundImage: `url('${TurkishCoffeeImage}')` }} className="col-md-12 col-xs-12 each_card_">
                        <div className="innerfade_">

                        </div>
                        <div className="row desc_container">
                            <div className="desc">
                                <h3>
                                    Spanish Tea
                            </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CulturalExperience

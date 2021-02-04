import React from 'react';
import './TurkishPost_style.css';
import { Link } from 'react-router-dom';
import one from './turkish_images/1.jpeg';
import two from './turkish_images/2.jpeg';
import three from './turkish_images/3.jpeg';
import four from './turkish_images/4.jpeg';
import five from './turkish_images/5.jpeg';
import six from './turkish_images/6.jpeg';
import seven from './turkish_images/7.jpeg';
import eight from './turkish_images/8.jpeg';
import nine from './turkish_images/9.jpeg';
import ten from './turkish_images/10.jpg';
import eleven from './turkish_images/11.jpg';

function TurkishPost() {
    return (
        <div className="turkish_blog container-fluid hub-background">
            <div className="col-md-12  blog_inner">
                <div className="row justify-content-between d-flex menu_1">
                    <Link className="all-post" to="/blog">All Posts</Link>
                    <span><i className="fa fa-search"></i></span>
                </div>

                <div className="col-md-12 blog_inner_2">

                    <div className="row justify-content-between d-flex menu_">
                        <span>Linguiyo Jun 5, 2020 2 min read</span>
                        <span>Menu</span>
                    </div>

                    <h1>Turkish culture, what a delight!</h1>

                    <div className="row p-0 images_">
                        <div className="col-md-4 p-1">
                            <div className=" each_card">
                                <img src={one} alt="one" />
                            </div>

                        </div>
                        <div className="col-md-4   p-1">
                            <div className=" each_card">
                                <img src={two} alt="two" />
                            </div>

                        </div>
                        <div className="col-md-4  p-1">
                            <div className=" each_card">
                                <img src={three} alt="three" />
                            </div>

                        </div>

                        <div className="col-md-4 p-1">
                            <div className=" each_card">
                                <img src={four} alt="four" />
                            </div>

                        </div>
                        <div className="col-md-4   p-1">
                            <div className=" each_card">
                                <img src={five} alt="five" />
                            </div>

                        </div>
                        <div className="col-md-4  p-1">
                            <div className=" each_card">
                                <img src={six} alt="six" />
                            </div>

                        </div>

                        <div className="col-md-4 p-1">
                            <div className=" each_card">
                                <img src={seven} alt="seven" />
                            </div>

                        </div>
                        <div className="col-md-4   p-1">
                            <div className=" each_card">
                                <img src={eight} alt="eight" />
                            </div>

                        </div>
                        <div className="col-md-4  p-1">
                            <div className=" each_card">
                                <img src={nine} alt="nine" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>
                            Turkey is like no country on Earth. It has its own essence, vibes and community
                            so open and friendly. The word stranger just does not exist in the minds of
                            Turkish people or even in the Turkish language. Let’s investigate this wonderful
                            culture of people.
                        </p>
                    </div>

                    <div className="col-md-12 subhead p-0">
                        <h2>Turkish Language</h2>
                    </div>
                    <div>
                        <p className="mt-4">
                            The Turkish language is considered to be harder to learn than English, French, or German even.
                            But Modern Turkish derives from Ottoman Turkish and its predecessor Anatolian Turkish which was brought in by Anatolia in the 11th century AD. This meant that the old Turkish language absorbed a massive amount of Arabic and Persian terminology and grammatical characteristics.
                            <p>Yes, it may be a little harder for some people to learn but that is not a reason not to learn it. All languages are possible to learn and enjoy you just have to put the time and effort just like with anything in life.
                            </p>
                            <p>Let's find more out about the culture and country of Turkey.</p>
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-12 subhead">
                            <h2>Turkish Culture</h2>
                        </div>
                        <div className="col-md-6">
                            <p>
                                Islam is the main religion for Turkish citizens even though the state considers itself very secular. When going to this beautiful nation and immersing in the countries culture you will notice that Muslims do pray 5 times per day and have the holy month Ramadan when Muslims will fast from sun up till sundown.
                            </p>
                            <p>Turkish culture is a social affair with family and community circulating through the veins and heart of this thriving gorgeous nation. They love to make new friends and invite strangers to parties, dinner, and their homes.Strangers invited into there family and personal life may be daunting for my reserved cultures and societies but this is one of the incredible differences with Turkish culture. How open and friendly they are to everyone regardless of where you are from.</p>
                        </div>
                        <div className="col-md-6 p-3">
                            <div className="p_right">
                                <img src={eleven} alt="eleven" />
                            </div>
                            {/* <img src="" alt="article_page"/> */}
                        </div>
                    </div>
                    <p>‘Hos Geldiniz’ is a welcome greeting you will hear all of the time when you go to Turkey, especially in bars and restaurants. By replying ‘Hos Bulduk’ you are saying we feel welcome and it is a common reply for this social situation.</p>
                    <p>Be aware that there are some areas in Turkey which are men only. If you are a woman and visiting Turkey it is going to know that traditionally Tea houses are normally only for men. Instead, you could look for Tea Gardens where couples, families, and couples tend to go to.</p>
                    <p>If you see areas of just men playing games such as backgammon it would be a better decision to stay clear of this area and find somewhere else to spend your time for relaxation and a cold drink.</p>

                    <div className="row mt-5">
                        <div className="col-md-12 subhead">
                            <h2>A real Turkish Experience</h2>
                        </div>
                        <div className="col-md-6">
                            <p>
                                If you want to immerse yourself in Turkish culture coffee fortune reading has been dated back to the Ottoman Empire in the 1600s.
                                This mind-blowing service is offered by the coffee expert Uluc and here is a little of how it is done in 2020.
                            </p>
                        </div>
                        <div className="col-md-6 p-3">
                            <div className="p_right">
                                <img src={ten} alt="ten" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                When drinking this perfectly brewed sweet coffee it is then customary to read the fortunes from the remaining coffee grinds. Using old school Turkish style he prepares the coffee on the hot sand. Showing the grinds on an iPad screen via endoscope camera allowing for a long-distance visual fortune-telling experience by bringing together the old culture with new technology.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="p_right">
                                <img src={two} alt="two" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>
                            My wife and I did this and it was a really impressive and humbling experience I would recommend anyone who likes to say yes to things they may not understand to enhance their life’s experiences and another cool thing to add to the bucket list.
                        </p>
                        <p>
                            Get learning more about Turkey and this fabulous culture and language. Let us know how your journey is what has worked for you and what has not. We look forward to hearing about your culture and language growth.
                        </p>
                    </div>

                    <p>
                        If you want to immerse yourself into this beautiful language please click to <span className="text-danger link_">enquire now</span>.
                    </p>




                    <div className="row medias_">
                        <div>
                            <span>O</span>
                            <span>O</span>
                            <span>O</span>
                            <span>O</span>

                        </div>

                    </div>
                    <div className="row justify-content-between d-flex medias_2">

                        <div>
                            <span>14 views</span>
                            <span>0 comments</span>
                        </div>

                        <span>1 O</span>
                    </div>


                </div>
                <div>
                    <div className="py-4 row justify-content-between px-3 d-flex">
                        <span>Recent Posts</span>
                        <span>See All</span>
                    </div>

                    <div className="row p-0 images_">
                        <div className="col-md-4 p-1">
                            <div className=" each_card each_2">

                                <div className="row my-4 justify-content-center d-flex">
                                    <div className="title_2 ">
                                        <h4>Rasode Mein Kon Tha?</h4>
                                    </div>

                                </div>
                                <div className="row justify-content-between d-flex px-4">

                                    <div>
                                        <span><i class="eye icon"></i> 14</span>
                                        <span className="ml-2"><i class="comment outline icon"></i> O</span>
                                    </div>

                                    <span>O <i class="heart outline icon"></i></span>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-4 p-1">
                            <div className=" each_card each_2">

                                <div className="row my-4 justify-content-center d-flex">
                                    <div className="title_2 ">
                                        <h4>Rasode Mein Kon Tha?</h4>
                                    </div>

                                </div>
                                <div className="row justify-content-between d-flex px-4">

                                    <div>
                                        <span><i class="eye icon"></i> 14</span>
                                        <span className="ml-2"><i class="comment outline icon"></i> O</span>
                                    </div>

                                    <span>O <i class="heart outline icon"></i></span>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-4 p-1">
                            <div className=" each_card each_2">

                                <div className="row my-4 justify-content-center d-flex">
                                    <div className="title_2 ">
                                        <h4>Rasode Mein Kon Tha?</h4>
                                    </div>

                                </div>
                                <div className="row justify-content-between d-flex px-4">

                                    <div>
                                        <span><i class="eye icon"></i> 14</span>
                                        <span className="ml-2"><i class="comment outline icon"></i> O</span>
                                    </div>

                                    <span>O <i class="heart outline icon"></i></span>
                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="row comment_box  justify-content-center d-flex">
                        <span className="text-center"> <span className="text-danger cursor-pointer">Log in </span> to leave a comment.</span>
                    </div>


                </div>

            </div >
        </div >
    )
}

export default TurkishPost

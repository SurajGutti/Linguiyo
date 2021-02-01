import React from 'react'
import './german.css'
import logo from '../shared_assets/short_logo.png'
import { Link } from 'react-router-dom';

import MasalaChaiImage from './assets/German/Screen Shot 2021-01-25 at 10.33.05 AM.png'
import MasalaChaiImage2 from './assets/German/Screen Shot 2021-01-25 at 10.34.27 AM.png'
import MasalaChaiImage3 from './assets/German/photo-1546726747-421c6d69c929.jpeg'
import MasalaChaiImage4 from './assets/German/Screen Shot 2021-01-25 at 10.34.37 AM.png'
import MasalaChaiImage5 from './assets/German/Screen Shot 2021-01-25 at 10.34.44 AM.png'
import MasalaChaiImage6 from './assets/German/photo-1578080667860-a317894a0f06.jpeg'
import MasalaChaiImage7 from './assets/German/photo-1587330979470-3595ac045ab0.jpeg'
import MasalaChaiImage8 from './assets/German/Screen Shot 2021-01-25 at 10.34.52 AM.png';
import MasalaChaiImage9 from './assets/German/Screen Shot 2021-01-25 at 10.34.59 AM.png';
import german_1 from './assets/Indian-Chai-Images/german_1.webp'
import german_2 from './assets/Indian-Chai-Images/german_2.webp'
import 'font-awesome/css/font-awesome.css';
function GermanBlog() {
    return (
        <div className="blog_german container-fluid hub-background">
            <div className="col-md-12  blog_inner">
                <div className="row justify-content-between d-flex menu_1">
                    <Link className="all-post" to="/blog">All Posts</Link>
                    <span><i className="fa fa-search"></i></span>
                </div>

                <div className="col-md-12 blog_inner_2">

                    <div className="row justify-content-between d-flex menu_ menu_up">
                        <span ><img className="logo_" src={logo} alt="check" /> Linguiyo Jun 5, 2020 2 min read</span>
                        <span><i class="fa fa-ellipsis-v"></i></span>
                    </div>
                    <div className="ty">
                        <h1>German beer is great, but their language is even better!</h1>
                    </div>


                    <div className="row p-0 d-flex justify-content-between images_">
                        <div className="col-md-4">
                            <div style={{ backgroundImage: `url('${MasalaChaiImage}')` }} className=" each_card">

                            </div>

                        </div>
                        <div className="col-md-4  ">
                            <div style={{ backgroundImage: `url('${MasalaChaiImage2}')` }} className=" each_card">

                            </div>

                        </div>
                        <div className="col-md-4">
                            <div style={{ backgroundImage: `url('${MasalaChaiImage3}')` }} className=" each_card">

                            </div>

                        </div>

                        <div className="col-md-4">
                            <div style={{ backgroundImage: `url('${MasalaChaiImage4}')` }} className=" each_card">

                            </div>

                        </div>
                        <div className="col-md-4  ">
                            <div style={{ backgroundImage: `url('${MasalaChaiImage5}')` }} className=" each_card">

                            </div>

                        </div>
                        <div className="col-md-4 ">
                            <div style={{ backgroundImage: `url('${MasalaChaiImage6}')` }} className=" each_card">

                            </div>

                        </div>

                        <div className="col-md-4 ">
                            <div style={{ backgroundImage: `url('${MasalaChaiImage7}')` }} className=" each_card">

                            </div>

                        </div>
                        <div className="col-md-4  ">
                            <div style={{ backgroundImage: `url('${MasalaChaiImage8}')` }} className=" each_card">

                            </div>

                        </div>
                        <div className="col-md-4 ">
                            <div style={{ backgroundImage: `url('${MasalaChaiImage9}')` }} className=" each_card">

                            </div>

                        </div>
                    </div>

                    <div>
                        <p>
                            Germany is a country of ideas, thinking poets, and inventors. Their innovation, knowledge, and engineering is second to none. Germany was once a massive part of the Roman Empire and for centuries, has had one of the most stable country economies the world has ever seen.


                        </p>

                    </div>

                    <div className="row">
                        <div className="col-md-12 subhead">
                            <h2>Modern-day Germany </h2>
                        </div>
                        <div className="col-md-6">

                            <p>
                                Germany has a population of 82 million people and a vast array of minorities from nationalities around the globe calling Germany their home. People who have never been to Germany tend to think Germany is not as multicultural as it is today in 2020.
                            </p>
                            <p>
                                With such a rich and diverse history it is easy to have the wrong impression of modern-day Germany and their history beyond the two world wars in the last century. We must look deeper and closer to this interesting and unique nation.
                            </p>

                        </div>
                        <div className="col-md-6 p-3">
                            <div style={{ backgroundImage: `url('${german_1}')` }} className="p_right">

                            </div>
                        </div>
                    </div>

                    <div>
                        <p>
                            Berlin is the capital city of Germany and boasts modern architecture but also embraces old buildings that have been erect for centuries. Berlin also has a 1/3 of its landmass dedicated to public parks and forest promoting walking and nature even though you are still inside the city. Impressive and progressive thinking from this iconic City.
                        </p>
                        {/* <p>
                            The basics of Kanji knowing the difference between stopping the pen stroke with a sudden halt and with a swoosh. This is something you need to understand when learning to write in Japanese.
                        </p>
                        <p>
                            You must focus on the hard parts and fundamentals of Japanese. Basic conversation, learning about family names, and time and particles will be essential when you first get started learning this language.
                        </p>
                        <p>
                            Repetition, repetition, and finally repetition as this language can be one of the hardest languages to learn as a Western native.
                        </p> */}
                    </div>


                    <div className="row">
                        <div className="col-md-12 subhead">
                            <h2>Rich culture  </h2>
                        </div>
                        <div className="col-md-6">

                            <p>
                                German culture thrives around parties, community, and of course their famous beers and appetite. Germans know how to party and have a good time but they also are very hard workers and extremely punctual. So they know how to play and work hard.
                            </p>
                            <p>
                                When you visit Germany if you do enjoy a beer you must try some of their local brews as it is some of the world's best.
                            </p>

                        </div>
                        <div className="col-md-6 p-3">
                            <div style={{ backgroundImage: `url('${german_2}')` }} className="p_right">

                            </div>
                            {/* <img src="" alt="article_page"/> */}
                        </div>
                    </div>
                    <p>
                        German is obviously the main language that is spoken in the country, however, there are 4 large minority languages due to immigration in the nation. These are; Turkish, Russian, Greek, and Kurdish. You will also hear many Albanian and Polish speakers in Germany.
                            </p>



                    <p>
                        <div className="col-md-12 subhead h_2">
                            <h2>Philosophers & Literature</h2>
                        </div>

                        <div>
                            <p>
                                As mentioned before Germany leads most nations when it comes to literature, thought, and philosophy. German publishers on average publish 94 thousand books each year with International Frankfurt Book Fair being one of the most important book shows in the world.
                        </p>
                            <p>
                                Immanuel Kant, Nietzsche, and Schopenhauer all derive from this land arguably 3 of the most important philosophers in modern times. Marx and Engels 2 of the developers o the infamous communist theories also came from Germany respectively. This culture breeds free thinkers and new ideas, whether good or bad, that is how free thought comes to produce potential genius by allowing the thoughts to be heard and evaluated.
                        </p>

                        </div>
                    </p>

                    <p>
                        <div className="col-md-12 subhead h_2">
                            <h2>Tips to learn German</h2>
                        </div>

                        <div>
                            <p>
                                German has this certain unifying quality to the language. As people tend to clump words together which magically creates new words and meanings, and this happens when you hear the language when it is spoken.
                        </p>
                            <p>
                                Many people find when learning German that this language is easier to comprehend than a lot of the Romance languages such as French or Italian. I think this may be because they use much sharper consonants than the romance languages and their sentences are packaged together in an easier way to read and hear.
                        </p>
                            <p>

                                A good tip when learning German is learning the words in their original context. Studying German from this angle will avoid any confusion in the future and steer you away from any inaccuracies.
                        </p>
                            <p>
                                This will help with your sentence structure, prepositions, and article-noun collocation. At first, all of these grammatical terms may seem a little too difficult or confusing but when you get stuck in and do the hard confusing work first it will pay dividends and you will progress much further and faster than you first thought.
                        </p>
                            <p>
                                If you want to immerse yourself into this beautiful language please click to <span className="text-danger link_">enquire now</span>.
                        </p>

                        </div>
                    </p>





                    <div className="row medias_">
                        <div>
                            <span> <i className="fa fa-facebook" aria-hidden="true"></i></span>
                            <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
                            <span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                            <span><i className="fa fa-link" aria-hidden="true"></i></span>

                        </div>

                    </div>
                    <div className="row justify-content-between d-flex medias_2">

                        <div>
                            <span>14 views</span>
                            <span className="ml-2">0 comments</span>
                        </div>

                        <span >1 <span className="text-danger"><i className="fa fa-heart" aria-hidden="true"></i> </span></span>
                    </div>


                </div>
                <div>
                    <div className="py-4 row justify-content-between px-3 d-flex">
                        <span>Recent Posts</span>
                        <span>See All</span>
                    </div>

                    <div className="row p-0 images_ recent_">
                        <div className="col-md-4 p-1">
                            <div className=" each_card each_2">
                                <div className="media_image">
                                    <img src={german_2} alt="check" />
                                </div>

                                <div className="row my-4 justify-content-center d-flex">
                                    <div className="title_2 ">
                                        <h4>Rasode Mein Kon Tha?</h4>
                                    </div>

                                </div>
                                <div className="row justify-content-between d-flex px-4 py-3 ttt">

                                    <div>
                                        <span className="text-secondary"><i className="fa fa-eye" aria-hidden="true"></i> 14</span>
                                        <span className="text-secondary ml-2" ><i className="fa fa-comment" aria-hidden="true"></i> O</span>
                                    </div>

                                    <span>10 <span className="text-danger"><i class="fa fa-heart"></i> </span></span>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-4 p-1">
                            <div className=" each_card each_2">
                                <div className="media_image">
                                    <img src={german_1} alt="check" />
                                </div>

                                <div className="row my-4 justify-content-center d-flex">
                                    <div className="title_2 ">
                                        <h4>Vietnam - a hidden gem in Southeast Asia</h4>
                                    </div>

                                </div>
                                <div className="row justify-content-between d-flex px-4 py-3 ttt">

                                    <div>
                                        <span className="text-secondary"><i className="fa fa-eye" aria-hidden="true"></i> 24</span>
                                        <span className="text-secondary ml-2" ><i className="fa fa-comment" aria-hidden="true"></i> O</span>
                                    </div>

                                    <span>15 <span className="text-danger"><i class="fa fa-heart"></i> </span></span>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-4 p-1">
                            <div className=" each_card each_2">
                                <div className="media_image">
                                    <img src={MasalaChaiImage} alt="check" />
                                </div>

                                <div className="row my-4 justify-content-center d-flex">
                                    <div className="title_2 ">
                                        <h4>Know your superstitions when learning Korean</h4>
                                    </div>

                                </div>
                                <div className="row justify-content-between d-flex px-4 py-3 ttt">

                                    <div>
                                        <span className="text-secondary"><i className="fa fa-eye" aria-hidden="true"></i> 10</span>
                                        <span className="text-secondary ml-2" ><i className="fa fa-comment" aria-hidden="true"></i> O</span>
                                    </div>

                                    <span>10 <span className="text-danger"><i class="fa fa-heart"></i> </span></span>
                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="row comment_box  justify-content-center d-flex">
                        <span className="text-center"> <span className="text-danger cursor-pointer">Log in </span> to leave a comment.</span>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default GermanBlog
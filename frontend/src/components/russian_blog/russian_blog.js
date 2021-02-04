import React from 'react'
import './russian.css'
import logo from '../shared_assets/short_logo.png'
import { Link } from 'react-router-dom';

import MasalaChaiImage from './assets/Russian/photo-1563132178-829771864d6b.jpeg'
import MasalaChaiImage2 from './assets/Russian/Screen Shot 2021-01-25 at 10.28.42 AM.png'
import MasalaChaiImage3 from './assets/Russian/Screen Shot 2021-01-25 at 10.28.49 AM.png'
import MasalaChaiImage4 from './assets/Russian/photo-1563132178-829771864d6b.jpeg'
import MasalaChaiImage5 from './assets/Russian/Screen Shot 2021-01-25 at 10.27.57 AM.png'
import MasalaChaiImage6 from './assets/Russian/Screen Shot 2021-01-25 at 10.28.33 AM.png'
import MasalaChaiImage7 from './assets/Russian/Screen Shot 2021-01-25 at 10.28.14 AM.png'
import MasalaChaiImage8 from './assets/Russian/Screen Shot 2021-01-25 at 10.28.20 AM.png'
import MasalaChaiImage9 from './assets/Russian/Screen Shot 2021-01-25 at 10.28.26 AM.png'
import russian_logo from './assets/Indian-Chai-Images/russian_logo.webp'
import russian_dance from './assets/Indian-Chai-Images/russian_dance.webp'
import russian_family from './assets/Indian-Chai-Images/russian_family.webp'
import 'font-awesome/css/font-awesome.css';
function RussianBlog() {
    return (
        <div className="blog_german container-fluid hub-background">
            <div className="col-md-12  blog_inner">
                <div className="row justify-content-between d-flex menu_1">
                    <Link className="all-post" to="/blog">All Posts</Link> 
                    <span><i className="fa fa-search"></i></span>
                </div>

                <div className="col-md-12 blog_inner_2">

                    <div className="row justify-content-between d-flex menu_ menu_up">
                        <span><img className="logo_" src={logo} alt="check"/> Linguiyo Jun 1, 2020 3 min read

                       </span>
                        <span><i class="fa fa-ellipsis-v"></i></span>
                    </div>
                    <div className="ty">
                        <h1>Russian’s aren’t just Bond villains!</h1>
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
                            I have not yet been to Russia but it is on my bucket list. A powerful charming and mystical place that is quite often misunderstood in British and American culture. What can we learn about this interesting culture and the language that we hear so often in Bond movies!


                        </p>

                    </div>

                    <div className="row">
                        <div className="col-md-12 subhead">
                            <h2>Family First </h2>
                        </div>
                        <div className="col-md-6">

                            <p>
                                Russian families contribute to the dynamics of Russian life and culture more so than in the majority of Western countries. The reason for this is because of the after-effects of the Soviet Union. There is a greater mistrust of members outside of the family and even extended family.
                            </p>


                        </div>
                        <div className="col-md-6 p-3">
                            <div style={{ backgroundImage: `url('${russian_family}')` }} className="p_right">

                            </div>
                        </div>
                      
                    </div>

                    <div>
                    <p>
                            The communist party ruled Russia and other territories for over 70 years, it finally broke in 1991 and the Iron Curtain opened.

                            
                            </p>
                        <p>
                            Due to news and even propaganda from both sides of the spectrum, we often have misconceptions about the Russian people and their culture. Thinking that Russia is just a cold vast tundra, however, the country is so big that Russia offers an array of terrains with amazing forests, countryside, mountains, and even a volcano.
                        </p>
                        <p>
                            The World’s largest lake can be found in Russia and actually holds around 20 percent of the world's supply of freshwater.

                            
                        </p>
                        <p>
                            The largest country by landmass in the world with a total area od 6,601,668 square miles. Nearly double the size of the United States.
                        </p>
                    </div>


                    <div className="row">
                        <div className="col-md-12 subhead">
                            <h2>Russian Language   </h2>
                        </div>
                        <div className="col-md-6">

                            <p>
                                Russian is the official language surprise, surprise other languages can be found in rather large percentages such as English being the second language and minority groups speaking other languages such as Mordvin, Ukrainian, and Dolgan.

                                
                            </p>


                        </div>
                        <div className="col-md-6 p-3">
                            <div style={{ backgroundImage: `url('${russian_logo}')` }} className="p_right">

                            </div>
                            {/* <img src="" alt="article_page"/> */}
                        </div>
                    </div>
                    <p>
                        As far as religion goes half of the Russian population is registered in the Russian Orthodox Church, Islam is the second-largest religion with around 15 percent of the population.
                            </p>



                            <div className="row">
                        <div className="col-md-12 subhead">
                            <h2>Russian Dance & Literature </h2>
                        </div>
                        <div className="col-md-6">

                            <p>
                            Ballet is a Russian pastime and the Bolshoi Ballet is world-renowned just like their gymnastic competitors and Ice Hockey players.
                                
                            </p>
                            <p>
                            Russian literature has spread its philosophies on life, love, and death with novels from Dostoevsky and Anna Karenina.

The bear and Russian nesting dolls known as Matrioshka dolls are two major symbols of 
                            </p>


                        </div>
                        <div className="col-md-6 p-3">
                            <div style={{ backgroundImage: `url('${russian_dance}')` }} className="p_right">

                            </div>
                            {/* <img src="" alt="article_page"/> */}
                        </div>
                    </div>
                    <p>
                    the country, the nesting dolls are made of wood and can be pulled apart and placed inside of a larger replica doll. The traditional style depicts a peasant Russian girl and some of the handcrafted and painted dolls can be extremely elaborate and beautiful works of art.
                    </p>

                    <p>
                        <div className="col-md-12 subhead h_2">
                            <h2> 3 Russian Language Tips</h2>
                        </div>

                        <div>
                            <p>
                            1. In Russian, formal and casual talk is so similar it will confuse most non-native speakers. When you first meet someone you should use an informal greeting <b>Вы</b> and then after you are allowed generally to start using the different greeting of;<b> ты</b>.
                        </p>
                            <p>
                            2. Don’t get too bent out of shape with regards to the future when speaking Russian. The verbs do not have future forms when in the first person. For example, you cannot say ‘I will win’ you instead would have to say something along the lines of; ‘I will be the winner’.
                        </p>
                            <p>

                            3. English isn’t so different. When you start to study the Russian language you will notice around one in ten Russian words are similar to English, even the pronunciation is distinguishable from the English words.
                        </p>
                            <p>
                            When it is allowed and safe once again I will be looking to take a trip Russia and breathe the cool air and listen to the Russian words glide through the streets from all angles until I am immersed into the sweet new sounds of these fascinating wonderful people.


                        </p>
                        <p>
                            I hope you will join me soon.


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
                                    <img src={MasalaChaiImage5} alt="check" />
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
                                    <img src={MasalaChaiImage3} alt="check" />
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

export default RussianBlog
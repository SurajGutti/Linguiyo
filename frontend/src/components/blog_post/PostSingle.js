import React from 'react'
import './PostSingle.css'
import { Link } from 'react-router-dom';
import one from './japan_images/1.jpeg';
import two from './japan_images/2.jpeg';
import three from './japan_images/3.jpeg';
import four from './japan_images/4.jpeg';
import five from './japan_images/5.jpeg';
import six from './japan_images/6.jpeg';
import seven from './japan_images/7.jpeg';
import eight from './japan_images/8.jpeg';
import nine from './japan_images/9.jpeg';
import ten from './japan_images/10.jpeg';
import eleven from './japan_images/11.jpeg';
import german_2 from '../german_blog/assets/Indian-Chai-Images/german_2.webp';
import german_1 from '../german_blog/assets/Indian-Chai-Images/german_1.webp';
import MasalaChaiImage from '../german_blog/assets/German/Screen Shot 2021-01-25 at 10.33.05 AM.png';
import logo from '../shared_assets/short_logo.png'


function PostSingle() {
    return (
        <div className="blog_single hub-background">
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

                    <h1>Anime will lead your way to learn Japanese!</h1>

                    <div className="row p-0 images_">
                        <div className="col-md-4 p-2">
                            <div className=" each_card">
                                <img src={one} alt="one" />
                            </div>

                        </div>
                        <div className="col-md-4   p-2">
                            <div className=" each_card">
                                <img src={two} alt="two" />
                            </div>

                        </div>
                        <div className="col-md-4  p-2">
                            <div className=" each_card">
                                <img src={three} alt="three" />
                            </div>

                        </div>

                        <div className="col-md-4 p-2">
                            <div className=" each_card">
                                <img src={four} alt="four" />
                            </div>
                        </div>
                        <div className="col-md-4 p-2">
                            <div className=" each_card">
                                <img src={five} alt="five" />
                            </div>

                        </div>
                        <div className="col-md-4  p-2">
                            <div className=" each_card">
                                <img src={six} alt="six" />
                            </div>

                        </div>

                        <div className="col-md-4 p-2">
                            <div className=" each_card">
                                <img src={seven} alt="seven" />
                            </div>

                        </div>
                        <div className="col-md-4   p-2">
                            <div className=" each_card">
                                <img src={eight} alt="eight" />
                            </div>

                        </div>
                        <div className="col-md-4  p-2">
                            <div className=" each_card">
                                <img src={nine} alt="nine" />
                            </div>

                        </div>
                    </div>

                    <div>
                        <p>
                            Since WWII all Japanese students have studied English at school and the English language is the most spoken second language in Japan behind Japanese of course.


                        </p>
                        <p>
                            English is mostly used in Business settings but Japanese culture will pretend to understand more English than they actually do because they are such a polite nation.


                        </p>
                        <p>
                            When you are learning Japanese and talking to natives of Japan whether you are speaking English or Japanese speak slowly and precisely and in short sentences to get your point across clearly.

                            Do not ask rhetorical questions and as much as you can avoid using idioms.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-12 subhead">
                            <h2>Writing in Japanese </h2>
                        </div>
                        <div className="col-md-6">

                            <p>
                                Study with supervision. When you write in Japanese you will be judged on every stroke. In English if you write letters slightly different it is not judged in a bad light it is just your own unique handwriting, but when you are writing in Japanese you will be looked at as being lazy or you did not want to learn correctly.
                            </p>

                        </div>
                        <div className="col-md-6 p-3">
                            <div className=".p_right img">
                                <img src={ten} alt="ten" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>
                            This is the same when you are eating in public or at a guest's house using chopsticks. If you do not use them the correct way in Japanese culture it will be looked at and noticed.
                        </p>
                        <p>
                            The basics of Kanji knowing the difference between stopping the pen stroke with a sudden halt and with a swoosh. This is something you need to understand when learning to write in Japanese.
                        </p>
                        <p>
                            You must focus on the hard parts and fundamentals of Japanese. Basic conversation, learning about family names, and time and particles will be essential when you first get started learning this language.
                        </p>
                        <p>
                            Repetition, repetition, and finally repetition as this language can be one of the hardest languages to learn as a Western native.
                        </p>
                    </div>


                    <div className="row">
                        <div className="col-md-12 subhead">
                            <h2>Cartoons, Drama’s and Anime  </h2>
                        </div>
                        <div className="col-md-6">

                            <p>
                                Anime and Manga comics have blown up in western culture and have created a massive fan base across the world showing Japanese culture and their love for telling stories in new and original mediums.
                            </p>
                            <p>
                                By reading official translations in both English and Japanese this is a perfectly entertaining way to keep your mind active and not bored while also learning while you have fun.
                            </p>

                        </div>
                        <div className="col-md-6 p-3">
                            <div className=".p_right img">
                                <img src={eleven} alt="eleven" />
                            </div>
                            {/* <img src="" alt="article_page"/> */}
                        </div>
                    </div>







                    <div>
                        <p>
                            Manga and Anime can also be a simple language that will be easier to understand and learn so it will be a great start before trying to read very difficult literature with a much larger vocabulary.
                        </p>
                    </div>
                    <p>
                        <div className="col-md-12 subhead h_2">
                            <h2>Translation </h2>
                        </div>

                        <div>
                            <p>
                                You can practice translating these comics word for word from Japanese to English to help you with the language and the context which will expand your vocabulary. But you should also read newspapers because this will offer more useful words that you will use in everyday life.
                        </p>
                            <p>
                                Japan is a culture of politeness, invention, efficiency, and punctuality. Their bullet trains are the fastest in the world and if they are 10 seconds late your journey is free. This says everything about this fascinating and impressive nation of bold ideas and innovation.
                        </p>
                            <p>
                                If you want to immerse yourself into this beautiful language please click to <span className="text-danger link_">enquire now</span>.
                        </p>
                        </div>
                    </p>

                    <div className="row medias_">
                        <div>
                            <span><i className="fa fa-facebook" aria-hidden="true"></i></span>
                            <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
                            <span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                            <span><i className="fa fa-link" aria-hidden="true"></i></span>
                        </div>
                    </div>

                    <div className="row justify-content-between d-flex medias_2">

                        <div>
                            <span>14 views</span>
                            <span>0 comments</span>
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

export default PostSingle

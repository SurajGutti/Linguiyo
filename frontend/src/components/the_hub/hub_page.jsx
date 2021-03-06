import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import vietnam from './images/vietnam.jpg';
import korea from './images/korea.jpg';
import punjabi from './images/punjabi.jpg';
import china from './images/china.jpg';
import english from './images/english.jpg';
import france from './images/france.jpg';
import german from './images/german.jpg';
import hindi from './images/hindi.jpg';
import italy from './images/italy.jpg';
import japan from './images/japan.jpg';
import languages from './images/languages.jpg';
import learning from './images/learning.jpg';
import portugal from './images/portugal.jpg';
import russia from './images/russia.jpg';
import turkey from './images/turkey.jpg';
import logo from './images/logo.png';
import ReactPlayer from "react-player";
import './hub_page_style.css';
import 'font-awesome/css/font-awesome.css';

class HubPage extends React.Component {
    render() {
        return (
            <div className="hub-background container-fluid">
                <div className="col-md-12  blog-inner">
                    <div className="row justify-content-between d-flex menu_2">
                        <Link className="all-post" to="/blog">All Posts</Link>  <span>Search</span>
                    </div>

                    {/* Raside Mein Kon Tha */}
                    <Link to="/posts/rasode_blog">
                        <div className="blog-content">
                            <div className="row outline">
                                <div className="col-md">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=BvhhQVmPIjc"
                                        muted={true}
                                        playing={true}
                                        height="100%"
                                        width="100%"
                                    />
                                </div>
                                <div className="col-md">
                                    <div className="creator">
                                        <div>
                                            <img className="logo" src={logo} alt="logo" />
                                        </div>
                                        <div>
                                            <h2>Linguiyo</h2>
                                            <h2>Jun 29, 2020  . 3 min</h2>
                                        </div>
                                        <div className="more-button">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="main-content">
                                        <div className="title-description">
                                            <h2>Rasode Mein Kon Tha?</h2>
                                            <p>I know we are late, but we had to do a ???rasode mein kon tha??? version.
                                        Presenting NYC style ???rasode mein kon tha,??? except for me all are non-native Hindi speakers.Hats off to all my students.</p>
                                        </div>
                                        <hr />
                                        <div className="views-comments">
                                            <h5>15 Views</h5>
                                            <h5 className="pl-4">0 comments</h5>
                                            <div className="heart">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    {/* Vietnam */}
                    <Link to="/posts/vietnam_blog">
                        <div className="blog-content">
                            <div className="row outline">
                                <div className="col-md">
                                    <img className="left-img" src={vietnam} alt="vietnam" />
                                </div>
                                <div className="col-md">
                                    <div className="creator">
                                        <div>
                                            <img className="logo" src={logo} alt="logo" />
                                        </div>
                                        <div>
                                            <h2>Linguiyo</h2>
                                            <h2>Jun 29, 2020  . 3 min</h2>
                                        </div>
                                        <div className="more-button">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="main-content">
                                        <div className="title-description">
                                            <h2>Vietnam - a hidden gem in Southeast Asia</h2>
                                            <p>Vietnam is a gorgeous country with landscapes and scenery that will blow your mind. Unfortunately, many people still think of Vietnam for the wrong reasons with regards to the long Vietnam war which was very controversial for many reasons, however, the people and the country is a place you should put on your bucket list.</p>
                                        </div>
                                        <hr />
                                        <div className="views-comments">
                                            <h5>13 Views</h5>
                                            <h5 className="pl-4">0 comments</h5>
                                            <div className="heart">
                                                <span>
                                                    1{'  '}<i className="fa fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    {/* Korea */}
                    <Link to="/posts/korea_blog">
                        <div className="blog-content">
                            <div className="row outline">
                                <div className="col-md">
                                    <img className="left-img" src={korea} alt="kimchi" />
                                </div>
                                <div className="col-md">
                                    <div className="creator">
                                        <div>
                                            <img className="logo" src={logo} alt="logo" />
                                        </div>
                                        <div>
                                            <h2>Linguiyo</h2>
                                            <h2>Jun 29, 2020  . 3 min</h2>
                                        </div>
                                        <div className="more-button">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="main-content">
                                        <div className="title-description">
                                            <h2>Know your superstitions when learning Korean</h2>
                                            <p>Now that you are learning about the exotic culture of South Korean you must know a few of their cultural superstitions.
                                        There are lots of other superstitions too in South Korean culture. For example, it's suggested that you shouldn???t allow your legs to shake restlessly or your feet to tap about as you are literally shaking off any good luck that might be coming your way.</p>
                                        </div>
                                        <hr />
                                        <div className="views-comments">
                                            <h5>13 Views</h5>
                                            <h5 className="pl-4">0 comments</h5>
                                            <div className="heart">
                                                <span>
                                                    1{'  '}<i className="fa fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    {/* Punjabi */}
                    <Link to="/posts/punjabi_blog">
                        <div className="blog-content">
                            <div className="row outline">
                                <div className="col-md">
                                    <img className="left-img" src={punjabi} alt="punjabi" />
                                </div>
                                <div className="col-md">
                                    <div className="creator">
                                        <div>
                                            <img className="logo" src={logo} alt="logo" />
                                        </div>
                                        <div>
                                            <h2>Linguiyo</h2>
                                            <h2>Jun 29, 2020  . 3 min</h2>
                                        </div>
                                        <div className="more-button">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="main-content">
                                        <div className="title-description">
                                            <h2>Learn Punjabi in 2020</h2>
                                            <p>Punjabi is an Indo Ayran language which is the native language for millions of people and the tenth most spoken language in the world. Most of the Punjabi speakers are in the Punjab region in Pakistan and also India. </p>
                                        </div>
                                        <hr />
                                        <div className="views-comments">
                                            <h5>13 Views</h5>
                                            <h5 className="pl-4">0 comments</h5>
                                            <div className="heart">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    {/* Portugal */}
                    <Link to="/posts/portugal_blog">
                        <div className="blog-content">
                            <div className="row outline">
                                <div className="col-md">
                                    <img className="left-img" src={portugal} alt="portugal" />
                                </div>
                                <div className="col-md">
                                    <div className="creator">
                                        <div>
                                            <img className="logo" src={logo} alt="logo" />
                                        </div>
                                        <div>
                                            <h2>Linguiyo</h2>
                                            <h2>Jun 29, 2020  . 3 min</h2>
                                        </div>
                                        <div className="more-button">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="main-content">
                                        <div className="title-description">
                                            <h2>Portugal a sleeping giant in a hidden paradise!</h2>
                                            <p>I fell in love with Portugal when I first visited years ago when I was just 17 years old. I went back last year and spent a few weeks on the beaches of Faro. What an amazing paradise this city and country is. The sea and surf is amazing, the people are friendly, and the architecture and food is full of color and taste.</p>
                                        </div>
                                        <hr />
                                        <div className="views-comments">
                                            <h5>13 Views</h5>
                                            <h5 className="pl-4">0 comments</h5>
                                            <div className="heart">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Japanese */}

                    <Link to="/posts/japan_blog">
                        <div className="blog-content">
                            <div className="row outline">
                                <div className="col-md">
                                    <img className="left-img" src={japan} alt="japan" />
                                </div>
                                <div className="col-md">
                                    <div className="creator">
                                        <div>
                                            <img className="logo" src={logo} alt="logo" />
                                        </div>
                                        <div>
                                            <h2>Linguiyo</h2>
                                            <h2>Jun 29, 2020  . 3 min</h2>
                                        </div>
                                        <div className="more-button">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="main-content">
                                        <div className="title-description">
                                            <h2>Anime will lead your way to learn Japanese!</h2>
                                            <p>Since WWII all Japanese students have studied English at school and the English language is the most spoken second language in Japan behind Japanese of course.English is mostly used in Business settings but Japanese culture will pretend to understand more English than they actually do because they are such a polite nation.</p>
                                        </div>
                                        <hr />
                                        <div className="views-comments">
                                            <h5>13 Views</h5>
                                            <h5 className="pl-4">0 comments</h5>
                                            <div className="heart">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* German */}
                    <Link to="/posts/german_blog">
                        <div className="blog-content">
                            <div className="row outline">
                                <div className="col-md">
                                    <img className="left-img" src={german} alt="german" />
                                </div>
                                <div className="col-md">
                                    <div className="creator">
                                        <div>
                                            <img className="logo" src={logo} alt="logo" />
                                        </div>
                                        <div>
                                            <h2>Linguiyo</h2>
                                            <h2>Jun 29, 2020  . 3 min</h2>
                                        </div>
                                        <div className="more-button">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="main-content">
                                        <div className="title-description">
                                            <h2>German beer is great, but their language is even better!</h2>
                                            <p>Germany is a country of ideas, thinking poets, and inventors. Their innovation, knowledge, and engineering is second to none. Germany was once a massive part of the Roman Empire and for centuries, has had one of the most stable country economies the world has ever seen.</p>
                                        </div>
                                        <hr />
                                        <div className="views-comments">
                                            <h5>13 Views</h5>
                                            <h5 className="pl-4">0 comments</h5>
                                            <div className="heart">
                                                <span>
                                                    2{'  '}<i className="fa fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    {/* Russia */}
                    <Link to="/posts/russian_blog">
                        <div className="blog-content">
                            <div className="row outline">
                                <div className="col-md">
                                    <img className="left-img" src={russia} alt="russia" />
                                </div>
                                <div className="col-md">
                                    <div className="creator">
                                        <div>
                                            <img className="logo" src={logo} alt="logo" />
                                        </div>
                                        <div>
                                            <h2>Linguiyo</h2>
                                            <h2>Jun 29, 2020  . 3 min</h2>
                                        </div>
                                        <div className="more-button">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="main-content">
                                        <div className="title-description">
                                            <h2>Russian???s aren???t just Bond villains!</h2>
                                            <p>I have not yet been to Russia but it is on my bucket list. A powerful charming and mystical place that is quite often misunderstood in British and American culture. What can we learn about this interesting culture and the language that we hear so often in Bond movies!</p>
                                        </div>
                                        <hr />
                                        <div className="views-comments">
                                            <h5>13 Views</h5>
                                            <h5 className="pl-4">0 comments</h5>
                                            <div className="heart">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    {/* Italy */}
                    <Link to="/posts/italy_blog">
                        <div className="blog-content">
                            <div className="row outline">
                                <div className="col-md">
                                    <img className="left-img" src={italy} alt="italy" />
                                </div>
                                <div className="col-md">
                                    <div className="creator">
                                        <div>
                                            <img className="logo" src={logo} alt="logo" />
                                        </div>
                                        <div>
                                            <h2>Linguiyo</h2>
                                            <h2>Jun 29, 2020  . 3 min</h2>
                                        </div>
                                        <div className="more-button">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="main-content">
                                        <div className="title-description">
                                            <h2>Passion, Love and Class, Welcome to Italy</h2>
                                            <p>In 2020 people will tell you that you will be better off learning Mandarin or Spanish than Italian? Of course, it is not as popular in business as the languages just mentioned; however, it is still an extremely useful language to speak and not just that it is more of a niche language that can create amazing opportunities for you and your career in the future.</p>
                                        </div>
                                        <hr />
                                        <div className="views-comments">
                                            <h5>13 Views</h5>
                                            <h5 className="pl-4">0 comments</h5>
                                            <div className="heart">
                                                <span>
                                                    1{'  '}<i className="fa fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    {/* French */}
                    <Link to="/posts/french_blog">
                        <div className="blog-content">
                            <div className="row outline">
                                <div className="col-md">
                                    <img className="left-img" src={france} alt="france" />
                                </div>
                                <div className="col-md">
                                    <div className="creator">
                                        <div>
                                            <img className="logo" src={logo} alt="logo" />
                                        </div>
                                        <div>
                                            <h2>Linguiyo</h2>
                                            <h2>Jun 29, 2020  . 3 min</h2>
                                        </div>
                                        <div className="more-button">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="main-content">
                                        <div className="title-description">
                                            <h2>French Fries are not so French after all!</h2>
                                            <p>France is a large European country with a very influencing culture that has been expanded across the globe promoting its cuisine, style, fashion, and language.I have been to France too many times to count and each time I learn something new and find a nice slice that is new, exciting, and different every time.</p>
                                        </div>
                                        <hr />
                                        <div className="views-comments">
                                            <h5>13 Views</h5>
                                            <h5 className="pl-4">0 comments</h5>
                                            <div className="heart">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    {/* English */}
                    <Link to="/posts/eng_post">
                        <div className="blog-content">
                            <div className="row outline">
                                <div className="col-md">
                                    <img className="left-img" src={english} alt="english" />
                                </div>
                                <div className="col-md">
                                    <div className="creator">
                                        <div>
                                            <img className="logo" src={logo} alt="logo" />
                                        </div>
                                        <div>
                                            <h2>Linguiyo</h2>
                                            <h2>Jun 29, 2020  . 3 min</h2>
                                        </div>
                                        <div className="more-button">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="main-content">
                                        <div className="title-description">
                                            <h2>Learning English Culture while chilling on Netflix!</h2>
                                            <p>Learning the English language it is not all about grammar, writing, and linguistics it is just as important to understand the culture because language and culture come hand in hand.English culture has spread around the globe and influenced many different nations with their literature, music, customs, cuisine, and invention.</p>
                                        </div>
                                        <hr />
                                        <div className="views-comments">
                                            <h5>13 Views</h5>
                                            <h5 className="pl-4">0 comments</h5>
                                            <div className="heart">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    {/* Mandarin */}
                    <Link to="/posts/mnd_post">
                        <div className="blog-content">
                            <div className="row outline">
                                <div className="col-md">
                                    <img className="left-img" src={china} alt="china" />
                                </div>
                                <div className="col-md">
                                    <div className="creator">
                                        <div>
                                            <img className="logo" src={logo} alt="logo" />
                                        </div>
                                        <div>
                                            <h2>Linguiyo</h2>
                                            <h2>Jun 29, 2020  . 3 min</h2>
                                        </div>
                                        <div className="more-button">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="main-content">
                                        <div className="title-description">
                                            <h2>Mandarin - the language of the future</h2>
                                            <p>With China becoming a worldwide superpower in business and tourism now has never been a better time to embrace this country's culture and language for potential careers and for social pleasures. How do you get started? Let's take a look.</p>
                                        </div>
                                        <hr />
                                        <div className="views-comments">
                                            <h5>13 Views</h5>
                                            <h5 className="pl-4">0 comments</h5>
                                            <div className="heart">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    {/* Turkish */}
                    <Link to="/posts/turkish_post">
                        <div className="blog-content">
                            <div className="row outline">
                                <div className="col-md">
                                    <img className="left-img" src={turkey} alt="turkey" />
                                </div>
                                <div className="col-md">
                                    <div className="creator">
                                        <div>
                                            <img className="logo" src={logo} alt="logo" />
                                        </div>
                                        <div>
                                            <h2>Linguiyo</h2>
                                            <h2>Jun 29, 2020  . 3 min</h2>
                                        </div>
                                        <div className="more-button">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="main-content">
                                        <div className="title-description">
                                            <h2>Turkish culture, what a delight!</h2>
                                            <p>Turkey is like no country on Earth. It has its own essence, vibes and community
                                            so open and friendly. The word stranger just does not exist in the minds of
                                            Turkish people or even in the Turkish language. Let???s investigate this wonderful
                                        culture of people.</p>
                                        </div>
                                        <hr />
                                        <div className="views-comments">
                                            <h5>13 Views</h5>
                                            <h5 className="pl-4">0 comments</h5>
                                            <div className="heart">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    {/* Hindi */}
                    <Link to="/posts/hin_post">
                        <div className="blog-content">
                            <div className="row outline">
                                <div className="col-md">
                                    <img className="left-img" src={hindi} alt="hindi" />
                                </div>
                                <div className="col-md">
                                    <div className="creator">
                                        <div>
                                            <img className="logo" src={logo} alt="logo" />
                                        </div>
                                        <div>
                                            <h2>Linguiyo</h2>
                                            <h2>Jun 29, 2020  . 3 min</h2>
                                        </div>
                                        <div className="more-button">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="main-content">
                                        <div className="title-description">
                                            <h2>Immerse yourself in Hindi culture during lockdown.</h2>
                                            <p>Are you interested in taking on the exciting challenge of learning not only a foreign language but a language that is musically eloquent and beautiful? Fantastic! Then let us jump right in and learn more about the Hindi and the culture behind it.</p>
                                        </div>
                                        <hr />
                                        <div className="views-comments">
                                            <h5>13 Views</h5>
                                            <h5 className="pl-4">0 comments</h5>
                                            <div className="heart">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    {/* Learning Language */}
                    <Link to="/posts/communication_blog">
                        <div className="blog-content">
                            <div className="row outline">
                                <div className="col-md">
                                    <img className="left-img" src={learning} alt="learning" />
                                </div>
                                <div className="col-md">
                                    <div className="creator">
                                        <div>
                                            <img className="logo" src={logo} alt="logo" />
                                        </div>
                                        <div>
                                            <h2>Linguiyo</h2>
                                            <h2>Jun 29, 2020  . 3 min</h2>
                                        </div>
                                        <div className="more-button">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="main-content">
                                        <div className="title-description">
                                            <h2>Why Learning Language is Important for our Future of Communication?</h2>
                                            <p>Language: the basic, fundamental building block for communication across all cultures. Language is the one thing that connects us as human beings and yet divides us, causing barriers to our understanding.</p>
                                        </div>
                                        <hr />
                                        <div className="views-comments">
                                            <h5>13 Views</h5>
                                            <h5 className="pl-4">0 comments</h5>
                                            <div className="heart">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    {/* 5 Secrets */}
                    <Link to="/posts/secret_blog">
                        <div className="blog-content">
                            <div className="row outline">
                                <div className="col-md">
                                    <img className="left-img" src={languages} alt="languages" />
                                </div>
                                <div className="col-md">
                                    <div className="creator">
                                        <div>
                                            <img className="logo" src={logo} alt="logo" />
                                        </div>
                                        <div>
                                            <h2>Linguiyo</h2>
                                            <h2>Jun 29, 2020  . 3 min</h2>
                                        </div>
                                        <div className="more-button">
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="main-content">
                                        <div className="title-description">
                                            <h2>5 Secrets of success to learn a new language</h2>
                                            <p>Looking to broaden your horizons and create new opportunities with your career, education and or cultural diversity? Here are 5 incredibly helpful tips to give you a massive head start on the daunting task of learning a new language.</p>
                                        </div>
                                        <hr />
                                        <div className="views-comments">
                                            <h5>13 Views</h5>
                                            <h5 className="pl-4">0 comments</h5>
                                            <div className="heart">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>


            </div >
        )
    }
}

export default HubPage
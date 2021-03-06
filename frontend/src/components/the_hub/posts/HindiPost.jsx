import React from 'react'
import './blogPost.css'
import { Link } from 'react-router-dom';
import img1 from './images/hindi/1.jpeg';
import img2 from './images/hindi/2.jpeg';
import img3 from './images/hindi/3.jpeg';
import img4 from './images/hindi/4.jpeg';
import img5 from './images/hindi/5.jpg';
import img6 from './images/hindi/6.jpeg';
import img7 from './images/hindi/7.jpeg';
import img8 from './images/hindi/8.jpeg';
import img9 from './images/hindi/9.jpeg';
import img10 from './images/hindi/10.png';
import img11 from './images/hindi/11.jpeg';
import logo from '../../shared_assets/short_logo.png'
import german_2 from '../../german_blog/assets/Indian-Chai-Images/german_2.webp';
import german_1 from '../../german_blog/assets/Indian-Chai-Images/german_1.webp';
import MasalaChaiImage from '../../german_blog/assets/German/Screen Shot 2021-01-25 at 10.33.05 AM.png';


function HindiPost() {
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

                    <h1>Mandarin - the language of the future</h1>

                    <div className="row p-0 images_">
                        <div className="col-md-4 p-2">
                            <div className=" each_card">
                                <img src={img1} />
                            </div>
                        </div>
                        <div className="col-md-4   p-2">
                            <div className=" each_card">
                                <img src={img2} />
                            </div>
                        </div>
                        <div className="col-md-4  p-2">
                            <div className=" each_card">
                                <img src={img3} />
                            </div>
                        </div>
                        <div className="col-md-4 p-2">
                            <div className=" each_card">
                                <img src={img4} />
                            </div>
                        </div>
                        <div className="col-md-4   p-2">
                            <div className=" each_card">
                                <img src={img5} />
                            </div>
                        </div>
                        <div className="col-md-4  p-2">
                            <div className=" each_card">
                                <img src={img6} />
                            </div>
                        </div>
                        <div className="col-md-4 p-2">
                            <div className=" each_card">
                                <img src={img7} />
                            </div>
                        </div>
                        <div className="col-md-4   p-2">
                            <div className=" each_card">
                                <img src={img8} />
                            </div>
                        </div>
                        <div className="col-md-4  p-2">
                            <div className=" each_card">
                                <img src={img9} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>
                            Are you interested in taking on the exciting challenge of learning not only a foreign language but a language that is musically eloquent and beautiful?
                        </p>
                        <p>
                            Fantastic! Then let us jump right in and learn more about the Hindi and the culture behind it.
                        </p>
                        <p>
                            So, you want to know about Hindi!
                        </p>
                        <p>
                            Hindi originated in the 17th century by blending Polulau languages in the surrounding areas from Delhi which is the capital of India with Urdu and Persian (brought in by previous Muslim rulers).
                        </p>
                        <p>
                            Hindi then derived from Prakrit which is where the Indo-Aryan languages are spawned from. Hindi is spoken in much of northern India, in the following Indian states (from north to south and west to east):
                        </p>
                        <p>
                            <div class="ui bulleted list">
                                <div class="item">Himachal Pradesh</div>
                                <div class="item">Uttarakhand</div>
                                <div class="item">Haryana</div>
                                <div class="item">Delhi</div>
                                <div class="item">Rajasthan</div>
                                <div class="item">Uttar Pradesh</div>
                                <div class="item">Bihar</div>
                                <div class="item">Madhya Pradesh</div>
                                <div class="item">Chhattisgarh</div>
                                <div class="item">Jharkhand</div>
                            </div>
                        </p>
                    </div>

                    <div className="col-md-12 subhead p-0">
                        <h2>How to learn Hindi</h2>
                    </div>

                    <div>
                        <p>
                            Hindi is less commonly acquired languages in comparison to Western languages such as English, Spanish, German, and French.
                            However, it is a great time to learn Hindi with India becoming more and more of a powerhouse economically and with their much-improved tourism industry.
                        </p>
                        <p>
                            India is one of the BRIC nations that will only increase the use of their languages and as you may know India has more than one language to choose from to learn.
                        </p>
                        <p>
                            But a wonderful place to start is learning Hindi and the Indian culture behind this interesting and philosophical language.
                        </p>
                    </div>

                    <div className="col-md-12 subhead p-0">
                        <h2>A few tips to learning Hindi </h2>
                    </div>

                    <div>
                        <p>
                            <div class="ui bulleted list">
                                <div class="item">Watch Bollywood movies and listen to Hindi radio stations. Immerse your ears to the pronunciations and sounds of the Hindi language and slang.</div>
                                <div class="item">One to one lessons will help you learn and the tutor will be able to tailor-make your lessons to your needs and skill set.</div>
                                <div class="item">Group lessons in coffee shops are another way to meet people who have the same hobbies and interests as you as well as using \
                            this time to converse and learn more about the language and culture before you decide to fly over there and immerse yourself in.</div>
                                <div class="item">Flashcards are so helpful in increasing your daily vocabulary to words you need daily.
                            By placing stickie notes on items around the house and having some flashcards on your desk or by your nightstand is another helpful tip to use the dead time to something productive and fun.</div>
                            </div>
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-12 subhead">
                            <h2>Hindi Culture</h2>
                        </div>
                        <div className="col-md-6">
                            <p>
                                To understand and appreciate the language better it is imperative to look deep into researching the Hindi culture. With the mesh of past cultures from all around the world influencing Hindi???s identity,
                                it has changed and impacted how Hindi culture is seen in the 21st century.
                            </p>
                            <p>
                                Because of this influence, it is not uncommon to have some teachers and purists never use borrowed words as some believe a Hindi speaker should only use original Hindi words.
                                However, more commonly today you will find most teachers do not mind mixing it up and using the so-called borrowed words in the Hindi language of 2020.
                            </p>
                        </div>
                        <div className="col-md-6 p-3">
                            <img src={img10} />
                        </div>
                    </div>

                    <div>
                        <p>
                            You will find English words as well as Arabic words in the Hindi language. With trading for centuries between the Middle East and of course a big influence of the British,
                            this is another reason why the Hindi culture is so bright with diversity and a cultural melting pot linguistically.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-12 subhead">
                            <h2>Indian Festivals</h2>
                        </div>
                        <div className="col-md-6">
                            <p>
                                You may not know if you have never been before, but India is a great place for festivals and celebrations.
                            </p>
                            <p>
                                Every year there are large festivals as Muslims celebrate Eid, Christians have Good Friday and Christmas, Sikhs and Baisakhi celebrating the harvesting of the crop and then the birthdays of Gurus. When it comes to Hindi celebrations and festivals there are; Diwali, Holi, Makar Sakranti to name a few.
                                Then there are other religions embracing their beliefs with auspicious days of joy and reflection.
                            </p>
                        </div>
                        <div className="col-md-6 p-3">
                            <img src={img11} />
                        </div>
                    </div>

                    <div>
                        <p>
                            India is a vibrant and fascinating country with diverse and interesting areas and people making it a place of learning and community. Hindi culture especially brings people together,
                            the family is everything but they share their joy and love with tourists and people all over the world sharing their knowledge and ways of life to those brave and curious enough to try something new and dive right in.
                        </p>
                        <p>
                            So, get stuck in and learn more about not only ways to learn the Hindi language but more importantly how Hindi came to be.
                            To understand the language you are speaking first you must understand the people and culture of where that language comes from.
                        </p>
                        <p>
                            If you want to immerse yourself into this beautiful language please click to <span className="text-danger link_">enquire now</span>.
                        </p>
                    </div>

                    <div className="row medias_">
                        <div>
                            <i class="facebook f icon"></i>
                            <i class="twitter icon"></i>
                            <i class="linkedin icon"></i>
                            <i class="share alternate icon"></i>

                        </div>

                    </div>
                    <div className="row justify-content-between d-flex medias_2">

                        <div>
                            <span>39 views</span>
                            <span>0 comments</span>
                        </div>

                        <span>1 <i class="heart outline icon"></i></span>
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

export default HindiPost

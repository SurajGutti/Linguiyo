import React from 'react'
import './blogPost.css'
import { Link } from 'react-router-dom';
import img1 from './images/english/1.png';
import img2 from './images/english/2.png';
import img3 from './images/english/3.jpeg';
import german_2 from '../../german_blog/assets/Indian-Chai-Images/german_2.webp';
import german_1 from '../../german_blog/assets/Indian-Chai-Images/german_1.webp';
import MasalaChaiImage from '../../german_blog/assets/German/Screen Shot 2021-01-25 at 10.33.05 AM.png';
import logo from '../../shared_assets/short_logo.png'



function EnglishPost() {
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

                    <h1>Learning English Culture while chilling on Netflix!</h1>

                    <div className="row p-0 images_">
                        <div className="col-md-4 p-1">
                            <div className=" each_card">
                                <img src={img1} />
                            </div>
                        </div>
                        <div className="col-md-4   p-1">
                            <div className=" each_card">
                                <img src={img2} />
                            </div>
                        </div>
                        <div className="col-md-4  p-1">
                            <div className=" each_card">
                                <img src={img3} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>
                            Learning the English language it is not all about grammar, writing, and linguistics it is just as important to understand the culture because language and culture come hand in hand.
                        </p>
                        <p>
                            English culture has spread around the globe and influenced many different nations with their literature, music, customs, cuisine, and invention.
                            Not just English-speaking nations such as America, Australia, and Canada.
                        </p>
                        <p>
                            It is fair to say that there is nowhere on earth that has not been influenced in one way or another by England or the English language.
                        </p>
                    </div>

                    <div className="col-md-12 subhead p-0">
                        <h2>English Culture</h2>
                    </div>

                    <div>
                        <p>
                            The aspects of the region reflect the traditions and society that contribute to the English culture.
                        </p>
                        <p>
                            English and British culture derive from predominantly Anglo-Saxon people. With the main religious groups being Catholics and Protestants and now having the Church of England,
                            religion still plays a big role in English culture and traditions to this day. Albeit not as much as it used to be.
                        </p>
                    </div>

                    <div>
                        <p>
                            Being an Island nation and having to endure a rainy cold climate, the pub has become a symbol of community and brings the locals together at their local watering hole.
                        </p>
                        <p>
                            Sharing life, troubles, and having a good time in the warm while sipping on a nice pint of beer with their mates after work, before going home to the family for dinner.
                        </p>
                        <p>
                            The English are known for their dry humor and stiff upper lip which helped get the country through 2 world wars with an attitude of; ‘let's get through it and on with it.’
                            A strong island mentality has helped this nation strive throughout the centuries and has helped produce legends such as William Shakespeare, Charles Dickens, and Winston Churchill respectively.
                        </p>
                        <p>
                            Knowing more about the English people you will get to appreciate more of the common bond, humor, and common beliefs from the English public.
                        </p>
                        <p>
                            England also has become a beacon for multiculturalism and leads the way with races and nationalities living together in major cities like London, Birmingham, and Manchester.
                        </p>
                    </div>

                    <div className="col-md-12 subhead p-0">
                        <h2>English Pop Culture in 2020</h2>
                    </div>
                    <p>
                        Pop culture is a mainstream term that refers to ideas and thoughts portrayed in different mediums like film, music, and entertainment.
                        Now during 2020 with smartphones, social media, and the internet reaching most regions of the world, pop culture and the English language have spread exponentially with major Hollywood productions
                        and music being played on streaming services around the globe, being shared on social media platforms millions of times per day.
                    </p>
                    <p>
                        For those of us interested in learning a new language, there has never been so much material available for free to add to our studying regime and courses. By using some of these platforms in our spare time can be enjoyable and productive,
                        making you feel a little less guilty for procrastinating or watching too much Netflix.
                    </p>
                    <p>
                        <div className="col-md-12 subhead h_2 pb-3">
                            <h2>Netflix and chill</h2>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <p>
                                    Jurgen Klopp the Liverpool football Manager famously stated he learned English as a German native watching Friends. A perfect series with pretty basic dialogue and an easy storyline can make learning English fun, interesting, and engaging.
                                    You can learn slang, phrases, and not just verbal language but cultural actions and nonverbal cues in American and English culture.
                            </p>
                            </div>

                            <div className="col-md-6 p-3">
                                <div className="p_right">
                                    <img src={img3} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <p>
                                You can watch episodes on Netflix in English with your native language subtitles and as you get more confident you can then start reading the subtitles in English and put the written words to the sounds you are hearing.
                        </p>
                            <p>
                                Doing this in your own time will enhance your studying and you will see a dramatic improvement in your vocabulary, cultural knowledge, and pronunciation.
                        </p>
                            <p>
                                There is also a language learning feature with Netflix, allowing you to watch shows with two subtitles on at the same time so you can see the translations which help your mental vocabulary process.
                                It even recommends films and shows that are great to study while watching.
                        </p>
                            <p>
                                KnEmbrace tech, social media, YouTube and all of today’s technology to use as your arsenal when learning English daily.
                        </p>
                            <p>
                                Get watching and learning, it worked for me when learning Spanish and many of my students when learning English have found the same great results after using these helpful tips.
                        </p>
                            <p>
                                If you want to immerse yourself into this beautiful language please click to <span className="text-danger link_">enquire now</span>.
                        </p>
                        </div>

                    </p>





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
                            <span>10 views</span>
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

export default EnglishPost

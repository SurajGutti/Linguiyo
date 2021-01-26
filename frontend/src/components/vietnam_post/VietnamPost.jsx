import React from 'react';
import './VietnamPost_style.css';
import { Link } from 'react-router-dom';
import one from './vietnam_images/1.jpeg';
import two from './vietnam_images/2.jpeg';
import three from './vietnam_images/3.jpeg';
import four from './vietnam_images/4.jpeg';
import five from './vietnam_images/5.jpeg';
import six from './vietnam_images/6.jpeg';
import seven from './vietnam_images/7.jpeg';
import eight from './vietnam_images/8.jpeg';
import nine from './vietnam_images/9.jpeg';
import ten from './vietnam_images/10.jpeg';



function VietnamPost() {
    return (
        <div className="vietnam_blog container-fluid">
            <div className="col-md-12  blog_inner">
                <div className="row justify-content-between d-flex menu_1">
                    <Link to="/blog">All Posts</Link> <span><i className="fa fa-search"></i></span>
                </div>

                <div className="col-md-12 blog_inner_2">

                    <div className="row justify-content-between d-flex menu_">
                        <span>Linguiyo Jun 5, 2020 2 min read</span>
                        <span>Menu</span>
                    </div>

                    <h1>Vietnam - a hidden gem in Southeast Asia</h1>

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
                            Vietnam is a gorgeous country with landscapes and scenery that will blow your mind. Unfortunately, many people still think of Vietnam for the wrong reasons with regards to the long Vietnam war which was very controversial for many reasons, however, the people and the country is a place you should put on your bucket list.

                            So when you get there, use these 5 tips to help you learn some of the lingo before you get there.
                        </p>
                    </div>

                    <div className="col-md-12 subhead p-0">
                        <h2>1. No Genders</h2>
                    </div>
                    <div>
                        <p className="mt-1">
                            If you've ever learned French, Spanish, or just about any major European language except English, you just breathed a huge sigh of relief. Vietnamese has no concept of “masculine” or “feminine” words. You can just enjoy learning the words as it is, without getting confused which one is which and worrying about offending people if you use the wrong term.
                            Trust me, I have been there many a time and stuck my foot in my mouth!
                        </p>
                    </div>

                    <div className="col-md-12 subhead p-0">
                        <h2>2. The Vietnamese “a” and “the”</h2>
                    </div>
                    <div>
                        <p className="mt-1">
                            What do you tell someone learning English when do you use “a” before a word, and when to use “the”? It’s a surprisingly complicated topic for the average person even native English speakers.
                            But is it really that important whether you’re talking about “a” something or “the” something? It’s usually obvious from the context. Much easier to just do away with them, which is what Vietnamese does. Người can mean both a person or “the person”, and you do not have to worry about using the exact distinction of each term which is very nice and handy for us foreigners trying to learn.
                        </p>
                    </div>

                    <div className="col-md-12 subhead p-0">
                        <h2>3. Did you know Vietnamese has no Plurals?</h2>
                    </div>
                    <div>
                        <p className="mt-1">
                            In English, when we want to make something plural we usually put an “s” at the end of it. “Dog” becomes “dogs”, “table” becomes “tables.” However, in English, as we know there are many exceptions. “Person” becomes “people”, “man” becomes “men”, and some words like “sheep” don’t change at all.
                        </p>
                        <p>
                            In Vietnamese, everything is like a sheep. The word người, which we spoke about earlier, can be used for both “people” or “person”; “chó” is “dog” or “dogs”.

                            And it’s not just nouns that are simple…
                        </p>
                    </div>


                    <div className="col-md-12 subhead p-0">
                        <h2>4. Vietnamese Has No Confusing Verb Endings</h2>
                    </div>
                    <div>
                        <p className="mt-1">
                            People like myself who have learned Spanish would wish it was more like Vietnamese. Even to say something as simple as the word “speak” (hablar), he or she has to learn five or six (depending on dialect) different verb endings for the present tense alone. I hablo, you hablas, he habla, we hablamos, and the list goes on.
                        </p>
                        <p>
                            Spanish verbs (and nouns, and adjectives) inflect, this means the same word can take different forms depending on the context. English isn’t nearly as inflective as Spanish, but we still do it – for example, the word “speak” can inflect to “speaks”, “speaking”, “spoken”, or “spoke”.

                            Here's the good news: Vietnamese is a completely non-inflective language – no word ever changes its form in any context. Learn the word nói, and you know how to say “speak” in all contexts and tenses for all speakers. I nói, you nói, he or she nói, we nói, you all nói, and they nói. That’s dozens, if not hundreds of hours of work saved compared to learning almost any European language.
                        </p>
                        <p>
                            A corollary to this is something that will give anyone who’s studied a European language a sigh of relief.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-12 subhead">
                            <h2>5. Vietnamese Learn In Two Minutes </h2>
                        </div>
                        <div className="col-md-6">
                            <p>
                                Vietnamese tenses are so easy it’s practically cheating. Just take the original verb, e.g. “ăn” (to eat), and stick one of the following 5 words in front of it:
                            </p>
                            <ul className="pl-5 mt-2">
                                <li className="mt-2">đã = in the past</li>
                                <li className="mt-2">mới = in the recent past, more recently than đã</li>
                                <li className="mt-2">đang = right now, at this very moment</li>
                                <li className="mt-2">sắp = soon, in the near future</li>
                                <li className="mt-2">sẽ = in the future</li>
                            </ul>

                        </div>
                        <div className="col-md-6 p-3">
                            <div className="p_right">
                                <img src={ten} alt="ten" />
                            </div>
                        </div>
                    </div>

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
                                        <span>Views 14</span>
                                        <span className="ml-2">Comments O</span>
                                    </div>

                                    <span>O Likes</span>
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
                                        <span>Views 14</span>
                                        <span className="ml-2">Comments O</span>
                                    </div>

                                    <span>O Likes</span>
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
                                        <span>Views 14</span>
                                        <span className="ml-2">Comments O</span>
                                    </div>

                                    <span>O Likes</span>
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

export default VietnamPost

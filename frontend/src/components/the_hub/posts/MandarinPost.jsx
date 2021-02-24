import React from 'react'
import './blogPost.css'
import { Link } from 'react-router-dom';
import logo from '../../shared_assets/short_logo.png'
import img1 from './images/mandarin/1.jpeg';
import img2 from './images/mandarin/2.jpeg';
import img3 from './images/mandarin/3.jpeg';
import img4 from './images/mandarin/4.jpeg';
import img6 from './images/mandarin/6.jpeg';
import img7 from './images/mandarin/7.jpeg';
import img8 from './images/mandarin/8.jpeg';
import img9 from './images/mandarin/9.jpeg';
import img10 from './images/mandarin/10.png';
import img11 from './images/mandarin/11.jpeg';
import img12 from './images/mandarin/12.jpeg';
import german_2 from '../../german_blog/assets/Indian-Chai-Images/german_2.webp';
import german_1 from '../../german_blog/assets/Indian-Chai-Images/german_1.webp';
import MasalaChaiImage from '../../german_blog/assets/German/Screen Shot 2021-01-25 at 10.33.05 AM.png';


function MandarinPost() {
    return (
        <div className="blog_single hub-background">
            <div className="col-md-12  blog_inner">
                <div className="row justify-content-between d-flex menu_1">
                    <Link className="all-post" to="/blog">All Posts</Link> <span><i className="fa fa-search"></i></span>
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
                                <img src={img11} />
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
                            With China becoming a worldwide superpower in business and tourism now has never been a better time to embrace this country's culture and language for potential careers and for social pleasures.
                            How do you get started? Let's take a look.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-12 subhead">
                            <h2>Is Chinese Too Difficult</h2>
                        </div>
                        <div className="col-md-6">
                            <p>
                                For many citizens of European countries and from the Western world learning Mandarin seems impossible.
                                Learning a new language is hard enough let alone having to understand tones and a completely different alphabet than we are used to.
                            </p>
                            <p>
                                But you must look at it from the other side.
                            </p>
                        </div>
                        <div className="col-md-6 p-3">
                            <img src={img10} />
                        </div>
                    </div>

                    <div>
                        <p>
                            From Asian cultures learning a European language like English or German, they have the same problem and challenges but they learn and study and become fluent.
                            You can too, take on something that is hard and very alien to your norm and you will surprise yourself at what you can achieve
                        </p>
                        <p>
                            Chinese culture is rich and fascinating and when I decided to study more about Chinese culture it started opening my mind to the language more and more because suddenly I realized it is not alien or strange at all.
                            It becomes a part of your thinking and life. You start to feel natural the more you discover and instead of having the dread of the unknown and scared to fail you start to embrace the culture and language hand in hand.
                        </p>
                        <p>
                            Two major difficulties that we find when learning Mandarin is the necessity to learn Chinese characters and the four tones in Mandarin can be quite confusing at first and rather mind-blowing in my case.
                            By immersing yourself with audio content that is a little simpler than most dialogue this will help your ear even before studying the Chinese characters.
                        </p>
                        <p>
                            By reading the Romanized version Pinyin this will give you exposure to the sounds of words and that along with listening to good audio content will help you when you jump into learning the characters and pronunciations.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-12 subhead">
                            <h2>The Chinese Characters </h2>
                        </div>
                        <div className="col-md-6">
                            <p>
                                Chinese characters consist of some components which represent a meaning like telling a story. Each meaning will give a suggestion to the sound of the character. Obviously, this takes time to recognize,
                                and sometimes it is not always so simple or even reliable but it is a good base to start off when learning.
                            </p>
                        </div>
                        <div className="col-md-6 p-3">
                            <img src={img11} />
                        </div>
                    </div>

                    <div>
                        <p>
                            A common question people ask me is if it is better to study simplified characters or traditional characters when just starting out. My first response will always be it depends on where in China you plan on visiting, living, or working.
                            What do you need to learn the language for or what are your motivations?
                        </p>
                        <p>
                            If you are going to be living and working in Mainland China you should learn simplified. The majority of Chinese people in the world use the simplified system and it will put you in good stead for your future in China and learning the language.
                        </p>
                        <p>
                            But if your company, for example, is based in Taiwan or Hong Kong I would definitely recommend you to learn traditional characters in these environments.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-12 subhead">
                            <h2>Chinese Ethnic Groups</h2>
                        </div>
                        <div className="col-md-6">
                            <p>
                                The Chinese Government actually has 56 recognized ethnic groups but 92 percent of the total of China is made up of the Han ethnicity group.
                                With the Chinese population around 1.3 billion people, it is important to realize that within each ethnic group has its own social customers, dress, language, and social customs.
                            </p>
                            <h3 class="ui header">Chinese Culture & Family</h3>
                            <p>
                                If you plan on living and working in China it is nice to know how important family life and family members are to the Chinese people. You may think this would be an obvious statement as all countries and people love their families.
                                However just like Italian culture the Chinese go above and beyond to look after their elders and make the family name and honor proudly.
                            </p>
                        </div>
                        <div className="col-md-4 p-3" style={{ left: '10%' }}>
                            <div className="p_right">
                                <img src={img12} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>
                            Most families in China focus on the youngest children and the whole community is built around then and focusing on their needs. Parents, grandparents, children 3 different generations tend to all live together and many also work in family businesses together,
                            passing it onto the next generation.
                        </p>
                        <p>
                            Festivals and celebrations of this unity are extremely important and bring extended family gatherings a time to spend even more time together and enjoy the love and atmosphere of being happy, healthy and well.
                        </p>
                        <p>
                            Get learning so you will be ready to jump into some of these celebrations and dramatic Chinese festivals and be able to communicate with the locals.
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
                            <span>19 views</span>
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

export default MandarinPost

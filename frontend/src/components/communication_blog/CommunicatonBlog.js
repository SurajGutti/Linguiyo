import React from 'react'
import './CommunicationBlog.css'
import BooksImage from './assets/books.jpg'
import MasalaChaiImage from './assets/background.webp'
import BackgroundImage from './assets/background.webp'
import 'font-awesome/css/font-awesome.css';
import logo from '../shared_assets/short_logo.png'

function CommunicationBlog() {
    return (
        <div  style={{ backgroundImage: `url('${BooksImage}')` }} className="blog_german container-fluid hub-background">
            <div className="col-md-12  blog_inner">
                <div className="row justify-content-between d-flex menu_1">
                    <span>All Posts</span>  <span><i className="fa fa-search"></i></span>
                </div>

                <div className="col-md-12 blog_inner_2">

                    <div className="row justify-content-between d-flex menu_ menu_up">
                        <span><img className="logo_" src={logo} alt="check"/>Linguiyo Jun 5, 2020 2 min read</span>
                        <span><i class="fa fa-ellipsis-v"></i></span>
                    </div>
                    <div className="ty">
                        <h1>German beer is great, but their language is even better!</h1>
                    </div>


                    <div className="row p-0 d-flex justify-content-between images_">
                        <div style={{ backgroundImage: `url('${BackgroundImage}')` }} className="col-md-12 bg_i">


                        </div>
                    </div>

                    <div>
                        <p>
                            Language: the basic, fundamental building block for communication across all cultures. Language is the one thing that connects us as human beings and yet divides us, causing barriers to our understanding. There are apparent daily advantages to learning a language, whether that be a foreign language or simply improving your natal language skills. From the time we are born to the time we reach adolescence, language is thrust upon us through rigorous practice techniques and teachings. Every language teacher prides themselves on how well their students can retain grammar rules and integrate them into their communication- verbally and written. Now, in modern times, our ways of communicating and learning language art skills are changing. What will the future of language look like? Let us explore a few reasons why learning language is important for our future of communication.
                        </p>

                    </div>

                    <div className="row">
                        <div className="col-md-12 subhead styled">
                            <h2>Improve Intellectual Capital </h2>
                        </div> 
                    </div>

                    <div>
                        <p>
                        Learning language- a foreign one or improving your natal tongue- will significantly increase what is known as intellectual capital. Essentially, this means your communication and writing skills will be enhanced, making yourself more knowledgeable and intelligent. Imagine you are a hiring manager at a prestigious corporation. Which candidate would stick out to you most, someone with minimal language knowledge or someone with excellent grammar who is also bilingual? Language is a valuable tool to use for opening the door to opportunity, whether that be for a job or fostering your own personal growth in some way. Language is the easiest way to make yourself- mentally- more valuable.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-12 subhead styled">
                            <h2>Greater Cultural Understanding</h2>
                        </div> 
                    </div>

                    <div>
                        <p>
                        Our Earth’s amazing cultures all across the globe are more blended than ever, thanks to modern technology and a human desire for connectivity. Learning a foreign language allows us to truly communicate and understand other people who come from backgrounds different than our own. Language can serve as a translator of worlds, offering the opportunity to connect on a level unheard of in the past. In a society often plagued by intolerance for misunderstandings, now is the perfect time for young adults (and children) to use language in the name of good.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-12 subhead styled">
                            <h2>Higher Brain Performance</h2>
                        </div> 
                    </div>

                    <div>
                        <p>
                        Did you know that learning language actually has cognitive benefits? Learning a foreign language and taking the time to improve your native language skills has been scientifically proven to increase brain performance. Bilingual individuals often have larger brains, better memory, heightened creativity, and overall higher brain functions. Learning language keeps your mind "on its toes" and, thus, more activated than individuals who have minimal language skills.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-12 subhead styled">
                            <h2>Virtual Ways of Learning: The Future of Communication</h2>
                        </div> 
                    </div>

                    <div>
                        <p>
                        Traditional methods of learning language include reading books or being taught by a teacher. Now, our digital world offers virtual ways of learning- straight from the palm of our hand. We live in an era where a foreign language can be learned through Linguiyo instead of visiting a classroom and undergoing hours of classes and homework assignments. The future of communication is virtual, and it will continue to evolve along with technology. How will you change the future of communication?
                        </p>
                    </div>


                    
                    

                    <p>
                        <div className="col-md-12 subhead h_2">
                            <h2>Tips to learn German</h2>
                        </div>

                        <div>
                         
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
                                    <img src={MasalaChaiImage} alt="check" />
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
                                    <img src={MasalaChaiImage} alt="check" />
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

export default CommunicationBlog
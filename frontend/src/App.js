import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelpPage from './components/help_page/help_page';
import UserShow from './components/users/user_show';
import HomePage from './components/home_page/home_page';
import CulturalExpShow from './components/cultural_experiences_show/cultural_exp_show';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import CulturalExperience from './components/culture_experience_landing/CulturalExperience';
import PostSingle from './components/blog_post/PostSingle';
import VietnamPost from './components/vietnam_post/VietnamPost';
import KoreaPost from './components/korea_post/KoreaPost';
import PunjabiPost from './components/punjabi_post/PunjabiPost';
import HubPage from './components/the_hub/hub_page';
import SecondCultShowPage from './components/cultural_experiences_show/2nd_show_page';
import LanguageCourseHindi from './components/languagecourses/languagecourse-hindi';
import LanguageCourseSpanish from './components/languagecourses/languagecourse-spanish';
import LanguageCourseChinese from './components/languagecourses/languagecourse-chinese';
import LanguageCourseFrench from './components/languagecourses/languagecourse-french';
import Header from './components/header/Header'
import LanguagesMain from './components/languages_main/languages_main';
import GermanBlog from './components/german_blog/german_blog';
import TurkishPost from './components/turkish_post/TurkishPost';
import RussianBlog from './components/russian_blog/russian_blog';
import EnglishPost from './components/the_hub/posts/EnglishPost';
import MandarinPost from './components/the_hub/posts/MandarinPost';
import HindiPost from './components/the_hub/posts/HindiPost';
import CommunicationBlog from './components/communication_blog/CommunicatonBlog';


function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/help" component={HelpPage} />
      {/* use a wildcard below - /users/:id */}
      <Route exact path="/users/priya" component={UserShow} />
      {/* use a wildcard below - /cultural-experiences/:exp-id */}
      <Route exact path="/cultural-experiences/1" component={CulturalExpShow} />
      <Route exact path="/cultural-experiences/2" component={SecondCultShowPage} />
      {/* The initial cultural-experience page  */}
      <Route exact path="/cultural-experience-main" component={CulturalExperience} />
      {/*  language course page  1 */}
      <Route exact path="/language-courses/hindi" component={LanguageCourseHindi} />
      <Route exact path="/language-courses/spanish" component={LanguageCourseSpanish} />
      <Route exact path="/language-courses/chinese" component={LanguageCourseChinese} />
      <Route exact path="/language-courses/french" component={LanguageCourseFrench} />
      {/* use a wildcard below - /posts/:post-id */}
      <Route exact path="/blog" component={HubPage} />
      <Route exact path="/posts/japan_blog" component={PostSingle} />
      <Route exact path="/posts/vietnam_blog" component={VietnamPost} />
      <Route exact path="/posts/german_blog" component={GermanBlog} />
      <Route exact path="/posts/russian_blog" component={RussianBlog} />

      <Route exact path="/posts/eng_post" component={EnglishPost} />
      <Route exact path="/posts/mnd_post" component={MandarinPost} />
      <Route exact path="/posts/hin_post" component={HindiPost} />

      <Route exact path="/posts/korea_blog" component={KoreaPost} />
      <Route exact path="/posts/turkish_post" component={TurkishPost} />
      <Route exact path="/posts/punjabi_blog" component={PunjabiPost} />

      <Route exact path="/languages-main" component={LanguagesMain} />
      <Route exact path="/posts/communication_blog" component={CommunicationBlog} />
      <Footer />
    </BrowserRouter >
  );
}

export default App;

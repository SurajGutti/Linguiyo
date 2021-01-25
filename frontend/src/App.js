import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelpPage from './components/help_page/help_page';
import UserShow from './components/users/user_show';
import HomePage from './components/home_page/home_page';
import CulturalExpShow from './components/cultural_experiences_show/cultural_exp_show';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
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
import Header from './components/header/Header'
import LanguagesMain from './components/languages_main/languages_main';
import GermanBlog from './components/german_blog/german_blog';
import RussianBlog from './components/russian_blog/russian_blog';


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
      <Route exact path="/cultural-experience-land" component={CulturalExperience} />
      <Route exact path="/cultural-experience-main" component={CulturalExperience} />
      {/*  language course page  1 */}
      <Route exact path="/language-courses/hindi" component={LanguageCourseHindi} />
      <Route exact path="/language-courses/spanish" component={LanguageCourseSpanish} />
      {/* use a wildcard below - /posts/:post-id */}
      <Route exact path="/blog" component={HubPage} />
      <Route exact path="/posts/1" component={PostSingle} />
      <Route exact path="/posts/2" component={VietnamPost} />

      <Route exact path="/posts/german_blog" component={GermanBlog} />
      <Route exact path="/posts/russian_blog" component={RussianBlog} />
      <Route exact path="/posts/3" component={KoreaPost} />
      <Route exact path="/posts/4" component={PunjabiPost} />

      <Route exact path="/languages-main" component={LanguagesMain} />
      <Footer />
    </BrowserRouter >
  );
}

export default App;

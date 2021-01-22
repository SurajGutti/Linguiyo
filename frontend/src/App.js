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
import LangCourse from './components/languagecourses/langcourse';
import PostSingle from './components/blog_post/PostSingle';
import VietnamPost from './components/vietnam_post/VietnamPost';
import HubPage from './components/the_hub/hub_page';
import Header from './components/header/Header'
import LanguagesMain from './components/languages_main/languages_main';


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

      <Route exact path="/cultural-experience-main" component={CulturalExperience} />
      
      {/*  language course page  1 */}
      <Route exact path="/language-courses/1" component={LangCourse} />
      {/* use a wildcard below - /posts/:post-id */}
      <Route exact path="/blog" component={HubPage} />
      <Route exact path="/posts/1" component={PostSingle} />
      <Route exact path="/posts/2" component={VietnamPost} />
      <Route exact path="/languages-main" component={LanguagesMain} />
      <Footer />
    </BrowserRouter >
  );
}

export default App;

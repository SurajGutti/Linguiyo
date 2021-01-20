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
import HubPage from './components/the_hub/hub_page';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/help" component={HelpPage} />
      {/* use a wildcard below - /users/:id */}
      <Route exact path="/users/priya" component={UserShow} />
      {/* use a wildcard below - /cultural-experiences/:exp-id */}
      <Route exact path="/cultural-experiences/1" component={CulturalExpShow} />
      {/* The initial cultural-experience page  */}
      <Route exact path="/cultural-experience-land" component={CulturalExperience} />
      {/*  language course page  1 */}
      <Route exact path="/language-courses/1" component={LangCourse} />
      {/* use a wildcard below - /posts/:post-id */}
      <Route exact path="/posts/1" component={PostSingle} />
      <Route exact path="/blog" component={HubPage} />
      <Footer />
    </BrowserRouter >
  );
}

export default App;

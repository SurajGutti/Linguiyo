import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelpPage from './components/help_page/help_page';
import UserShow from './components/users/user_show';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}


      <Route exact path="/help" component={HelpPage} />
      {/* use a wildcard below - /users/:id */}
      <Route exact path="/users/priya" component={UserShow} />


      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;

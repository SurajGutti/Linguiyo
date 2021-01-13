import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import HelpPage from './components/help_page/help_page';
=======
import HomeScreen from './components/screens/HomeScreen';
>>>>>>> c899808309d1c622aeacbd22ad24407fe52a82d4
import UserShow from './components/users/user_show';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}


<<<<<<< HEAD
      <Route exact path="/help" component={HelpPage} />
      {/* use a wildcard below - /users/:id */}
      <Route exact path="/users/priya" component={UserShow} />
=======
        <Route exact path="/" component={HomeScreen} />
        {/* use a wildcard below - /users/:id */}
        <Route exact path="/users/priya" component={UserShow} />
>>>>>>> c899808309d1c622aeacbd22ad24407fe52a82d4


      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './components/screens/HomeScreen';
import UserShow from './components/users/user_show';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}


        <Route exact path="/" component={HomeScreen} />
        {/* use a wildcard below - /users/:id */}
        <Route exact path="/users/priya" component={UserShow} />


      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;

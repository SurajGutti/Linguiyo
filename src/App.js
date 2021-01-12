import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={HomeScreen} />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';
import SignIn from './auth/SignIn';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route exact path='/signin' element={<SignIn />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  };
}

export default App;

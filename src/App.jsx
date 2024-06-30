import React from "react";
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/loginPage.jsx';
import SignUpPage from './pages/signUpPage.jsx';

function App(){
  return(<>

    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/SignUpPage" element={<SignUpPage/>}/>
      </Routes>
    </Router>
  </>);
}

export default App;
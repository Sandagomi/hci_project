import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Members from './components/Members';
import MemberRegistration from './components/MemberRegistration'
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="header">
        <Header/>
        </div>
        <div className="content">
          {/*<Home className="home"/>*/}
          {/*<MemberRegistration/>*/} 
          {/*<Members/>*/}
          
        </div>
      </div>
      <div className="footer">
      <Footer/>
      </div>
    </div>
  );
}

export default App;

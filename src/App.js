import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from "./components/Home";
import Members from "./components/Members";
import MemberRegistraion from "./components/MemberRegistration"
import MemberSingle from "./components/MemberSingle";
import SongsUpload from "./components/SongsUpload";
import SongsStream from "./components/SongsStream";
import Songs from "./components/Songs";
import SongsList from "./components/SongsList";
import ContactUs from "./components/ContactUs";
import ImageRender from "./components/ImageRender";
import MemberUpdate from "./components/MemberUpdate";


import "./App.css";

function App() {
  return (
    <Router>
    <div className="page-container">
      <div className="content-wrap">
        <div className="header"></div>
          <Header />
        
        <div className="content">
          <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/MemberRegistraion" component={MemberRegistraion}/>
         <Route path="/Members" component={Members}/>
         <Route path="/MemberSingle" component={MemberSingle}/>
         <Route path="/SongsUpload" component={SongsUpload}/>
         <Route path="/Songs" component={Songs}/>
         <Route path="/SongsList" component={SongsList}/>
         <Route path="/SongsStream" component={SongsStream}/>
         <Route path="/ContactUs" component={ContactUs}/>
         <Route path="/ImageRender " components={ImageRender}/>
         <Route path="/MemberUpdate" component={MemberUpdate}/>
         </Switch>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
    </Router>
  );
}

export default App;

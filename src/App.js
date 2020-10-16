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
import SongsStream2 from "./components/SongsStream2";
import SongsStream3 from "./components/SongStream3";
import SongsStream4 from "./components/SongStream4";
import Songs from "./components/Songs";
import SongsList from "./components/SongsList";
import ContactUs from "./components/ContactUs";
import ImageRender from "./components/ImageRender";
import ImageUpload from "./components/ImageUpload";
import MemberUpdate from "./components/MemberUpdate";
import AboutUs from "./components/AboutUs";


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
         <Route path="/SongsStream2" component={SongsStream2}/>
         <Route path="/SongsStream3" component={SongsStream3}/>
         <Route path="/SongsStream4" component={SongsStream4}/>
         <Route path="/ContactUs" component={ContactUs}/>
         <Route path="/ImageUpload" components={ImageUpload}/>
         <Route path="/MemberUpdate" component={MemberUpdate}/>
         <Route path="/AboutUs" component={AboutUs}/>
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

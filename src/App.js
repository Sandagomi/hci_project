import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from "./components/Home";
import Members from "./components/Members";
import Songs from "./components/Songs";
import ContactUs from "./components/ContactUs"


import "./App.css";

function App() {
  return (
    <Router>
    <div className="page-container">
      <div className="content-wrap">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Switch>
         <Route path="/Home" component={Home}/>
         <Route path="/Members" component={Members}/>
         <Route path="/Songs" component={Songs}/>
         <Route path="/ContactUs" component={ContactUs}/>
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

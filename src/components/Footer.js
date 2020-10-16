import React from "react";
import {Link} from "react-router-dom"
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-one">
            <i className="facebook f icon" />
          </div>

          <div className="col-two">
            <i className="instagram icon" />
          </div>

          <div className="col-three">
            <i className="twitter square icon" />
          </div>
        </div>
        <div className="details">
          <p><Link to="/ContactUs"><a className="detailsOne">Contact Us</a></Link> | <Link to="/AboutUs"><a className="detailsTwo">About Us</a> </Link></p>
        </div>
        <br />
        <div className="row">
          <p className="col-reserved">
            &copy;{new Date().getFullYear()} HCI Project | SlIIT | All Rights
            Reserved | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;

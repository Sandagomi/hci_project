import React from "react";
import "../css/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="maincontactcontainer">
      <div className="contacticon">
        <i class="envelope outline icon"></i>
      </div>

      <div className="contact_container">
        <div className="head">
          Contact Us <i class="envelope outline icon"></i>
        </div>

        <div class="ui form success">
          <div className="email">
            <div class="field">
              <label>E-mail</label>
              <input type="email" placeholder="joe@schmoe.com" />
            </div>
          </div>

          <div class="ui form">
            <div class="field">
              <label>Text</label>
              <textarea></textarea>
            </div>

          </div>
          <div class="ui success message">
            <div class="header">Please fill the above</div>
            <p>Your feedback is our success!</p>
          </div>
          
          <div class="ui submit button">Submit</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

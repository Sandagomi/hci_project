import React from 'react';
import '../css/MemberRegistration.css'

const MemberRegistration = () => {


    return (
        <div className="main_container">
            <div className="registration">
            <form className="ui form">
                <div className="field">
                      <label>First Name</label>
                         <input type="text" name="first-name" placeholder="First Name"/>
                 </div>
                 <div className="field">
                       <label>Last Name</label>
                           <input type="text" name="last-name" placeholder="Last Name"/>
                 </div>
                 <div className="field">
                       <label>Email</label>
                           <input type="text" name="Email" placeholder="Email"/>
                 </div>
                <div className="field">
               <div className="ui checkbox">
                        <input type="checkbox" tabindex="0" className="hidden"/>
                            <label>I agree to the Terms and Conditions</label>
              </div>
             </div>
                 <button className="ui button" type="submit">Register</button>
                </form>
            </div>

            <div className="login">
            <form className="ui form">
                <div className="field">
                      <label>UserName</label>
                         <input type="text" name="UserName" placeholder="UserName"/>
                 </div>
                 <div className="field">
                       <label>Password</label>
                           <input type="text" name="Password" placeholder="Password"/>
                 </div>
              
                 <button className="ui button" type="login">login</button>
                 <span>Forgot Password?</span>
                 
                 <div className="guest_button">
                 <button className="ui button" type="login">As a Guest</button>
                 </div>
                
                </form>

            </div>
           
            
        </div>
    )

}
export default MemberRegistration;
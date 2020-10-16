import React, { useState } from 'react';
import {Link} from "react-router-dom"
import '../css/MemberRegistration.css'

const MemberRegistration = () => {

    const [firstName,setFirstName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [email, setEmail] = useState ("");

    const [firstNameErr,setFirstNameErr] = useState({})
    const [lastNameErr, setLastNameErr] = useState({})
    const [emailErr,setEmailErr] = useState({})

    const onSubmit = (e) => {

        e.preventDefault();
        const isValid = formValidation();

    }

    const formValidation = () => {

        const firstNameErr = {};
        const lastNameErr = {};
        const emailErr = {};
        let isValid = true;

        if (firstName.trim().length < 2) {
            firstNameErr.firstNameShort = "First Name is too short";
            isValid = false;
        }
        if (lastName.trim().length < 2) {
            lastNameErr.lastNameShort = "last name is too short";
            isValid = false;
        }
        if (!email.includes("@")){
            emailErr.emailAtSign = "email must contains @ sign";
            isValid = false;
        }


        setFirstNameErr(firstNameErr);
        setLastNameErr(lastNameErr);
        setEmailErr(emailErr);

        return isValid;

    }


    return (
        <div className="main_container">
            <div className="registration">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                      <label>First Name</label>
                         <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" name="first-name" placeholder="First Name"/>
                 </div>
                 {Object.keys(firstNameErr).map((key)=>{
                     return <div style={{color:"red"}}>{firstNameErr[key]}</div>
                 })}
                 <div className="field">
                       <label>Last Name</label>
                           <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" name="last-name" placeholder="Last Name"/>
                 </div>
                 {Object.keys(lastNameErr).map((key)=>{
                     return <div style={{color:"red"}}>{lastNameErr[key]}</div>
                 })}
                 <div className="field">
                       <label>Email</label>
                           <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" name="Email" placeholder="Email"/>
                 </div> 
                 {Object.keys(emailErr).map((key)=>{
                     return <div style={{color:"red"}}>{emailErr[key]}</div>
                 })}
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
                           <input type="password" name="Password" placeholder="Password"/>
                 </div>
              
                 <button className="ui button" type="login">login</button>
                 <span>Forgot Password?</span>
                 
                 <div className="guest_button">
                     <Link to="/Members"><button className="ui button" type="login">As a Guest</button></Link>
               
                 </div>
                
                </form>

            </div>
           
            
        </div>
    )

}
export default MemberRegistration;
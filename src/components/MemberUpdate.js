import React, { useState } from 'react';
import "../css/MemberUpdate.css";

const MemberUpdate = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    

    const [firstNameUpdateErr,setFirstNameUpdateErr] = useState({})
    const [lastNameUpdateErr, setLastNameUpdateErr] = useState({})
    const [emailUpdateErr,setEmailUpdateErr] = useState({})
    


    const onSubmit = (e) => {

        e.preventDefault();
        const isValid = formValidationUpdate();

    }

    const formValidationUpdate = () => {

        const firstNameUpdateErr = {};
        const lastNameUpdateErr = {};
        const emailUpdateErr = {};
        const birthDateUpdateErr = {};
        let isValid = true;

        if (firstName.trim().length < 2) {
            firstNameUpdateErr.firstNameTooShort = "First Name is too short";
            isValid = false;
        }
        if (lastName.trim().length < 2) {
            lastNameUpdateErr.lastNameTooShort = "last name is too short";
            isValid = false;
        }
        if (!email.includes("@")){
            emailUpdateErr.emailAtSign = "email must contains @ sign";
            isValid = false;
        }

        


        setFirstNameUpdateErr(firstNameUpdateErr);
        setLastNameUpdateErr(lastNameUpdateErr);
        setEmailUpdateErr(emailUpdateErr);
        

        return isValid;

    }


    return(
        <div className="update-container">
            <form onSubmit={onSubmit} class="ui form">
             <div class="field">
                  <label>First Name</label>
                    <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" name="first-name" placeholder="First Name"/>
            </div>
            {Object.keys(firstNameUpdateErr).map((key)=>{
                     return <div style={{color:"red"}}>{firstNameUpdateErr[key]}</div>
                 })}
            <div class="field">
                  <label>Last Name</label>
                      <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" name="last-name" placeholder="Last Name"/>
            </div>
            {Object.keys(lastNameUpdateErr).map((key)=>{
                     return <div style={{color:"red"}}>{lastNameUpdateErr[key]}</div>
                 })}
            <div class="field">
                  <label>Email</label>
                      <input value={email} onChange={(e)=>setEmail(e.target.value)}  type="text" name="email" placeholder="Email"/>
            </div>
            {Object.keys(emailUpdateErr).map((key)=>{
                     return <div style={{color:"red"}}>{emailUpdateErr[key]}</div>
                 })}
            
            <div class="field">
            
             </div>
             <button class="ui button" type="submit">Submit Details</button>
            </form>
        </div>
    )


}
export default MemberUpdate;
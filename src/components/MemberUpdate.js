import React, { useState } from 'react';
import "../css/MemberUpdate.css";

const MemberUpdate = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");

    const [firstNameUpdateErr,setFirstNameUpdateErr] = useState({})
    const [lastNameUpdateErr, setLastNameUpdateErr] = useState({})
    const [emailUpdateErr,setEmailUpdateErr] = useState({})
    const [birthDateUpdateErr, setBirthDateUpdateErr] = useState({});


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

        if (!birthDate.includes("asd")){
            birthDateUpdateErr.datestrings = "Should be a valid date";
            isValid = false;
        }


        setFirstNameUpdateErr(firstNameUpdateErr);
        setLastNameUpdateErr(lastNameUpdateErr);
        setEmailUpdateErr(emailUpdateErr);
        setBirthDateUpdateErr(birthDateUpdateErr);

        return isValid;

    }


    return(
        <div className="update-container">
            <form onSubmit={onSubmit} class="ui form">
             <div class="field">
                  <label>First Name</label>
                    <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" name="first-name" placeholder="First Name"/>
            </div>
            <div class="field">
                  <label>Last Name</label>
                      <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" name="last-name" placeholder="Last Name"/>
            </div>
            <div class="field">
                  <label>Email</label>
                      <input value={email} onChange={(e)=>setEmail(e.target.value)}  type="text" name="email" placeholder="Email"/>
            </div>
            <div class="field">
                  <label>BirthDate</label>
                      <input value={birthDate} onChange={(e)=>setBirthDate(e.target.value)}  type="text" name="BirthDate" placeholder="BirthDate"/>
            </div>
            <div class="field">
            
             </div>
             <button class="ui button" type="submit">Submit Details</button>
            </form>
        </div>
    )


}
export default MemberUpdate;
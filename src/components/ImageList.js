import React, { useState } from "react";

const ImageList = () => {
  const [term, setTerm] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const onFeildChange = (e) => {
    setTerm(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onButtonClick = (e) => {
    setShowPassword(!showPassword);
  };

  const algoPassowrd = showPassword ? password : "*".repeat(password.length);

  return (
    <div className="imagelistcontainer">
      <div className="searchfield">
        <label>Search </label>
        <input value={term} type="text" onChange={onFeildChange} />
      </div>
      <div className="passwordfield">
        <input value={password} type="password" onChange={onPasswordChange} />
      </div>
      <div>{term}</div>
      <div>{algoPassowrd}</div>
      <button onClick={onButtonClick}>show/hide password</button>
    </div>
  );
};
export default ImageList;

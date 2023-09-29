import React, { useState } from 'react'
import zxcvbn from 'zxcvbn';
import Home from './Home';

const Loginpage = ({onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');
    const [Loggedin, setLoggedin] = useState(false);
    const [error, setError] = useState("");
    const hanldSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email) === false) {
            setError('Please enter a valid email');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        onLogin();
        setLoggedin(true);
    }
    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    }
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordStrength(zxcvbn(newPassword).score);
      };
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
  return (
    <div>
        <h1>LOGIN</h1>
      <form onSubmit={hanldSubmit} >
        <p>Email :</p><input type="email" placeholder="Email" onChange={handleEmailChange}/>
        <br /><br />
        <p style={{ color: passwordStrength < 3 ? "red" : "green" }}>Password : </p><input type="password" placeholder="Password" onChange={handlePasswordChange} />
        <p style={{ color: "red" }}>{error}</p>
        <button type="submit">Login</button>
      </form>
      {Loggedin && <Home></Home>}
    </div>
  )
}

export default Loginpage

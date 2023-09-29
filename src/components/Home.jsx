import React, { useEffect, useState } from 'react'
import Loginpage from './Loginpage'
import MainPage from './MainPage';

const Home = () => {
    const [loggedin,setLoggedin] = useState(false);
    useEffect(() => {
        const loggedIn = localStorage.getItem('LoggedIn');
        if(loggedIn){
            setLoggedin(true);
        }
    },[])
    
    const handlelogin = () => {
        setLoggedin(true);
        localStorage.setItem('LoggedIn', true);
    }

    const handlelogout = () => {
        setLoggedin(false);
        localStorage.removeItem('LoggedIn');
    }
  return (
    <div>
      {loggedin ?(<MainPage OnLogout={handlelogout}></MainPage>):(<Loginpage onLogin={handlelogin}></Loginpage>)}
    </div>
  )
}

export default Home

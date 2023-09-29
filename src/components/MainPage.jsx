import React from 'react'

const MainPage = ({OnLogout}) => {
  return (
    <div>
      <h1>WELCOME BACK</h1>
      <button type="button" onClick={() => {OnLogout()}}>LOGOUT</button>
    </div>
  )
}

export default MainPage
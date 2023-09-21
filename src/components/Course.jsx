import React, { useState } from "react";

const Course = () => {
  const [cn, setcn] = useState("");
  const [du, setdu] = useState("");
  const [fe, setfe] = useState("");

  const hanldSubmit = (event) => {
    event.preventDefault();
    if (cn.trim() === "" || du.trim() === "" || fe.trim() === "") {
      alert("please fill all fields");
    }
    else {
      alert("Course Registered");
        
    }
}
  return (
    <div>
      <h1>JIBIN</h1>
      <form onSubmit={hanldSubmit}>
        Course{" "}
        <input
          type="text"
          onKeyUp={(event) => {
            setcn(event.target.value);
            console.log(cn);
          }}
        ></input>
        <br></br>
        Duration{" "}
        <input
          type="number"
          onChange={(event1) => {
            setdu(event1.target.value);
            console.log(du);
          }}
        ></input>
        
        Fee{" "}
        <input
          type="number"
          onChange={(event) => {
            setfe(event.target.value);
            console.log(fe);
          }}
        ></input>
        <br />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default Course;

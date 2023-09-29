import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Course = () => {
  const [coursedata, setCoursedata] = useState([]);
  const [coursedatas, setCoursedatas] = useState([]);
  const [cn, setcn] = useState("");
  const [du, setdu] = useState("");
  const [fe, setfe] = useState("");
  const [error, setError] = useState(false);

  const printdata = async () => {
    let coursedataarr = [];
    try {
      for (let key in coursedata) {
        coursedataarr.push(coursedata[key]);
        console.log(coursedata[key]);
      }
      setCoursedatas(coursedataarr);
    } catch (error) {
      console.log(error);
    }
  };

  const retrive = async () => {
    const serverUrl =
      "https://reacttest-c30f7-default-rtdb.asia-southeast1.firebasedatabase.app/Data.json";
    axios
      .get(serverUrl)
      .then((response) => {
        console.log("Data retrived successfully:", response.data);
        setCoursedata(response.data);
      })
      .catch((error) => {
        console.error("Error retriving data:", error);
      });
  };

  // useEffect(() => {
  //   retrive();
  // },[coursedatas])
  
  useEffect(() => {
    if(coursedatas.length == 0){
    retrive();
    printdata();}
  }, [coursedata]);

  const hanldSubmit = (event) => {
    event.preventDefault();
    if (cn.trim() === "" || du.trim() === "" || fe.trim() === "") {
      alert("please fill all fields");
      setError(true);
    } else {
      setError(false);
      const myobj = { cn, du, fe };
      const serverUrl =
        "https://reacttest-c30f7-default-rtdb.asia-southeast1.firebasedatabase.app/Data.json";
      try {
        const response = axios.post(serverUrl, myobj);
        console.log("Data sent successfully:", response.data);
        alert("Course Registered");
      } catch (error) {
        console.error("Error sending data:", error);
        alert("Error sending data");
      }
    }
  };
  return (
    <div>
      <h1>Form</h1>
      {error && <h5 style={{ color: "red" }}>Error occured</h5>}
      <form onSubmit={hanldSubmit}>
        Course
        <input
          type="text"
          onChange={(event) => {
            setcn(event.target.value);
          }}
        ></input>
        <br></br>
        Duration
        <input
          type="number"
          onChange={(event1) => {
            setdu(event1.target.value);
          }}
        ></input>
        <br></br>
        Fees
        <input
          type="number"
          onChange={(event) => {
            setfe(event.target.value);
          }}
        ></input>
        <br />
        <Button style={{margin:'10px'}} variant="contained" type="submit">save</Button>
      </form>
      <Button onClick={retrive} variant="contained">RETRIVE</Button>
      <table border={1}>
        <tr>
          <th>Course Name</th>
          <th>Duration</th>
          <th>Fees</th>
        </tr>
        {coursedatas.length > 0 &&
          coursedatas.map((item) => {
            return (
              <tr>
                <td>{item.cn}</td>
                <td>{item.du}</td>
                <td>{item.fe}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default Course;

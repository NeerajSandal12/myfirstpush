import React, { createContext, useState } from "react";
import Nav from "./Nav";
import Clock from "./Clock";
import Form_FIrst from "./Form_FIrst";
import "./App.css";
import Simple from "./Simple";
import Todo from "./Todo";
import {About} from "./about";
import SignUp2 from "./SignUp2";
import { Route, Routes, Link } from "react-router-dom";
import SignUp from './SignUp'
import E_404 from './E_404'
import Login from './Login'
import Footer from "./Footer";
export const AppContext=createContext(null);

function App() {
  function sendData(time) {
    alert("data recieved : " + time);
  }
const[nam,setNam]=useState();
  function  recData(d){
    console.log("Data Received"+d)
    setNam(d)
    console.log("nam"+nam)
  }

const [fName, setFName]=useState("Neeraj")
  return (
    <div className="imgg">
<AppContext.Provider value={{fName}}>
      <Nav name="Neeraj" />
      
      {/* <SignUp /> */}
     
      {/* <Link to={"/signup/"+id}><span style={{fontSize:30}}>Sign Up</span>
        </Link> */}
      <Routes>
      <Route path="*" element={<E_404 />}></Route>

        <Route
          path="/"
          element={
            <Simpl nam={nam}/>
            // <Clock user="jdsfn" data={sendData} />
          }
        ></Route>
        <Route path="/Login" element={ <Login/>}/>
        <Route path="/about" element={<About funcData={recData} />}></Route>
        <Route path="/testing" element={<Simple />}></Route>
        {/* <Route path="/signup/:id" element={<Simple />}></Route> */}

        {/* <Link  to="/form">Log In</Link> */}
        
        <Route path="/form" element={<SignUp />}></Route>
      </Routes>
      
      {/* <Todo></Todo> */}
      <Footer/>
      </AppContext.Provider>
    </div>
  );
}

function Simpl(props) {

  const [color, setColor]=useState("");
  const [value, setValue]=useState(false);
  const func=()=>{
    value?alert(color):alert("Please Enter Color Name")
  }
 console.log(props)
  return <div>
{props.nam}
<div className="box" style={{background:color}} onClick={func}>{}</div>
<input className="input"  type="text" placeholder="Enter Color Name" value={color} onChange={(e)=>{setColor(e.target.value);setValue(true)}}/>

  </div>;
}

export default App;

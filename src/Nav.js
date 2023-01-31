import React, { useState } from "react";
import "./Nav.css";
import Clock from "./Clock";
// import './imgs'
import Form from "./Form_FIrst";
import { BrowserRouter as Router, Link, NavLink, Route } from "react-router-dom";
function Nav() {
  // let toggle=document.getElementsByClassName('toggle-btn')[0];
  // toggle.addEventListener('click',()=>{
  //     alert("Hello")
  // })
  // const [actMm , Act]=useState();
  // let j;
  // let toggBtn=document.getElementsByClassName('toggle-btn')[0]
  //  let actM=document.getElementsByClassName('nav-items')[0]
  //  toggBtn.addEventListener('click',j=()=>{
  //         Act(j)
  //     })

  const [toggleBtn, setToggleBtn] = useState(false);
  //     const [count, setCount]=useState(0);
  // //   alert(setCount(count+1))
  //     let incre=() => {
  //         // alert()
  //     }
  let id = 2;
  return (
    <header className="header">
      <div className="nav">
        <div className="logo">
          <img className="img-logo" src="logo192.png" />
          <span className="logo-name">XYZ</span>
        </div>
        <div className="toggle-btn">
          <a
            href="#"
            className="toggle-btn1"
            onClick={() => setToggleBtn(!toggleBtn)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
        </div>
        <div className={toggleBtn ? " .nav-items.actives" : "nav-items"}>
          {/* <Router> */}

          <div className="ul">

            {/* <div className="li"> */}
            
          <NavLink style={({isActive})=>{return {backgroundColor:isActive?"orange":"red"}}} className="a" >

              {/* <li><a href="#">Home</a></li> */}
              <Link className="Link" to="/">
                Home
              </Link>
              </NavLink>

           
            <div className="a">
          <NavLink style={({isActive})=>{return {backgroundColor:isActive?"orange":""}}}>

              <Link acti className="Link" to={"/about"}>
                About
              </Link>
              </NavLink>
            </div>
            <div className="a">
              <Link className="Link" to={"/testing"}>
                Testing
              </Link>
            </div>
            <div className="a">
              <Link className="Link" to={"/Login"}>
                Login
              </Link>
            </div>
            <div className="a">
              <Link className="Link" to="/form">
                Signup
              </Link>
              
              {/* <li><a href="#">Contact</a></li> */}
              {/* <li><a href="#">Signup</a></li> */}
              {/* <li><a href="#">Login</a></li> */}
            </div>
            {/* </div> */}
          </div>
          {/* <Route path="form"><Form /></Route>
            </Router> */}
        </div>

        <div className="nav-icon">
          <ul className="ul-icons">
            <li>
              <a>
                <img className="img-icon" src="insta.jpg" />
              </a>
            </li>
            <li>
              <a>
                <img className="img-icon" src="gmail.png" />
              </a>
            </li>
            <li>
              <a>
                <img className="img-icon" src="yt.png" />
              </a>
            </li>
            <li>
              <a>
                <img className="img-icon" src="fb.png" />
              </a>
            </li>
            {/* <li><a><img className="img-icon" src="logo192.png"/></a></li> */}
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Nav;

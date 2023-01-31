import { wait } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { HiOutlineLogin } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { BiLock } from "react-icons/bi";
import "./login.css";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [items, setItems] = useState({ email: "", password: "" });

  // const handleChange = async (e)=>{
  async function handleChange() {
    // e.preventDefault();
    let item = { email };
    let result = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  }
  async function sendData() {}
  // console.log(items)
  //   useEffect(()=>{
  //     fetch("https://dummyjson.com/products").then((res)=>{
  //         res.json().then((resp)=>{
  //             console.log(resp)
  //         })
  //     },[])
  //   })
  return (
    <>
      <div className="main">
        <div class="container">
          <section id="content">
            <form action="">
              <span className="login-icon">
                {" "}
                <HiOutlineLogin />
              </span>
              <h1>Welcome User</h1>
              <div>
                <span className="user-icon">
                  <FaUser />
                </span>
                <input
                  type="text"
                  placeholder="Username *"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="username"
                />
                {/* <div className="err-msg">
                  Enter User Name
                </div> */}
              </div>
              <div>
                <span className="lock-icon">
                  <BiLock />
                </span>
                <input
                  type="password"
                  placeholder="Password *"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  id="password"
                />
              {/* <div className="err-msg">Enter User Name</div > */}
              </div>
              <div>
                <input type="submit" value="Log in" />
                <div className="links">
                  <Link to="/form">Register</Link>
                  <Link href="#">Forgot Password?</Link>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
     
    </>
  );
}

export default Login;

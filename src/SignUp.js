import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { FiAirplay } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { BsFillEyeSlashFill } from "react-icons/bs";
import "./form.css";
function  SignUp() {
    const [fieldData, setFieldData] = useState({
        name: "",
        email: "",
        password: "",
        vpassword: "",
      });
      const [names, setNames] = useState("");
      const { name, email, password, vpassword } = fieldData;
      const [typ, setTyp] = useState(false);
      const [isClear, setIsClear] = useState(false);
      const [count, setCount] = useState();
      const [errors, SetErrors] = useState({});

    const toggleIn = (e) => {
        e.preventDefault();
        setTyp(!typ);
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFieldData({ ...fieldData, [name]: value });
      }
        useEffect(() => {
            
            console.log("callback Called");
            SetErrors(validate(fieldData));
          }, [fieldData]);
        
          console.log(fieldData);
          const handleSubmit = (e) => {
            e.preventDefault();
            const { name, value } = e.target;
            console.log(fieldData);
            SetErrors(validate(fieldData));
          }
          const validate = (data) => {
            const err = {};
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!name) {
              err.name = "Enter  Name";
            }
            if (!regex.test(email)) {
              err.email = "Enter valid Email";
            }
            if (!password) {
              err.password = "Enter password";
            }
            if (!vpassword) {
              err.vpassword = "Enter password";
            }
            if (password != vpassword) {
              // alert("password doesn't matched")
              err.isMatched = false;
              err.passErr = "password doesn't matched";
            }
            return err;
          };
          const oChangeCapture=(e)=>{
             const c={}
           setCount({...count,[e.target.name]:1})
        
           return c
          }
          return (
            <>
              <div className="Main-Form">
                <div className="main">
                  <span className="head-label">Registration</span>
                  <form onSubmit={handleSubmit}>
                    <div className="forms">
                      <label className="labels" htmlFor="name">
                        Full Name <span style={{color:"red"}}>*</span>
                      </label>
                      <input
                        autoFocus
                        className={`input-box ${
                          errors.hasOwnProperty("name") ? "anima" : ""
                        }`}
                        type="text"
                        name="name"
                        placeholder=" Name*"
                        value={name.toUpperCase()}
                        onChange={handleChange}
                        onChangeCapture={()=>setCount(1)}
                      /> <div className="errors">
                      {count==1?errors.name:""}
                    </div>
                      <label className="labels" htmlFor="email">
                        Email  <span style={{color:"red"}}>*</span>
                      </label>
                      <input
                        value={email}
                        className={`input-box ${
                          errors.hasOwnProperty("email") ? "anima" : ""
                        }`}
                        type="text"
                        name="email"
                        placeholder=" Email*"
                        onChangeCapture={()=>setCount(1)}
                        onChange={handleChange}
                      />
                       <div className="errors">
                        {count==1?errors.email:""}
                      </div>
                      <label className="labels" htmlFor="password">
                        Password  <span style={{color:"red"}}>*</span>
                      </label>
                      <div className="pw">
                        <input
                          value={password}
                          className={`input-box ${
                            errors.hasOwnProperty("password") ? "anima" : ""
                          }`}
                          type={typ ? "text" : "password"}
                          name="password"
                          placeholder=" Password"
                          onChange={handleChange}
                          onChangeCapture={()=>setCount(1)}
                        />
                        <button onClick={(e) => toggleIn(e)} className="icons">
                          {typ ? <BsFillEyeSlashFill /> : <FaEye />}
                        </button>
                      </div>
                      <div className="errors">
                        {count==1?errors.password:""}
                      </div>
                      <label className="labels" htmlFor="vpassword">
                       Confirm Password  <span style={{color:"red"}}>*</span>
                      </label>
                      <input
                        value={vpassword}
                        className={`input-box ${
                          errors.hasOwnProperty("vpassword") ? "anima" : ""
                        }`}
                        type="password"
                        name="vpassword"
                        placeholder=" Password"
                        onChangeCapture={()=>setCount(1)}
                        onChange={handleChange}
                      />
                      <div className="errors">
                        {count==1?errors.hasOwnProperty('vpassword')?errors.vpassword:errors.passErr:""}
                      </div>
                      <button className="submit-btn" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          );
      } 
 export default SignUp;
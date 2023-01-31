import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { FiAirplay } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { BsFillEyeSlashFill } from "react-icons/bs";
import "./form.css";
function Form_First() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [vpassword, setVPassword] = useState("");

  // let submitdata = (e) => {
  //   e.preventDefault();
  //   if(fieldData.name ===""){
  //     alert("please Enter Something")
  //     setTyp(true)
  //   }else
  //   if(fieldData.password===fieldData.vpassword){
  //    alert("Data Submit Succesfully :"+fieldData.password+" Vpas: "+fieldData.vpassword)

  // }
  // else{
  //   alert("password doesn't matched: "+fieldData.password+" Vpas: "+fieldData.vpassword)
  // }};
  const toggleIn = (e) => {
    e.preventDefault();
    setTyp(!typ);
  };

  // const formsData={name:"",email:"",password:"",vpassword:""}
  // const formsDatas={name:"",email:"",password:"",vpassword:""}
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
// console.warn(count.n)
  //  ----------------------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldData({ ...fieldData, [name]: value });

    // ()=>console.log(fieldData)
    // setFieldDatas({...formsDatas})
    // console.log(fieldData);
    // console.log("--------------------------------------------")
    // console.log(value)
    // setFieldData(prev=>({...prev,aj:"sds"}))
    // setFieldData((prevData)=>
    // ({...prevData,[name]:value}
    // )}
    //  setFieldData(fieldData)
  };
  const t = true;
  //  const val="";
  //    useCallback(()=>{
  //     val= validate(fieldData)
  //     console.log("sdsd val  : ",val)
  // },[fieldData])
  // true?
// useReducer(()=>{
//   // count=1
//   setCount(1)
// },[fieldData])
// alert(count)
  useEffect(() => {
    
    console.log("callback Called");
    SetErrors(validate(fieldData));
  }, [fieldData]);

  console.log(fieldData);

  // const handleChange = (e)=>{

  // setNames((names)=>{
  // const n=e.target.value
  // return n
  // })
  // console.log(names)

  // }
  // ------------------------------------------------------------

  //  useCallback(()=>{
  //   SetErrors()
  //  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // setFieldData((prev) => ({ ...prev, [name]: value }));
    console.log(fieldData);

    SetErrors(validate(fieldData));
    // alert()
    // console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    //  const errs=Object.keys(errors)=="";
    // console.log(errors.hasOwnProperty('name'))
    //   !errs?setFieldData({name:"",email: "",password:"",vpassword:""}):setFieldData(fieldData)
  };

  const validate = (data) => {
    // console.log("validate func:  ",data)
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

  const changehandler=(e)=>{
    name=e.target.value.UpperCase();
    // setName
  }
  const c={
    n:0,

  }
  console.log("=================================",c.n)
  const oChangeCapture=(e)=>{
    //  c={}
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
              {Object.keys(errors)}
              <label className="labels" htmlFor="name">
                FullName
              </label>
              <input
                //  style={{ errors.hasOwnProperty('name')?:"" }}
                //  style={{border:Object.keys(errors)=="name"?"3px solid red":""}}
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
                // onChangeCapture={changehandler}
              /> <div className="errors">
              {/* <span>* </span> */}
              {count==1?errors.name:""}
            </div>
              
              {/* {email} */}
              <label className="labels" htmlFor="email">
                Email
              </label>
              <input
                value={email}
                //  style={{border: errors.hasOwnProperty('email')?"3px solid red":"" }}
                // style={{border:Object.keys(errors)=="email"?"3px solid red":""}}
                className={`input-box ${
                  errors.hasOwnProperty("email") ? "anima" : ""
                }`}
                type="text"
                name="email"
                placeholder=" Email*"
                onChangeCapture={()=>setCount(1)}
                // onMouseLeave={()=>setCount(2)}
                // onChange={(e) => {
                //   setEmail(e.target.value);
                // }}
                onChange={handleChange}
              />
               <div className="errors">
                {/* <span>* </span> */}
                {/* {errors.email} */}
                {count==1?errors.email:""}
              </div>
              <label className="labels" htmlFor="password">
                Password
              </label>
              <div className="pw">
                <input
                  //  style={{border: errors.hasOwnProperty('password')?"3px solid red":"" }}
                  // style={{border:Object.keys(errors)=="password"?"3px solid red":""}}
                  value={password}
                  className={`input-box ${
                    errors.hasOwnProperty("password") ? "anima" : ""
                  }`}
                  type={typ ? "text" : "password"}
                  name="password"
                  placeholder=" Password"
                  onChange={handleChange}
                  // onChangeCapture={oChangeCapture}
                  onChangeCapture={()=>setCount(1)}
                  // onMouseEnter={(e) => setCount(3)}
                />
                <button onClick={(e) => toggleIn(e)} className="icons">
                  {typ ? <BsFillEyeSlashFill /> : <FaEye />}
                </button>
              </div>
              <div className="errors">
                {/* <span>*</span> */}
                {/* {errors.password} */}
                {count==1?errors.password:""}
              </div>
              <label className="labels" htmlFor="vpassword">
                Password
              </label>
              <input
                //  style={{border: errors.hasOwnProperty('vpassword')?"3px solid red":"" }}
                // style={{border:Object.keys(errors)=="vpassword"?"3px solid red":""}}
                value={vpassword}
                className={`input-box ${
                  errors.hasOwnProperty("vpassword") ? "anima" : ""
                }`}
                type="password"
                name="vpassword"
                placeholder=" Password"
                onChangeCapture={()=>setCount(1)}
                // onChangeCapture={()=>setCount(4)}
                onChange={handleChange}
                // onChange={(e) => setVPassword(e.target.value)}
              />
              <div className="errors">
                {/* <span>*</span> */}
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

export default Form_First;

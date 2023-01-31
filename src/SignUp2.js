// import React, { useState } from "react";
// import "./simple.css";
// function SignUp() {
//   const [names, setName] = useState("");
//   const [data, setData] = useState([]);
//   const onchangeHandler = (e) => {
//     const perform={
//         name:names,
//         email:"email",
//         password:"Passwrod",
//         vpassword:"vpassword"
//     }
//     setData((data) =>{

//         let val=[ ...data, perform ]
//         return val
//     }
//      );
//     console.log(data);
//   };
//   console.log(data);

//   return (
//     <>
//       {names}
//       <br />
//       <input
//         className="input"
//         name="name"
//         type="text"
//         value={names}
//         onChange={(e)=>{setName(e.target.value)}}
//       />
//       <button onClick={onchangeHandler}>click</button>
//     </>
//   );
// }

// export default SignUp;

// import React from "react";
// export default class SignUp extends React.Component {
 
//   constructor() {
//     super();
//     this.state = {
//       name: "Neeraj",
//     };
//     // alert("Constructor Called");
//   }
 
//   shouldComponentUpdate(){
//     alert("ShouldComponent U[pdate Method")
//     return false

// }
// componentWillUnmount(){
//     alert("componentWillUnmount Method")
//   }
//   render() {
//     console.log(this.state)
//     return <div>

//         <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
//     </div>;
//   }
// }


import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from './App';
function SignUp() {
  const {fName}=useContext(AppContext)

  const [name, setName]=useState(fName);
  const count=useRef();
useEffect(()=>{
  // count.current=count.current+1
  console.log(count)
  console.log("----------------------------------")

})
  const handleChange=(e)=>{
    // console.log(e)
    setName(e.target.value)
  }

  const handleClick = ()=>{
    console.log(count)
    // alert()
    count.current.style.height="150px"
   console.log(count.current.style.height)
    // console.log(count.current.height+1)
  }
  return (
    <>
    <input style={{height:"50px"}} type="text" ref={count}  value={name} onChange={handleChange} />
    <button onClick={handleClick}>click me</button>
    </>

    )
}

export default SignUp

// import React, { useReducer } from 'react'

// const reducer=(state,action)=>{
// switch(action){
//   case"name":
//   // state="pooja"
//   // const names
//    console.log();
   
//    return {...state,names:"pooja"};
// }
// }

// export default function SignUp() {
// const initialArgs={
//   names:'neeeraj',
//   age:15
// }
// const [name,dispatch]=useReducer(reducer,initialArgs);

//   return (
//     <>
//     {name.names}{name.age}
// <button onClick={()=>dispatch("name")}>Change Name</button>
//     </>
//   )
// }



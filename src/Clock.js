import React, { useState } from "react";
import Nav from "./Nav";

function Clock(user) {
 
//   let date1=new Date();
  const[date ,setClocks]=useState();
  const[count ,setCount]=useState(1);
  let incre=()=>{
    // setCount(count+1)
    alert("You Clicked "+(user.user)+" Times"  + ":::  tome :  "+MP)
  }
  let time=new Date().toLocaleTimeString();
  let h=time.slice(0,1);
  let M=time.slice(2,4);
  let T=time.slice(5,7);
  let MP=time.slice(8,10)

  
  setInterval(()=>{
     let dates=new Date();
    let time=dates.toLocaleTimeString();
    let t=time.slice(8);
    // console.log(t)

    // alert(t)
  setClocks(time)},1000);
  //    let time=("00"+dates.getHours()).slice(-2)+" H"+": "+("00"+
  //    dates.getMinutes()).slice(-2)+" M"+": "+dates.getSeconds()+" S";
  //    setClocks(time);
  // },1000);
  // data=date;
  let nae="neeraj"

  return <div>Real time date is {date} 
  <Nav settime={setClocks}></Nav>
  <button onClick={()=>incre()} style={{ margin:"10px",fontSize:"20px", color:"white" ,background:"blue"}}>Count</button>
  <input type="text" onClick={()=>user.data(nae)} style={{ margin:"10px",fontSize:"20px", color:"white" ,background:"blue"}}></input>

  
  </div>;
}

export default Clock;

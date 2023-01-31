import { useEffect, useState } from "react"

export function About(props){
    
    const[count,setCount]=useState(0);
    const[data,setData]=useState([]);
    const[name,setName]=useState("");
    const[bool,setBool]=useState(false);
    let sett="";

    useEffect(()=>{
        fetch("https://").then((result)=>{
            result.json().then((resp)=>{
                console.warn("API : "+resp)
                setData(result)
            })
        })
    },[])
console.log(data)
const {funcData}=props;
useEffect(()=>
{if(bool)
   {sett= setTimeout(()=>setCount(count+1),1000)
    // console.log(" ")
}},[count])
const stop=()=>{
    clearTimeout(sett)
}
const start=()=>{
   setBool(true)
   setCount(count+1)
}


  return(
        <>
        <input  className="input" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your name" />
        <button onClick={()=>funcData(name)}>Send Data</button>
        
        {/* //UseEffect is as similar to componentDidMount we use useEffe */}
        <div>Welcome UseEffect Function {count} </div>
        <button onClick={()=>stop()}>Stop</button>
        <button onClick={()=>start()}>Start</button>

        </>
    )


}

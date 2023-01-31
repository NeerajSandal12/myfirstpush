// import React, { useState } from "react";

import { useEffect, useState, useCallback } from "react";
import "./simple.css";
// function Todo() {
//   const [text, setText] = useState("");
//   const [data, setData] = useState([]);
//   const [id, setId] = useState(0);

//   let getData = (e) => {
//     e.preventDefault();
//     const objData = {
//       data: text,
//     }
//     setData(...data,...objData)
//     alert(data)

// }
//   let Delete = (id) => {
//     const ids=2;
//     const fil=data.filter((item)=>(item.id!=ids
//     )

//     )
//     console.log(fil)
//     setData(fil);
// };
//   return (
//     <div style={{ margin: 10, fontSize: 20 }}>
//       <br></br> <label>Enter Todo's</label> <br></br>
//       <input
//         type="text"
//         placeholder="Enter Todos"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />{" "}
//       <button onClick={getData} type="submit">
//         +
//       </button>
//       <br />

//         {data.map((items, i) => (
//           <li key={i}>
//             {" "}
//             {items.data}
//             <button onClick={()=>Delete(i)} type="submit">
//               {" "}
//               X
//             </button>
//           </li>
//         ))}

//     </div>
//   );
// }

// export default Todo;

function Todo() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
// -------------------------------Updating Object Data ------------------------------

  const perform = () => {
    const update = {
      datas: text,
      name: name,
      isDone:false,
    };
    console.log("data Before : ",data)
    setData((data) => {
      const newData = [...data,update];
      return newData;
    });
    console.log("----------------------------------")

    console.log("data after : ",data)
    setText("");
    setName("");
  };
  console.log(data)

// -------------------------Delete---------------------------------
  const del = (i) => {
    const copyData = [...data];
    copyData.splice(i, 1);
    setData(copyData);
  };
// -------------------------Mark---------------------------------

const done=(i)=>{
    const todo=[...data]
    // console.log(todo)
    todo[i].isDone=true;
    setData(todo)
}

// -----------------------------------return-----------------------------
  return (
    <div style={{ margin: 10, fontSize: 20 }}>
      <br></br> <label>Enter Todo's</label> <br></br>
      <input className="input"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input className="input"
        type="text"
        placeholder="Enter Todos"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="" onClick={perform}>Click</button>
      {data.map((items, i) => (
        <li style={{textDecoration:items.isDone?"line-through":""}} className="divv" key={i}>
          {" "}
          {items.name}: {items.datas}
          <div className="bu ">
            <button  type="submit" onClick={() => del(i)} className="butto ">
              X
            </button >
            <button type="submit" onClick={() => done(i)} className="butto">
            ✔
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}
export default Todo;

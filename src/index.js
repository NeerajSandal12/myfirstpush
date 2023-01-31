// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
 
import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <App/>

  </Router>
);
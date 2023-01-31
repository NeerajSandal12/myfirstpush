import React from "react";
import { Link } from "react-router-dom";

function E_404() {
  const send = setTimeout(function () {
    window.location.replace("/");
  }, 5000);
  return (
    <>
      {" "}
      <div>Sorry, Page Not Found</div>
      <Link onMouseEnter={send} to="/"></Link>
      <button
        onClick={() => {
          window.location.replace("/");
        }}
      >
        Home
      </button>
    </>
  );
}

export default E_404;

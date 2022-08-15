import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

export default function () {
  return (
    <div className="container info">
      <h3>Laura Smith</h3>
      <p className="fe_dev">Frontend Developer</p>
      <small> laurasmith.website</small>
      <button>
        <i className="fa-solid fa-envelope"></i> Email
      </button>
    </div>
  );
}

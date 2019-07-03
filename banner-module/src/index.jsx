import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
const options = {
  openAtStart: false, // [boolean] true | false
  // // 設定啟動後是否要自動開或合，若設為false，就不要自勳開合；若為true是馬上自動開合；若為數字是幾毫秒之後開合
  autoToggle: 1000, // [boolean|number] true | false | 3000
  button: {
    closeText: "合", // [string]
    openText: "開", // [string]
    class: "btnnnnnnn" // [string]
  },
  class: {
    closed: "aaa", // [string]
    closing: "aaaing", // [string]
    opened: "opeaaned", // [string]
    opening: "opeaaning" // [string]
  },
  //transition: false,
  whenTransition: function() {
    console.log("--------whenTransition");
  }
};

ReactDOM.render(<App {...options} />, document.getElementById("app"));

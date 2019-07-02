import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
const oprions = {
  //openAtStart: false, // [boolean] true | false
  // 設定啟動後是否要自動開或合，若設為false，就不要自勳開合；若為true是馬上自動開合；若為數字是幾毫秒之後開合
  //autoToggle: false, // [boolean|number] true | false | 3000
  // button: {
  //   closeText: "aaa", // [string]
  //   openText: "bbb", // [string]
  //   class: "btn" // [string]
  // },
  class: {
    closed: "aaa", // [string]
    closing: "aaa", // [string]
    opened: "opeaaned", // [string]
    opening: "opeaaning" // [string]
  }
  //transition: false
  // whenTransition: function() {
  //   console.log("whenTransition");
  // }
};

// ReactDOM.render(<App options={oprions} />, document.getElementById("app"));
ReactDOM.render(<App {...oprions} />, document.getElementById("app"));

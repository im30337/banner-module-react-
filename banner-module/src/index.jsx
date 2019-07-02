import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
const oprions = {
  openAtStart: true, // [boolean] true | false
  // 設定啟動後是否要自動開或合，若設為false，就不要自勳開合；若為true是馬上自動開合；若為數字是幾毫秒之後開合
  autoToggle: true, // [boolean|number] true | false | 3000
  button: {
    closeText: "aaa", // [string]
    openText: "bbb", // [string]
    class: "btn" // [string]
  },
  class: {
    closed: "closed", // [string]
    closing: "closing", // [string]
    opened: "opened", // [string]
    opening: "opening" // [string]
  },
  transition: true,
  whenTransition: function() {
    console.log("whenTransition");
  }
};

ReactDOM.render(<App options={oprions} />, document.getElementById("app"));

import React from "react";
import Button from "./button.jsx";
import Wrap from "./wrap.jsx";
import PropTypes from "prop-types";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const defaultOption = {
      openAtStart: true, // [boolean] true | false
      // 設定啟動後是否要自動開或合，若設為false，就不要自勳開合；若為true是馬上自動開合；若為數字是幾毫秒之後開合
      autoToggle: true, // [boolean|number] true | false | 3000
      button: {
        closeText: "收合", // [string]
        openText: "展開", // [string]
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
    // defaultOption = { ...defaultOption, ...this.props.options };
    console.log(defaultOption);
    this.state = {
      option: this.props.options,
      myName: 2
    };
  }
  render() {
    console.log(this.state.option);
    return (
      <div className="banner">
        <Wrap />
      </div>
    );
  }
}

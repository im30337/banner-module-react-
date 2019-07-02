import React from "react";
import PropTypes from "prop-types";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: this.props,
      open: this.props.openAtStart,
      class: {
        closed: "closed", // [string]
        closing: "closing", // [string]
        opened: "opened", // [string]
        opening: "opening" // [string]
      },
      className: "",
      inAnimation: true
    };
    this.onInit = this.onInit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onAnimation = this.onAnimation.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
  }

  componentDidMount() {
    this.onInit();
  }

  onInit() {
    if (this.state.option.autoToggle) {
      setTimeout(() => {
        this.toggle();
      }, +this.state.option.autoToggle);
    }
  }

  onAnimation(transition) {
    if (!!transition) {
      setTimeout(() => {
        this.state.option.whenTransition();
      }, 3000 / 2);
    }
  }

  onAnimationEnd() {
    setTimeout(() => {
      this.setState({ inAnimation: false });
    }, 3000);
  }

  toggle() {
    this.setState({ open: !this.state.open, inAnimation: true });
    this.onAnimation(this.state.option.transition);
    this.onAnimationEnd(this.state.option.transition);
  }

  render() {
    var action = this.state.open ? "open" : "clos";
    var onAnimation = action + "ing";
    var endAnimation = action + "ed";
    var className = this.state.inAnimation
      ? this.state.class[onAnimation] +
        " " +
        this.state.class[endAnimation] +
        " " +
        this.state.option.class[onAnimation] +
        " " +
        this.state.option.class[endAnimation]
      : this.state.class[endAnimation] +
        " " +
        this.state.option.class[endAnimation];

    return (
      <div
        style={{
          transitionDuration: this.state.option.transition ? "3000ms" : "0"
        }}
        className={className + " banner"}
      >
        <a className="wrap" href="#">
          <img
            style={{
              transitionDuration: this.state.option.transition ? "3000ms" : "0"
            }}
            className="img"
            src="./img/1200x380.png"
            title="輸入廣告促銷說明文字"
            alt="輸入廣告促銷說明文字"
          />
        </a>
        <button
          className={this.state.option.button.class}
          onClick={this.toggle.bind(this)}
        >
          {this.state.open
            ? this.state.option.button.closeText
            : this.state.option.button.openText}
        </button>
      </div>
    );
  }
}

App.defaultProps = {
  openAtStart: true, // [boolean] true | false
  // 設定啟動後是否要自動開或合，若設為false，就不要自勳開合；若為true是馬上自動開合；若為數字是幾毫秒之後開合
  autoToggle: 1000, // [boolean|number] true | false | 3000
  button: {
    closeText: "收合", // [string]
    openText: "展開", // [string]
    class: "btn" // [string]
  },
  class: {
    closed: "aaa", // [string]
    closing: "bbb", // [string]
    opened: "ccc", // [string]
    opening: "ddd" // [string]
  },
  transition: true,
  whenTransition: function() {
    console.log("whenTransition");
  }
};

App.propTypes = {
  openAtStart: PropTypes.bool,
  autoToggle: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  button: PropTypes.shape({
    closeText: PropTypes.string, // [string]
    openText: PropTypes.string, // [string]
    class: PropTypes.string // [string]
  }),
  class: PropTypes.shape({
    closed: PropTypes.string, // [string]
    closing: PropTypes.string, // [string]
    opened: PropTypes.string, // [string]
    opening: PropTypes.string // [string]
  }),
  transition: PropTypes.bool,
  whenTransition: PropTypes.func
};

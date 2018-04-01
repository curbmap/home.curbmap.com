import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import "./Menu.scss";

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.resizeWindow = this.resizeWindow.bind(this);
  }
  resizeWindow(evt) {
    if (typeof this.setState === "function") {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
  }
  componentWillMount() {
    window.addEventListener("resize", this.resizeWindow);
    this.resizeWindow();
  }

  scroll(evt) {
    switch (evt.currentTarget.innerText) {
      case "Home":
        this.props.scrollTo(0);
        break;
      case "About":
        this.props.scrollTo(1 * (window.innerHeight - this.menu.clientHeight));
        break;
      case "Who":
        this.props.scrollTo(2 * (window.innerHeight - this.menu.clientHeight));
        break;
      case "Participate":
        this.props.scrollTo(3 * (window.innerHeight - this.menu.clientHeight));
        break;
      case "Contact":
        this.props.scrollTo(4 * (window.innerHeight - this.menu.clientHeight));
        break;
      default:
        break;
    }
  }
  componentDidMount() {
    this.props.register("menu", this.menu.clientHeight);
  }
  menu = null;
  render() {
    return (
      <div
        className="Menu"
        ref={ref => {
          this.menu = ref;
        }}
      >
        <a href="https://curbmap.com" className="left-container">
          <div className="left-container">
            <img src={logo} alt="map marker logo" className="brand-container" />Curbmap
          </div>
        </a>
        {this.state.width > 640 && (
          <div className="right-container">
            <div className="link-container" onClick={this.scroll}>
              Home
            </div>
            {"|"}
            <div className="link-container" onClick={this.scroll}>
              About
            </div>
            {"|"}
            <div className="link-container" onClick={this.scroll}>
              Who
            </div>
            {"|"}
            <div className="link-container" onClick={this.scroll}>
              Participate
            </div>
            {"|"}
            <div className="link-container" onClick={this.scroll}>
              Contact
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MainMenu;

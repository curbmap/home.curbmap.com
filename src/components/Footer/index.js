import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import hackforla from "../../assets/logo-hfla.svg";
import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.scrollUp = this.scrollUp.bind(this);
  }
  scrollUp(evt) {
    if (this.footerScroll) {
      this.footerScroll.scrollTop = 0;
    }
  }
  footerScroll = null;
  render() {
    return (
      <div className="FooterHolder">
      <div className="term"><a href="https://curbmap.com/terms">{"Terms & Conditions"}</a></div><br />
      <div className="term"><a href="https://curbmap.com/privacy">{"Privacy Policy"}</a></div>
      </div>
    );
  }
}

export default Footer;

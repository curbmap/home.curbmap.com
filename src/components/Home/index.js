import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import logo from "../../assets/logo.svg";
import ReactGA from "react-ga";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.scrollUp = this.scrollUp.bind(this);
  }
  scrollUp(evt) {
    if (this.homeScroll) {
      this.homeScroll.scrollTop = 0;
    }
  }
  homeScroll = null;
  componentDidMount() {
    ReactGA.initialize("UA-116738399-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    return (
      <div className="HomeHolder">
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          className="HomeImgAnimation"
        >
          <div className="HomeImgHolder">
            <img src={logo} alt="Curbmap pin" className="HomeImg" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceInRight"
          animateOut="bounceOutRight"
          className="HomeTextAnimation"
          afterAnimatedOut={this.scrollUp}
          duration={1}
        >
          <div className="Home">
            <div
              className="HomeScroll"
              ref={ref => {
                this.homeScroll = ref;
              }}
            >
              <h2>Welcome</h2>
              <p className="larger">
                We at curbmap are trying to change the way you look for parking.
                We're also making it fun for you to help others avoid the pain
                of parking.
              </p>
              <p>
                We conducted a new survey to find out about the troubles that
                parking creates and here is the{" "}
                <a href="http://rpubs.com/ejselkin/curbmap_survey_vA">
                  {" "}
                  detailed analysis
                </a>
                <br />
                Here is the <a href="">summary with interactive graphs</a>.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Home;

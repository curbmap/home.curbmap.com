import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import hackforla from "../../assets/logo-hfla.svg";
import "./About.scss";

class About extends Component {
  constructor(props) {
    super(props);
    this.scrollUp = this.scrollUp.bind(this);
  }
  scrollUp(evt) {
    if (this.aboutScroll) {
      this.aboutScroll.scrollTop = 0;
    }
  }
  aboutScroll = null;
  render() {
    return (
      <div className="AboutHolder">
        <ScrollAnimation
          animateIn="bounceInLeft"
          animateOut="bounceOutLeft"
          className="AboutTextAnimation"
          afterAnimatedOut={this.scrollUp}
          duration={1}
        >
          <div className="About">
            <div
              className="AboutScroll"
              ref={ref => {
                this.aboutScroll = ref;
              }}
            >
              <h2>About</h2>
              <p className="larger">
                We are a group formed under the Hack for LA bridage of Code for
                America. Our mission is to reduce the psychological and
                financial burden of citizens (predominantly felt by people with
                low-incomes) when they are faced with tough parking decisions.
              </p>
              <p>
                We meet Tuesdays from 6:00-9:00pm at Hack for LA's downtown
                meetup. We'd love your input and support in whatever way you
                can. We're currently looking for:
              </p>
              <ul>
                <li> Graphic Designers </li>
                <li> UI Designers </li>
                <li> Machine Learning enthusiasts </li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          className="AboutImgAnimaion"
        >
          <div className="AboutImgHolder">
            <img src={hackforla} alt="Curbmap pin" className="AboutImg" />
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;

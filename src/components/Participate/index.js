import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import sticky from "./sticky.svg";
import "./Participate.scss";

class Participate extends Component {
  constructor(props) {
    super(props);
    this.scrollUp = this.scrollUp.bind(this);
  }
  scrollUp(evt) {
    if (this.participateScroll) {
      this.participateScroll.scrollTop = 0;
    }
  }
  participateScroll = null;
  render() {
    return (
      <div className="ParticipateHolder">
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          animateOnce={true}
          className="ParticipateImgAnimation"
        >
          <div className="ParticipateImgHolder">
            <img src={sticky} alt="Sticky note" className="ParticipateImg" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="pulse"
          animateOut="bounceOutRight"
          className="ParticipateTextAnimation"
          afterAnimatedOut={this.scrollUp}
          animateOnce={true}
          duration={0.5}
        >
          <div className="Participate">
            <div
              className="ParticipateScroll"
              ref={ref => {
                this.participateScroll = ref;
              }}
            >
              <div className="ParticipateName">How can I particiapte?</div>
              <ul>
              <li>You can download our <a href="https://curbmap.com/app">app</a>. </li>
              <li>You can get points for uploading photos, verifying content, adding restriction information. With each point you get closer to </li>
              <li>You can jump on our <a href="https://curbmpap.com/participate">participation hub</a> and label some images</li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Participate;

import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Who.scss";
import list from "./list";
import broken from "../../assets/broken.svg";

class Who extends Component {
  constructor(props) {
    super(props);
    this.scrollUp = this.scrollUp.bind(this);
  }
  scrollUp(evt) {
    if (this.homeScroll) {
      this.whoScroll.scrollTop = 0;
    }
  }
  processPeople() {
    return Object.keys(list).map(area => {
      return (
        <div className="job-section" key={area}>
          <div className="job-area"> {area} </div>
          <ul className="people">
            {list[area].map(person => {
              return (
                <li key={person} className="person">
                  <div className="name">
                    <a href={person.contact}>{person.name}</a>
                  </div>
                  <div className="title">{person.title}</div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  }
  whoScroll = null;
  render() {
    return (
      <div className="WhoHolder">
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          className="WhoImgAnimation"
        >
          <div className="WhoImgHolder">
            <img src={broken} alt="Cour group" className="WhoImg" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceInRight"
          animateOut="bounceOutRight"
          className="WhoTextAnimation"
          afterAnimatedOut={this.scrollUp}
          duration={1}
        >
          <div className="Who">
            <div
              className="WhoScroll"
              ref={ref => {
                this.whoScroll = ref;
              }}
            >
              <h2>Who we are</h2>
              {this.processPeople()}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Who;

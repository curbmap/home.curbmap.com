import React, { Component } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy
} from "react-scroll";
import { elastic as Menu } from "react-burger-menu";
import "./App.scss";
import Home from "./components/Home";
import About from "./components/About";
import Who from "./components/Who";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import MainMenu from "./components/Menu";
import Participate from "./components/Participate";
class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.register = this.register.bind(this);
    this.state = {
      menu: 80,
      width: window.innerWidth,
      height: window.innerHeight,
      menuOpen: false
    };
    this.resizeWindow = this.resizeWindow.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  hideMenu(evt) {
    this.setState({ menuOpen: false });
  }
  componentDidMount() {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
    window.addEventListener("resize", this.resizeWindow);
    this.resizeWindow();
  }
  resizeWindow(evt) {
    if (typeof this.setState === "function") {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  scrollTo(to) {
    scroll.scrollTo(to);
  }

  scrollMore() {
    scroll.scrollMore(100);
  }

  handleSetActive(to) {
    console.log(to);
  }
  register(component, height) {
    this.setState({ menu: height });
  }
  appScroll = null;
  render() {
    return (
      <div>
        <div
          id="outer-container"
          className="App"
          ref={ref => {
            this.appScroll = ref;
          }}
        >
          <MainMenu scrollTo={this.scrollTo} register={this.register} />

          {this.state.width < 640 && (
            <Menu
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
              isOpen={this.state.menuOpen}
            >
              <Link
                to="Home"
                spy={true}
                smooth={true}
                duration={750}
                delay={200}
                onClick={this.hideMenu}
                className="scroll-link"
                activeClass="scroll-link-active"
                onSetActive={this.setActctive}
              >
                Home
              </Link>
              <Link
                to="About"
                spy={true}
                smooth={true}
                duration={750}
                delay={200}
                onClick={this.hideMenu}
                className="scroll-link"
                activeClass="scroll-link-active"
                onSetActive={this.setActctive}
              >
                About
              </Link>
              <Link
                to="Who"
                spy={true}
                smooth={true}
                duration={750}
                delay={200}
                onClick={this.hideMenu}
                className="scroll-link"
                activeClass="scroll-link-active"
                onSetActive={this.setActctive}
              >
                Who
              </Link>
              <Link
                to="Participate"
                spy={true}
                smooth={true}
                duration={750}
                delay={200}
                onClick={this.hideMenu}
                className="scroll-link"
                activeClass="scroll-link-active"
                onSetActive={this.setActctive}
              >
                Participate
              </Link>
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                duration={750}
                delay={200}
                onClick={this.hideMenu}
                className="scroll-link"
                activeClass="scroll-link-active"
                onSetActive={this.setActctive}
              >
                Contact
              </Link>
            </Menu>
          )}
          <main id="page-wrap">
            <Element name="Home">
              <Home />
            </Element>
            <Element name="About">
              <About />
            </Element>
            <Element name="Who">
              <Who />
            </Element>
            <Element name="Participate">
              <Participate />
            </Element>
            <Element name="Contact">
              <Contact />
            </Element>
            <Element name="Footer">
              <Footer />
            </Element>
          </main>
        </div>
      </div>
    );
  }
}

export default App;

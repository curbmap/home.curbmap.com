import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { withFormik } from "formik";
import "./Contact.scss";

const ContactForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <form onSubmit={handleSubmit}>
    E-mail:<br />
    <input
      type="text"
      name="email"
      placeholder="email"
      autoCapitalize="none"
      autoCorrect={values.email.toString() ? values.email : undefined}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
    />
    {touched.email &&
      errors.email && <div className="error-label">{errors.email}</div>}
    {(!touched.email || !errors.email) && <br />}
    Name:<br />
    <input
      type="text"
      name="name"
      placeholder="name"
      autoComplete="off"
      autoCapitalize="word"
      autoCorrect={values.name.toString() ? values.name : undefined}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
    />
    {touched.name &&
      errors.name && <div className="error-label">{errors.name}</div>}
    {(!touched.name || !errors.name) && <br />}
    We value your opinion: <br />
    <textarea
      name="textarea"
      placeholder="Let us know what you're thinking"
      autoComplete="on"
      autoCapitalize="off"
      autoCorrect={values.textarea.toString() ? values.textarea : undefined}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.textarea}
    />
    {touched.textarea &&
      errors.textarea && <div className="error-label">{errors.textarea}</div>}
    {(!touched.textarea || !errors.textarea) && <br />}
    <button type="submit" disabled={isSubmitting}>
      Send
    </button>
  </form>
);
const FormikContactForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ email: "", name: "", textarea: "" }),
  validate: (values, props) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.name) {
      errors.name =
        "Required, because we really want to know what to call you.";
    }
    if (!values.textarea) {
      errors.textarea = "We hope you have something you'd like us to know.";
    }
    return errors;
  },
  handleSubmit: (values, props) => {
    props.props.handleSubmit(values);
  }
})(ContactForm);

class Contact extends Component {
  constructor(props) {
    super(props);
    this.formHandler = this.formHandler.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
    this.state = {
      email: "",
      name: "",
      textarea: ""
    };
  }
  formHandler(evt) {
    // superagent
    //   .post(HOST_AUTH + "/login")
    //   .send({ username: evt.email, password: evt.password })
    //   .set("Content-Type", "application/x-www-form-urlencoded")
    //   .end((err, res) => {
    //     if (err) {
    //       alert("Error in sending password. Try again in a minute.");
    //       return;
    //     }
    //     if (res.body.success === 1) {
    //       // emit the action
    //       this.props.dispatch(loggedIn(res.body));
    //       this.props.history.push("/");
    //       return;
    //     }
    //     alert("There was an error signing in, check your password.");
    //   });
  }

  scrollUp(evt) {
    if (this.contactScroll) {
      this.contactScroll.scrollTop = 0;
    }
  }
  contactScroll = null;
  render() {
    return (
      <div className="ContactHolder">
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          className="ContactHeaderAnimation"
        >
          <div className="ContactHeaderHolder">
            <div className="ContactHeader">{"Hello! Let us hear from you"}</div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="swing"
          animateOut="bounceOutRight"
          className="ContactTextAnimation"
          afterAnimatedOut={this.scrollUp}
          duration={0.5}
        >
          <div className="Contact">
            <div
              className="ContactScroll"
              ref={ref => {
                this.contactScroll = ref;
              }}
            >
              <div className="ContactName">Contact form</div>
              <FormikContactForm handleSubmit={this.formHandler} />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Contact;

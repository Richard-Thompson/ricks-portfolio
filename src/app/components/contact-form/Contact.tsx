import * as React from "react";
import "./contact.css";
var emailjs = require("emailjs-com");

export interface ContactProps {
  /* empty */
}

export interface ContactState {
  name?: string;
  email?: string;
  message?: string;
}

export default class Contact extends React.Component<
  ContactProps,
  ContactState
> {
  constructor(props: ContactProps) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    const { name, email, message } = this.state;
    const { validNameOrMessage, validEmail } = this;
    return (
      <div className="contact-wrapper">
        <div className="container inner-wrapper">
          <form className="contact-form" onSubmit={this.onSubmit}>
            <div className="input-wrapper">
              <input
                name="name"
                placeholder="Name.."
                className={`name ${validNameOrMessage(name) ? "valid" : ""}`}
                value={name}
                onChange={this.onChange}
              />
              <i className="far fa-check-circle" />
            </div>
            <div className="input-wrapper">
              <input
                name="email"
                placeholder="Email.."
                className={`email ${validEmail(email) ? "valid" : ""}`}
                value={email}
                onChange={this.onChange}
              />
              <i className="far fa-check-circle" />
            </div>
            <div className="input-wrapper">
              <textarea
                name="message"
                placeholder="Message.."
                className={`message ${
                  validNameOrMessage(message) ? "valid" : ""
                }`}
                value={message}
                onChange={this.onChange}
              />
              <i className="far fa-check-circle" />
            </div>
            <input
              placeholder="Send Message"
              type="submit"
              className="btn btn-default"
            />
          </form>
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!
                        1m12!1m3!1d2378.374323932106!2d-2.229827984040879
                        7!3d53.40813137999198!2m3!1f0!2f0!3f0!3m2!1i1024!2
                        i768!4f13.1!3m3!1m2!1s0x487bb2f6af055a37%3A0x71c5e
                        e23c4b5d2db!2sTowers+Business+Park!5e0!3m2!1sen!2s
                        se!4v1551520042855`}
            width="600"
            height="450"
          />
        </div>
      </div>
    );
  }

  private onChange(
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value
    });
  }

  private onSubmit(event: React.FormEvent): void {
    event.preventDefault();

    var templateParams = {
      name: "John",
      reply_email: "john@doe.com",
      message: "This is awesome!"
    };

    emailjs.send(
      "outlook",
      "template_VrZWSy7J",
      templateParams,
      process.env.EMAILJS_USER_ID
    );
  }

  private validNameOrMessage(str: string | undefined): boolean {
    if (str && str.length > 3) {
      return true;
    }
    return false;
  }

  private validEmail(email: string | undefined): boolean {
    if (!email) {
      return false;
    }
    // tslint:disable-next-line:max-line-length
    return /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(
      email.toString()
    );
  }
}

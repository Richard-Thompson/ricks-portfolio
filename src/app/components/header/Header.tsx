import * as React from 'react';
import './header.css';

export interface HeaderProps {
  /* empty */
}

export interface HeaderState {
  /* empty */
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    return (
      <div className="homepage-wrapper">
        <div className="bg-image">
          <div className="bg-dots" />
          <div className="bg-image-black" />
          <section className="container">
            <h1>Richard Thompson</h1>
            <br />
            <div className="details">
              <h2>Frontend Developer.</h2>
              <br />
              <p>
                I am a enthusiastic and passionate frontend javascript developer
                who specializes in the React and Ember frameworks. I love
                playing around with new tech stacks :).
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

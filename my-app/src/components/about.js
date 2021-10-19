import React, { Component } from 'react';
export default class About extends Component {
  render() {

    return (
        <div className="container-fluid p-0">
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    Matt
                    <span className="text-primary">Hendrian</span>
                </h1>
                <div className="subheading mb-5">
                    <a href="mailto:name@email.com">matthendrian@gmail.com</a>
                </div>
                <p className="lead mb-5">I am a future full stack developer! Feel free to check out my projects below.</p>
                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/matt-hendrian-8a7953159"><i className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon" href="https://github.com/matthendrian"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>
    </div>
    );
  }
}
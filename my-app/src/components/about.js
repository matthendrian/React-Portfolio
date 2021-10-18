import React, { Component } from 'react';
export default class About extends Component {
  render() {

    return (
        <div class="container-fluid p-0">
        <section class="resume-section" id="about">
            <div class="resume-section-content">
                <h1 class="mb-0">
                    Matt
                    <span class="text-primary">Hendrian</span>
                </h1>
                <div class="subheading mb-5">
                    <a href="mailto:name@email.com">matthendrian@gmail.com</a>
                </div>
                <p class="lead mb-5">I am a future full stack developer! Feel free to check out my projects below.</p>
                <div class="social-icons">
                    <a class="social-icon" href="https://www.linkedin.com/in/matt-hendrian-8a7953159"><i class="fab fa-linkedin-in"></i></a>
                    <a class="social-icon" href="https://github.com/matthendrian"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </section>
    </div>
    );
  }
}
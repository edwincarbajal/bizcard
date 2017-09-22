import React from 'react';

const About = () => {
  return(
    <div className="row">
      <div className="col-md-3"></div>
      <div className="about-col col-md-6 offset-md-3 text-center">
        <p><strong>bizcard = business card</strong></p>
        <p className="lead">
          We spend an awful lot of time on the internet and most of the time it's searching for information. The goal of bizcard was to create an interface that allows users to query a company's contact info without distractions 🚀. What was that take-out's place phone number again?
        </p>
        <p className="lead">
          Bizcard is no longer in development <strong>(RIP)</strong> but one of our stretch goals was to allow users to download X company as a contact on your device and eliminate the repeated Google searches 🙌🏽. Your favorite taqueria on speed-dial ❤️
        </p>
      </div>
      <div className="col-md-3"></div>
    </div>
  )
}

export default About;

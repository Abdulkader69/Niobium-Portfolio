import React, { Component } from 'react';

class WDID extends Component {
    render() {
      return(
        <div id="ak-contact-me-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ak-contact-me-headline ak-headline-wrap">
                  <h2 className="primary-headline">Get In <span>Touch</span></h2>
                  <div className="ak-divider-inn"></div>
                </div>
                <div className="ak-contact-me-wrapper">
                  <form action="">
                    <div className="contact-form-wrap">
                        <div className="contact-form-items">
                            <input type="text" name="first-name" id="f-name" placeholder="First Name"/>
                        </div>
                        <div className="contact-form-items">
                            <input type="text" name="last-name" id="l-name" placeholder="Last Name"/>
                        </div>
                        <div className="contact-form-items">
                            <input type="email" name="your-email" id="email-address" placeholder="Email Address"/>
                        </div>
                        <div className="contact-form-items">
                            <input type="number" name="number" id="phone-number" placeholder="Phone Number"/>
                        </div>
                        <div className="contact-form-items message-area">
                            <textarea name="message" id="your-message" placeholder="Your Message"></textarea>
                        </div>
                        <div className="contact-form-btn">
                            <button type="submit" id="submit-btn">Send Message</button>
                        </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  export default WDID;
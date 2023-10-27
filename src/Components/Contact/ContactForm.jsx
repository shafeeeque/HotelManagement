import React from "react";
import "./Contact.css";

const ContactForm = () => {
  return (
    <>
      <section className="contact mtop">
        <div className="container flex">
          <div className="main-content">
            <h1>Contact Form</h1>
            <p>Fill The Form Below, We Will Ge Back You Soon</p>
            <form>
              <div className="grid1">
                <div className="input">
                  <span>
                     Name<label>*</label>
                  </span>
                  <input type="text" />
                </div>

                <div className="input">
                  <span>
                    Phone Number<label>*</label>
                  </span>
                  <input type="number" />
                </div>

                <div className="input">
                  <span>
                    Email<label>*</label>
                  </span>
                  <input type="email" />
                </div>

                <div className="input">
                  <span>
                    Subject<label>*</label>
                  </span>
                  <input type="text" />
                </div>
              </div>

              <div className="input ">
                <span>
                  Write Your Message<label></label>
                </span>
                <textarea type="text" cols="30" rows="10" />
              </div>

              <button className="primary-btn">Submit</button>
            </form>
          </div>
          <div className="side-content">
            <h3>Visit Our Location</h3>
            <p>Jaddaf Waterfront - Al Jaddaf - Jaddaf Waterfront - Dubai - United Arab Emirates</p>
            <br />
            <h3>Message Us</h3>
            <span>info@email.com</span>
            <br />
            <span>+984522977</span>
            <br />

            <div className="icon">
                <h3>Follow Us</h3>
                <div className="flex_space">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest"></i>
                    <i className="fab fa-youtube"></i>

                </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

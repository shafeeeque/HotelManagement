import React from "react";
import "./Contact.css";

const ContactForm = () => {
  return (
    <>
      <section className="contact mtop">
        <div className="container flex">
          <div className="main-content">
            <h2>Contact Form</h2>
            <p>Fill The Form Below, We Will Ge Back You Soon</p>
            <form>
              <div className="grid1">
                <div className="input">
                  <span>
                    First Name<label>*</label>
                  </span>
                  <input type="text" name="fname" id="" />
                </div>
              </div>
              <button className="primary-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default ContactForm;

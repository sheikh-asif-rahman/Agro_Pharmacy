import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/Contact_image/msg-icon.png";
import mail_icon from "../../assets/Contact_image/mail-icon.png";
import phone_icon from "../../assets/Contact_image/phone-icon.png";
import location_icon from "../../assets/Contact_image/location-icon.png";
import white_arrow from "../../assets/Contact_image/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ae21cf89-fc6a-45df-86f2-b23e2b5fbaa7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact_us" className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find contact
          information below.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            testmailaddress@mail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +88 01231231231, +88 012345678910
          </li>
          <li>
            <img src={location_icon} alt="" />
            House- 01, Road-02, Dhanmondi, Dhaka 1205, Bangladesh.
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Mobile Number"
            required
          />
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <label>Write Your Message Here</label>
          <textarea
            name="message"
            rows="2"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;

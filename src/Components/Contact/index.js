import { useState } from "react";
import DatePicker from "react-widgets/DatePicker";
import DropdownList from "react-widgets/DropdownList";

import Data from "../../Data";
import "./styles.css";

function Contact() {
  const timelist = Data.Contact.Timelist;
  const currDate = new Date();
  const [personDateSelected, changePersonDateSelected] = useState(
    `${currDate.getDate()} / ${
      currDate.getMonth() + 1
    } / ${currDate.getFullYear()}`
  );
  const [personTimeSelected, changePersonTimeSelected] = useState("12:00 AM");
  const [personName, changePersonName] = useState("");
  const [personEmail, changePersonEmail] = useState("");

  function handleTimeSelect(time) {
    changePersonTimeSelected(time);
  }

  function handleDateSelect(date) {
    changePersonDateSelected(
      `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`
    );
  }
  function handleEmailChange(email) {
    changePersonEmail(email.target.value);
  }
  function handleNameChange(name) {
    changePersonName(name.target.value);
  }
  return (
    <section className="Contact-container" id="Contact-container">
      <div className="row-custom">
        <div className="col-text">
          <div className="subTitle text-red">Let's Talk</div>
          <div className="title-primary">
            <h2>Contact</h2>
          </div>
          {/* <div className="desc">
            <p>
              You need to hodl at least 1 $BLZ to schedule a call with me.{" "}
              <a className="text-red">Buy $BLZ here.</a>
            </p>
          </div> */}
        </div>
      </div>
      <div className="row-custom contact-form">
        <div className="contact-form-input">
          <label className="text-red">Enter Name *</label>
          <input
            type="text"
            name="name"
            onChange={handleNameChange}
            className="input-name"
          />
        </div>
        <div className="contact-form-input">
          <label className="text-red">Enter Email *</label>
          <input
            type="email"
            name="email"
            onChange={handleEmailChange}
            className="input-email"
          />
        </div>
        <div className="contact-form-input">
          <label className="text-red">Select Preferred Date *</label>
          <DatePicker
            defaultValue={currDate}
            min={currDate}
            valueEditFormat={{ dateStyle: "short" }}
            valueDisplayFormat={{ dateStyle: "medium" }}
            className="w-3/5 input-date"
            onSelect={handleDateSelect}
          />
        </div>
        <div className="contact-form-input">
          <label className="text-red">Select Preferred Time *</label>
          <DropdownList
            data={timelist}
            defaultValue={timelist[0]}
            className="w-2/5 mt-0 input-time"
            onSelect={handleTimeSelect}
          />
        </div>
        <div className="contact-form-submit">
          <a
            href={`mailto:anuraghakeem97@gmail.com?
          subject=Block%20Call
          &body=Lets block a call on ${personDateSelected} at ${personTimeSelected}.%0D%0A%0D%0A You can also contact me at : ${personEmail}%0D%0A%0D%0A Thanks,%0D%0A${personName}`}
            className="contact-form-submit-text text-red"
          >
            Submit
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

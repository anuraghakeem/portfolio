import { useState } from "react";
import DatePicker from "react-widgets/DatePicker";
import DropdownList from "react-widgets/DropdownList";

import "./styles.css";

function Contact() {
  const getTimeList = () => {
    return [
      "12:00 AM",
      "12:30 AM",
      "1:00 AM",
      "1:30 AM",
      "2:00 AM",
      "2:30 AM",
      "3:00 AM",
      "3:30 AM",
      "4:00 AM",
      "4:30 AM",
      "5:00 AM",
      "5:30 AM",
      "6:00 AM",
      "6:30 AM",
      "7:00 AM",
      "7:30 AM",
      "8:00 AM",
      "8:30 AM",
      "9:00 AM",
      "9:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "1:00 PM",
      "1:30 PM",
      "2:00 PM",
      "2:30 PM",
      "3:00 PM",
      "3:30 PM",
      "4:00 PM",
      "4:30 PM",
      "5:00 PM",
      "5:30 PM",
      "6:00 PM",
      "6:30 PM",
      "7:00 PM",
      "7:30 PM",
      "8:00 PM",
      "8:30 PM",
      "9:00 PM",
      "9:30 PM",
      "10:00 PM",
      "10:30 PM",
      "11:00 PM",
      "11:30 PM",
    ];
  };
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
    // console.log(time)
    changePersonTimeSelected(time);
  }

  function handleDateSelect(date) {
    // console.log(`${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`)
    changePersonDateSelected(
      `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`
    );
  }
  function handleEmailChange(email) {
    // console.log('email:',email.target.value)
    changePersonEmail(email.target.value);
  }
  function handleNameChange(name) {
    // console.log('name:',name.target.value)
    changePersonName(name.target.value);
  }
  return (
    <section className="Contact-container">
      <div className="row-custom">
        <div className="col-text">
          <div className="subTitle text-red">Let's Talk</div>
          <div className="title-primary">
            <h2>Contact</h2>
          </div>
          <div className="desc">
            <p>
              You need to hodl at least 1 $BLZ to schedule a call with me.{" "}
              <a className="text-red">Buy $BLZ here.</a>
            </p>
          </div>
        </div>
      </div>
      <div className="row-custom contact-form">
        <label>
          Enter Name *
          <input type="text" name="name" onChange={handleNameChange} />
        </label>
        <label>
          Enter Email *
          <input type="text" name="email" onChange={handleEmailChange} />
        </label>
        <label>
          Select Preferred Date *
          <DatePicker
            defaultValue={currDate}
            min={currDate}
            valueEditFormat={{ dateStyle: "short" }}
            valueDisplayFormat={{ dateStyle: "medium" }}
            className="w-3/5"
            onSelect={handleDateSelect}
          />
        </label>
        <label>
          Select Preferred Time *
          <DropdownList
            data={getTimeList()}
            defaultValue={getTimeList()[0]}
            // textField="label"
            className="w-2/5 mt-0"
            onSelect={handleTimeSelect}
          />
        </label>
        <a
          href={`mailto:anuraghakeem97@gmail.com?
          subject=Block%20Call
          &body=Lets block a call on ${personDateSelected} at ${personTimeSelected}.%0D%0A%0D%0A You can also contact me at : ${personEmail}%0D%0A%0D%0A Thanks,%0D%0A${personName}`}
        >
          Submit
        </a>
      </div>
    </section>
  );
}

export default Contact;

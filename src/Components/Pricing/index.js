import { useState } from "react"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"

import Images from '../../Images'

import "./styles.css"

function Pricing() {
  const [key, setKey] = useState("buyBlaze")
  const {BlzBuy, EthBuy, Hours, BlzButtonIcon} = Images
  return (
    <section className="Pricing-container">
      <div className="row-custom">
        <div className="col-text">
          <div className="subTitle text-red">Let's Grow Together</div>
          <div className="title-primary">
            <h2>Pricing</h2>
          </div>
          <div className="desc">
            <p>
              I do not have fixed charges for projects. Every project comes with
              a different set of needs and goals. To provide you with the most
              optimal solutions, I keep the working hours flexible. If you are
              uncertain on the number of hours you will need, you can{" "}
              <a className="text-red">contact me to schedule a call.</a>
            </p>
            <p>You need to hodl at least 1 $BLZ to schedule a call with me.</p>
            <p>
              <span className="text-red">
                <strong>1 $BLZ</strong>
              </span>{" "}
              = 1 Hour of Work
            </p>
          </div>
        </div>
      </div>
      <div className="row-custom custom-tabs">
        <Tabs id="resume-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="buyBlaze" title="Buy $BLAZE">
            <div className="row-custom pricing-form buy-blz-form">
              <div className="pricing-form-input buy-blz-form-input">
                <input
                  type="text"
                  name="blazetokenstobuy"
                  //   onChange={handleNameChange}
                  className="input-blazetokenstobuy"
                />
                <img className='pricing-form-input-icon buy-blz-form-input-icon'
                src={BlzBuy}></img>
              </div>
              <div className="pricing-form-input buy-blz-form-input">
                <input
                  type="text"
                  name="ethtokenstobuy"
                  //   onChange={handleNameChange}
                  className="input-ethtokenstobuy"
                />
                <img className='pricing-form-input-icon buy-blz-form-input-icon'
                src={EthBuy}></img>
              </div>
              <div className="desc">
                <p>1 Blaze = 0.03 ETH ( $ 113.25)</p>
              </div>
              <div className="pricing-form-submit">
                {/* <a
                  href={`mailto:anuraghakeem97@gmail.com?
          subject=Block%20Call
          &body=Lets block a call on ${personDateSelected} at ${personTimeSelected}.%0D%0A%0D%0A You can also contact me at : ${personEmail}%0D%0A%0D%0A Thanks,%0D%0A${personName}`}
                  className="contact-form-submit-text text-red"
                >
                  Submit
                </a> */}
                <button className="text-red">
                    Buy
                </button>
              </div>
            </div>
          </Tab>
          <Tab eventKey="bookHours" title="Book Hours">
          <div className="row-custom pricing-form book-hrs-form">
              <div className="pricing-form-input book-hrs-form-input">
                <input
                  type="text"
                  name="hourstobook"
                  //   onChange={handleNameChange}
                  className="input-hourstobook"
                />
                <img className='pricing-form-input-icon book-hrs-form-input-icon'
                src={Hours}></img>
              </div>
              <div className="pricing-form-submit">
                {/* <a
                  href={`mailto:anuraghakeem97@gmail.com?
          subject=Block%20Call
          &body=Lets block a call on ${personDateSelected} at ${personTimeSelected}.%0D%0A%0D%0A You can also contact me at : ${personEmail}%0D%0A%0D%0A Thanks,%0D%0A${personName}`}
                  className="contact-form-submit-text text-red"
                >
                  Submit
                </a> */}
                <button className="text-red">
                    <img src={BlzButtonIcon}></img>Blz it
                </button>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}

export default Pricing

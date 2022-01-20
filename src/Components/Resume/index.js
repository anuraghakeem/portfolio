import { useState } from "react"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"

import ProfessionalSkills from "../ProfessionalSkills"
import Accomplishments from "../Accomplishments"
import Education from "../Education"

import "./styles.css"

function Resume() {
  const [key, setKey] = useState("prefessionalSkills");
  return (
    <>
      <section className="Resume-container">
        <div className="row-custom">
          <div className="col-text">
            <div className="subTitle text-red">Know More</div>
            <div className="title-primary">
              <h2>Resume</h2>
            </div>
          </div>
        </div>
        <div className="row-custom custom-tabs">
          <Tabs
            id="resume-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            // className="mb-3"
          >
            <Tab eventKey="prefessionalSkills" title="Professional Skills">
              <ProfessionalSkills />
            </Tab>
            <Tab eventKey="experience" title="Experience">
              <div>Experience</div>
            </Tab>
            <Tab eventKey="accomplishments" title="Accomplishments">
              <Accomplishments />
            </Tab>
            <Tab eventKey="education" title="Education">
              <Education />
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
}

export default Resume;

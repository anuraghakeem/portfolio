import { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import ProfessionalSkills from '../ProfessionalSkills'

import './styles.css'

function Resume() {
    const [key, setKey] = useState('home');
    return (
        <>
            <section className='Resume-container'>
                <div className="row-custom">
                    <div className="col-text">
                        <div className="subTitle text-red">
                            Know More
                        </div>
                        <div className="title-primary">
                            <h2>Resume</h2>
                        </div>
                    </div>
                </div>
                <div className="row-custom custom-tabs">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="prefessionalSkills" title="Professional Skills">
                            <ProfessionalSkills />
                        </Tab>
                        <Tab eventKey="experience" title="Experience">
                            <div>Experience</div>
                        </Tab>
                        <Tab eventKey="certification" title="Certifications">
                            <div>Certifications</div>
                        </Tab>
                        <Tab eventKey="education" title="Education">
                            <div>Education</div>
                        </Tab>
                    </Tabs>
                </div>
            </section>
        </>
    )
}

export default Resume
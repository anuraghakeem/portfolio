import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Data from "../../Data";

import "./styles.css";

import Images from "../../Images";

const EducationData = Data.Education;

function Education() {
  // const {EducationDefaultPreviewImage} = Images

  const EducationTimelineElement = EducationData.map((education, key) => {
    return (
      <VerticalTimelineElement className="custom-vertical-timeline-element">
        <div className="custom-content-top">
          <div className="custom-col-image">
            <img src={education.Image}></img>
          </div>
          <div className="custom-col-text">
            <div className="custom-col-text-heading">{education.Title}</div>
            <div className="custom-col-text-subheading text-red">
              {education.Subtitle}
            </div>
            <div className="custom-col-text-tertiarytext">
              <div className="custom-col-text-tertiarytext-year">
                {education.Year}
              </div>
              <div className="custom-col-text-tertiarytext-marks">
                {education.Marks}
              </div>
            </div>
          </div>
        </div>
      </VerticalTimelineElement>
    );
  });

  return (
    <div className="Education-container">
      <VerticalTimeline layout="1-column-left" lineColor="#1C1B1B">
        {EducationTimelineElement}
      </VerticalTimeline>
    </div>
  );
}

export default Education;

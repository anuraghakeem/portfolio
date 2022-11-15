import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Data from "../../Data";

import "./styles.css";

function Experience() {
  const ExperienceData = Data.Experience;
  const ExperienceTimelineElement = ExperienceData.map((experience, key) => {
    return (
      <VerticalTimelineElement className="custom-vertical-timeline-element">
        <div className="custom-content-top">
          {/* <div className="custom-col-image">
            <img src={experience.Image}></img>
          </div> */}
          <div className="custom-col-text">
            <div className="custom-col-text-heading">{experience.Title}</div>
            <div className="custom-col-text-subheading text-red">
              {experience.Subtitle}
            </div>
            <div className="custom-col-text-tertiarytext">
              <div className="custom-col-text-tertiarytext-year">
                {experience.Year}
              </div>
            </div>
          </div>
        </div>
        <div className="custom-content-bottom">
          <ul className="custom-content-bottom-list">
            {experience.Content.map((item, key) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </VerticalTimelineElement>
    );
  });

  return (
    <div className="Experience-container">
      <VerticalTimeline layout="1-column-left" lineColor="#1C1B1B">
        {ExperienceTimelineElement}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;

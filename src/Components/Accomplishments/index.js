import parse from "html-react-parser";

import Data from "../../Data";

import "./styles.css";

const AccomplishmentsData = Data.Accomplishments;

function Accomplishments() {
  const HonorsCards = AccomplishmentsData.Honors.map((honor, key) => {
    return (
      <div
        className={"custom-card " + (honor.Url != null ? "hoverable " : "")}
        {...(honor.Url != null && {
          onClick: () => {
            window.open(honor.Url, "_blank");
          },
        })}
      >
        <div className="custom-card-heading">
          <h3>{honor.Title}</h3>
        </div>
        <div className="desc">
          <p>{parse(honor.Desc)}</p>
        </div>
      </div>
    );
  });
  const PublishedPapersCards = AccomplishmentsData.PublishedPapers.map(
    (publishedPaper, key) => {
      return (
        <div
          className={
            "custom-card " + (publishedPaper.Url != null ? "hoverable " : "")
          }
          {...(publishedPaper.Url != null && {
            onClick: () => {
              window.open(publishedPaper.Url, "_blank");
            },
          })}
        >
          <div className="custom-card-heading">
            <h3>{publishedPaper.Title}</h3>
          </div>
          <div className="desc">
            <p>{parse(publishedPaper.Desc)}</p>
          </div>
        </div>
      );
    }
  );
  const Certifications = AccomplishmentsData.Certifications.map(
    (certification, key) => {
      return (
        <div
          className={
            "custom-card " + (certification.Url != null ? "hoverable " : "")
          }
          {...(certification.Url != null && {
            onClick: () => {
              window.open(certification.Url, "_blank");
            },
          })}
        >
          <div className="custom-card-heading">
            <h3>{certification.Title}</h3>
          </div>
          <div className="desc">
            <p>{parse(certification.Desc)}</p>
          </div>
        </div>
      );
    }
  );
  return (
    <>
      <div className="row-custom-accomplishments">
        <div className="col-text">
          <div className="heading text-red">Honors</div>
        </div>
        <div className="col-cards-honors">{HonorsCards}</div>
      </div>
      <div className="row-custom-accomplishments">
        <div className="col-text">
          <div className="heading text-red">Published Paper</div>
        </div>
        <div className="col-cards-published-papers">{PublishedPapersCards}</div>
      </div>
      <div className="row-custom-accomplishments">
        <div className="col-text">
          <div className="heading text-red">Certifications</div>
        </div>
        <div className="col-cards-certifications">{Certifications}</div>
      </div>
    </>
  );
}

export default Accomplishments;

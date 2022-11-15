import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Heart from "react-heart";

import Images from "../../Images";
import "./styles.css";

const { ProjectWebDevelopment } = Images;

function ProjectModal(props) {
  const { show, setShow, selectedProject } = props;
  const [active, setActive] = useState(false);
  // const [likes,handleLikes] = useState(selectedProject.Likes)

  const handleLikeClick = () => {
    setActive(!active);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="Project-modal-container"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row-custom modal-row">
            <div className="col-image">
              <div className="modalImage">
                <img
                  src={
                    selectedProject
                      ? selectedProject.Image
                      : ProjectWebDevelopment
                  }
                ></img>
              </div>
            </div>
            <div className="col-text">
              <div className="subTitle text-red">
                {selectedProject
                  ? selectedProject.Subheading
                  : "Web Development"}
              </div>
              <div className="heading">
                <h3>
                  {selectedProject
                    ? selectedProject.Heading
                    : "Adtomica Website Development"}
                </h3>
              </div>
              <div className="desc">
                <p>
                  {selectedProject
                    ? selectedProject.Para1
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue consequat vehicula. Praesent odio quam, tempor eget enim blandit, auctor placerat turpis. Integer varius, justo a fringilla dictum, quam justo ultrices tortor, eget dictum."}
                </p>
                <p>
                  {selectedProject
                    ? selectedProject.Para2
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue consequat vehicula. Praesent odio quam, tempor eget enim blandit, auctor placerat turpis. Integer varius, justo a fringilla dictum, quam justo ultrices tortor, eget dictum."}
                </p>
              </div>
              <div className="row-custom cta-row">
                {selectedProject.Url && (
                  <div className="cta-buttons">
                    <a
                      className="cta-view-project text-red"
                      href={selectedProject.Url}
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                )}
                <div className="likes">
                  <span className="likes-icon">
                    <Heart
                      activeColor="#FF004F"
                      style={{
                        fill: active ? "transparent" : "#FF004F",
                        stroke: active ? "white" : "transparent",
                      }}
                      isActive={active}
                      onClick={handleLikeClick}
                      animationScale={1.25}
                    />
                  </span>
                  {/* <span className='likes-icon'><Heart activeColor = "#FF004F" style={{fill: active ? "transparent" : "#FF004F", stroke: active ? "white":"transparent"}} isActive={active} onClick={() => setActive(!active)} animationScale = {1.25} /></span> */}
                  {/* <strong>{selectedProject ? likes : '62'}</strong> */}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectModal;

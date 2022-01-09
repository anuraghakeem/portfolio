import Modal from 'react-bootstrap/Modal'

import Images from '../../Images'
import './styles.css'

const {ProjectWebDevelopment} = Images

function ProjectModal(props) {
  const { show, setShow } = props
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="Project-modal-container"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="row-custom modal-row">
            <div className="col-image">
              <div className='modalImage'>
                {/* <div className='bannerImageInner'> */}
                  <img src={ProjectWebDevelopment}></img>
                {/* </div> */}
              </div>
            </div>
            <div className="col-text">
              <div className="subTitle text-red">
                Web Development
              </div>
              <div className="heading">
                <h3>Adtomica Website Development</h3>
              </div>
              <div className="desc">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue consequat vehicula. Praesent odio quam, tempor eget enim blandit, auctor placerat turpis. Integer varius, justo a fringilla dictum, quam justo ultrices tortor, eget dictum.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue consequat vehicula. Praesent odio quam, tempor eget enim blandit, auctor placerat turpis. Integer varius, justo a fringilla dictum, quam justo ultrices tortor, eget dictum.
                </p>
              </div>
              {/* <div className="subTitle">
                Find out more
              </div> */}
              <div className="row-custom cta-buttons">
                        {/* <div className="col-33"> */}
                            <a className='cta-view-project text-red' href='https://adtomica.co/' target='_blank'>
                                {/* <img src={Linkedin}></img> */}
                                View Project
                            </a>
                        {/* </div> */}
                        {/* <div className="col-33">
                            <a className='social-button' href='https://github.com/anuraghakeem' target='_blank'>
                                <img src={Github}></img>
                            </a>
                        </div>
                        <div className="col-33">
                            <a className='social-button' href='https://www.behance.net/anuraghakeem' target='_blank'>
                                <img src={Behance}></img>
                            </a>
                        </div> */}
                    </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectModal
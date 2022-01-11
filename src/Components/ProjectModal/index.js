import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'

import Images from '../../Images'
import './styles.css'

const { ProjectWebDevelopment } = Images

function ProjectModal(props) {
  const { show, setShow, selectedProject } = props

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
        </Modal.Header>
        <Modal.Body>
          <div className="row-custom modal-row">
            <div className="col-image">
              <div className='modalImage'>
                <img src={selectedProject ? selectedProject.Image : ProjectWebDevelopment}></img>
              </div>
            </div>
            <div className="col-text">
              <div className="subTitle text-red">
                {selectedProject ? selectedProject.Subheading : 'Web Development'}
              </div>
              <div className="heading">
                <h3>
                  {selectedProject ? selectedProject.Heading : 'Adtomica Website Development'}
                </h3>
              </div>
              <div className="desc">
                <p>
                  {selectedProject ?
                    selectedProject.Para1
                    :
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue consequat vehicula. Praesent odio quam, tempor eget enim blandit, auctor placerat turpis. Integer varius, justo a fringilla dictum, quam justo ultrices tortor, eget dictum.'
                  }
                </p>
                <p>{selectedProject ?
                  selectedProject.Para2
                  :
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue consequat vehicula. Praesent odio quam, tempor eget enim blandit, auctor placerat turpis. Integer varius, justo a fringilla dictum, quam justo ultrices tortor, eget dictum.'
                }
                </p>
              </div>
              <div className="row-custom cta-row">
                <div className="cta-buttons">
                  <a className='cta-view-project text-red' href='https://adtomica.co/' target='_blank'>
                    View Project
                  </a>
                </div>
                <div className="likes">
                  <strong>{selectedProject ? selectedProject.Likes : '62'}</strong>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectModal
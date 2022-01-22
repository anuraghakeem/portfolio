import { useState } from 'react'


import ProjectModal from '../ProjectModal'

import Data from '../../Data'
import './styles.css'

const ProjectsData = Data.Projects


function Projects() {
    const [show, setShow] = useState(false);
    const [selectedProject, updateSelectedProject] = useState(0);


    const ProjectCards = ProjectsData.map((project, key) => {
        return (
            <div className='custom-card' onClick={() => {
                updateSelectedProject(project)
                setShow(true)
            }
            }
            >
                <div className='custom-card-image'>
                    <img src={project.Image}></img>
                </div>
                <div className="subTitle">
                    <span className='text-red subTitle-text'>
                        {project.Subheading}
                    </span>
                    {/* <span className='subTitle-likes'>
                        {project.Likes}
                    </span> */}
                </div>
                <div className='custom-card-heading'>
                    <h3>{project.Heading}</h3>
                </div>
            </div>
        )
    }
    )
    return (
        <>
            <section className='Projects-container'>
                <div className="row-custom">
                    <div className="col-text">
                        <div className="subTitle text-red">
                            In Action
                        </div>
                        <div className="title-primary">
                            <h2>Projects</h2>
                        </div>
                    </div>
                </div>
                <div className="row-custom custom-cards">
                    {ProjectCards}
                </div>
            </section>
            <ProjectModal
                show={show}
                setShow={setShow}
                selectedProject={selectedProject}
            />
        </>
    )
}

export default Projects
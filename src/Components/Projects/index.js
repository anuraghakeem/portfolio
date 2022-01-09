import { useState } from 'react'

import ProjectModal from '../ProjectModal'

import Data from '../../Data'
import './styles.css'

const ProjectsData = Data.Projects


function Projects() {
    const [show, setShow] = useState(false);

    const ProjectCards = ProjectsData.map((project, key) => {
        return (
            // <div className='card' onClick={() => console.log('clicked')}>
            <div className='card' onClick={() => setShow(true)}>
                <div className='card-image'>
                    <img src={project.Image}></img>
                </div>
                <div className="subTitle text-red">
                    {project.Subheading}
                </div>
                <div className='card-heading'>
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
                <div className="row-custom cards">
                    {ProjectCards}
                </div>
            </section>
            <ProjectModal 
                show={show} 
                setShow={setShow}
            />
        </>
    )
}

export default Projects
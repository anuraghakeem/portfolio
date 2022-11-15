import Data from '../../Data'
import './styles.css'

const ProfessionalSkillsData = Data.ProfessionalSkills

function ProfessionalSkills() {
    const TechnologyIcons = ProfessionalSkillsData.Technology.map((icon, key) => {
        return (
            <div className='custom-icon'>
                <div className='custom-icon-image'>
                    <img src={icon.Image}></img>
                </div>
                <div className='custom-icon-title'>
                    {icon.Title}
                </div>
            </div>
        )
    }
    )
    const CreativeIcons = ProfessionalSkillsData.Creative.map((icon, key) => {
        return (
            <div className='custom-icon'>
                <div className='custom-icon-image'>
                    <img src={icon.Image}></img>
                </div>
                <div className='custom-icon-title'>
                    {icon.Title}
                </div>
            </div>
        )
    }
    )
    const ProjectManagementIcons = ProfessionalSkillsData.ProjectManagement.map((icon, key) => {
        return (
            <div className='custom-icon'>
                <div className='custom-icon-image'>
                    <img src={icon.Image}></img>
                </div>
                <div className='custom-icon-title'>
                    {icon.Title}
                </div>
            </div>
        )
    }
    )
    return (
        <>
        <div className="row-custom custom-tab">
                <div className="col-text">
                    <div className="heading text-red">
                        Product Management
                    </div>
                </div>
                <div className="col-icons">
                    {ProjectManagementIcons}
                </div>
            </div>
            <div className="row-custom custom-tab">
                <div className="col-text">
                    <div className="heading text-red">
                        Technology
                    </div>
                </div>
                <div className="col-icons">
                    {TechnologyIcons}
                </div>
            </div>
            <div className="row-custom custom-tab">
                <div className="col-text">
                    <div className="heading text-red">
                        Creative
                    </div>
                </div>
                <div className="col-icons">
                    {CreativeIcons}
                </div>
            </div>
        </>
    )
}

export default ProfessionalSkills
import Data from '../../Data'
import './styles.css'

const SkillsData = Data.Skills

function Skills() {
    const SkillCards = SkillsData.map((skill, key) => {
        return (
            <div className='card'>
                <div className='card-image'>
                    <img src={skill.Image}></img>
                </div>
                <div className='card-heading'>
                    <h3>{skill.Heading}</h3>
                </div>
                <div className="desc">
                    <p>
                        {skill.Desc}
                    </p>
                </div>
            </div>
        )
    }
    )
    return (
        <section className='Skills-container'>
            <div className="row-custom">
                <div className="col-text">
                    <div className="subTitle text-red">
                        What I Do
                    </div>
                    <div className="title-primary">
                        <h2>Skills</h2>
                    </div>
                </div>
            </div>
            <div className="row-custom cards">
                {SkillCards}
            </div>
        </section>
    )
}

export default Skills
import Typewriter from 'typewriter-effect';

import Images from '../../Images'
import './styles.css'

const { BannerImage, Linkedin, Behance, Github } = Images

function Banner() {
    return (
        <section className="banner-container">
            <div className="row-custom">
                <div className="col-text">
                    <div className="subTitle">
                        Welcome to my world
                    </div>
                    <div className="title-primary">
                        <h2>Hi, I’m <span className='text-red'>Anurag Hakeem</span></h2>
                    </div>
                    <div className='dynamic-text'>
                        <Typewriter
                            options={{
                                strings: ['Creative Technologist', 'Web3 Developer', 'UI Developer', 'UI Designer', 'UX Strategist', 'Project Manager', 'Batman'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>

                    <div className="desc" id="desc-main">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut tincidunt tortor. Aenean pulvinar, massa non cursus luctus, erat erat accumsan ex, et tincidunt mi ante vel turpis. Nulla id tellus nulla.
                        </p>
                    </div>
                    <div className="subTitle">
                        Find out more
                    </div>
                    <div className="row-custom social-links">
                        <div className="col-33">
                            <a className='social-button' href='https://www.linkedin.com/in/anuraghakeem/' target='_blank'>
                                <img src={Linkedin}></img>
                            </a>
                        </div>
                        <div className="col-33">
                            <a className='social-button' href='https://github.com/anuraghakeem' target='_blank'>
                                <img src={Github}></img>
                            </a>
                        </div>
                        <div className="col-33">
                            <a className='social-button' href='https://www.behance.net/anuraghakeem' target='_blank'>
                                <img src={Behance}></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-image">
                    <div className='bannerImage'>
                        <div className='bannerImageInner'>
                            <img src={BannerImage}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
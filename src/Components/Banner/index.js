import Typewriter from "typewriter-effect";

import Images from "../../Images";
import "./styles.css";

const { AnuragBanner, Linkedin, Behance, Github } = Images;

function Banner() {
  return (
    <section className="banner-container">
      <div className="row-custom">
        <div className="col-text">
          <div className="subTitle">Welcome to my world of web3</div>
          <div className="title-primary">
            <h2>
              Hi, I’m <span className="text-red">Anurag Hakeem</span>
            </h2>
          </div>
          <div className="dynamic-text">
            <Typewriter
              options={{
                strings: [
                  "Creative Technologist",
                  "Web3 Developer",
                  "UI Developer",
                  "UI Designer",
                  "UX Strategist",
                  "Project Manager",
                  "Batman",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
                delay: 100,
              }}
            />
          </div>

          <div className="desc" id="desc-main">
            <p>
              I'm a multi-talented professional who has an eye on creating the
              next big thing in the world of Web3 as I chug down another mug of
              beer. Shh... Robin doesn't know my true identity yet.
            </p>
          </div>
          <div className="subTitle">Find out more</div>
          <div className="row-custom social-links">
            <div className="col-33">
              <a
                className="social-button"
                href="https://www.linkedin.com/in/anuraghakeem/"
                target="_blank"
              >
                <img src={Linkedin}></img>
              </a>
            </div>
            <div className="col-33">
              <a
                className="social-button"
                href="https://github.com/anuraghakeem"
                target="_blank"
              >
                <img src={Github}></img>
              </a>
            </div>
            {/* <div className="col-33">
              <a
                className="social-button"
                href="https://www.behance.net/anuraghakeem"
                target="_blank"
              >
                <img src={Behance}></img>
              </a>
            </div> */}
          </div>
        </div>
        <div className="col-image">
          <div className="bannerImage">
            <div className="bannerImageInner">
              <a
                href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/104206034018960734157227822297469707953732132324313266366585641668733600530433/"
                target="_blank"
              >
                <img src={AnuragBanner}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

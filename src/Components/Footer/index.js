import Images from "../../Images";

import "./styles.css";

function Footer() {
    const {FooterImage} = Images
  return (
    <section className="Footer-container">
      <div className="row-custom">
        <div className="col-text">
            <div className="footer-image">
                <img src={FooterImage}></img>
            </div>
          <div className="subTitle text-red">ANURAG</div>
          <div className="desc">
            <p>© All rights reserved 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

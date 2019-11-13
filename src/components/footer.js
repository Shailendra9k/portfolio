import React from "react";

import linkedinLogo from "../assets/images/footer/linkedin.jpg";
import githubLogo from "../assets/images/footer/github.png";

export default props => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3>Let's Connect!</h3>
            <hr className="sub" />
            <p className="text-faded contact dark">
              Priorities should be options instead of compulsion.
            </p>

            <div className="row footerRow">
              <div className="footer-links">
                <a
                  className=""
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Shailendra9k"
                >
                  <img id="github-logo" src={githubLogo} alt="Github" />
                  <br />
                  Github
                </a>
              </div>
              <div className="footer-links">
                <a
                  className=""
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1O_RfYKskmb5mm5iIv6pfUmaFx_weWkCh/view"
                >
                  <i className="medium material-icons">description</i>
                  <br />
                  Resume
                </a>
              </div>
              <div className="footer-links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/shailendra-kushwaha-1a6ba110a/"
                >
                  <img id="linkedin-logo" src={linkedinLogo} alt="LinkedIn" />
                  <br />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container"></div>
      </div>
    </section>
  );
};

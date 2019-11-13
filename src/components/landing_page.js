import React from "react";
import { Image } from "react-bootstrap";
import splash1 from "../assets/images/landing/splash1.jpg";

let background = { backgroundSize: "cover" };

let textStyle1 = {
  position: "absolute",
  top: "30%",
  left: "50%"
};

export default props => {
  return (
    <div className="landing-img" id="landing" style={{ width: "auto" }}>
      <Image style={background} responsive src={splash1}></Image>

      <h3>Full Stack Dev | Haaga-Helia Student | Entrepreneurial mindset</h3>
      <h5>
        {" "}
        HTML/CSS | Bootstrap | JavaScript | OOP | React | NodeJS | MongoDB |
        Database | Docker | Data security | Linux
      </h5>
      <hr />
      <h1 style={textStyle1}>
        <span style={{ fontSize: "50px", color: "grey" }}>
          Hello, I'm{" "}
          <strong>
            <em style={{ fontSize: "80px", color: "white" }}>Shailendra</em>
          </strong>
        </span>
      </h1>
    </div>
  );
};

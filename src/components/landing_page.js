import React from "react";
import { Image } from "react-bootstrap";
import splash from "../assets/images/landing/splash.png";

let background = { backgroundSize: "cover" };

let textStyle1 = {
  position: "absolute",
  top: "30%",
  left: "0%"
};

export default props => {
  return (
    <div className="landing-img" id="landing" style={{ width: "auto" }}>
      <Image style={background} responsive src={splash}></Image>

      <h3>Front-end Dev | Haaga-Helia Student | Entrepreneurial mindset</h3>
      <h5>
        {" "}
        HTML/CSS | Bootstrap | JavaScript | OOP | React | NodeJS | MongoDB |
        Database | Docker | Data security | Linux
      </h5>
      <hr />
      <h1 style={textStyle1}>
        <span style={{ fontSize: "50px", color: "#dfe6e9" }}>
          Hello, I'm{" "}
          <strong>
            <em style={{ fontSize: "70px", color: "#686de0" }}>Shailendra</em>
          </strong>
        </span>
      </h1>
    </div>
  );
};

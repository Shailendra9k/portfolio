import React from "react";

import about from "../assets/images/about/creative.png";
import hobby from "../assets/images/about/hobby.png";
import udemylogo from "../assets/images/about/Udemy_logo.png";
import haagalogo from "../assets/images/about/haagalogo.png";
import schoollogo from "../assets/images/about/school-logo.png";

export default props => {
  return (
    <section id="about">
      <div className="container">
        <h3 className="white-color">Who Am I?</h3>
        <hr className="white-color" />
        <p className="text-faded">
          Growing up getting passionate about technology, I've always had a
          passion for innovation and creating things. So Im graduating soon with
          a bachelor's in Information Technology from Haaga-Helia AMK, to
          accomplish my dream. Next, it was several online courses in web
          application development where I got to take concepts and turn them
          into products. Now I want to take my passion, education, and
          experience to develop web applications and still continue learning
          more.
        </p>
        <div className="row">
          <img
            id="aboutImg"
            className="col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img"
            src={about}
            alt="About me"
          />
        </div>
        <div className="text-faded center-align">
          <em>
            "Believe in continuous learning and getting better version of
            yourself that's the secret of success."
          </em>
        </div>
        <p className="text-faded">
          Highly interested in working as a Software Developer with companies to
          shoulder the primary responsibility of managing and developing project
          and solve problems through technology. My approach to software and
          application development is to balance form and function. I think a
          design should be intuitive, visually balanced, and it allows the
          content to shine. Designs that create a great user experience are
          significant because they cause people to buy products from the same
          company over and over again. Additionally, implementing designs with
          code efficiency in mind will enhance performance, scalability, and
          overall product quality. With this approach, there is no limit on what
          can be achieved.
        </p>

        <h4 className="white-color">Background</h4>
        <hr className="white-color sub" />
        <div className="row">
          <div className="col s12 m4">
            <img src={udemylogo} alt="Udemy" className="bgImg responsive-img" />
            <div className="background-text text-faded">
              Completing Udemy's{" "}
              <em>
                various courses in Web Development artifacts like JavaScript,
                React and Nodejs with MongoDB{" "}
              </em>
              has laid the foundation for my{" "}
              <strong>software development</strong> career. I'm still enrolling
              more courses to enhance my programming skills.
            </div>
          </div>
          <div className="col s12 m4">
            <img
              src={schoollogo}
              alt="schoollogo"
              className="bgImg responsive-img"
            />
            <div className="background-text text-faded">
              3+ years experience as a{" "}
              <strong>Physics teacher and School Incharge at </strong>at{" "}
              <em>Ganesh School</em> has helped me to develop various skills
              with in myself. I've learned to express my ideas and put it into
              pratical implementation with meaningful output. I've learned to
              work in team to meet common goal. It taught me to face problems
              and solve them systematically working with team.
            </div>
          </div>
          <div className="col s12 m4">
            <img
              src={haagalogo}
              alt="Cal Poly"
              className="bgImg responsive-img"
            />
            <br />
            <div className="background-text text-faded">
              Almost completing my bachelor's degree in{" "}
              <strong>Information Technology</strong> at Haaga-Helia AMK. It's
              <em>Learn by Doing</em> approach is how I acquired my logical and
              analytical skills. I'm feeling lucky that i had chosen this
              particular institution to pursue my career out of many options.
            </div>
          </div>
        </div>
        <h4 className="white-color">Hobbies</h4>
        <hr className="white-color sub" />
        <div className="row">
          <img
            id="aboutImg"
            className="col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img"
            src={hobby}
            alt="hobbies"
          />
        </div>
        <div className="text-faded center-align">
          <em>
            "Whatever you like to do, make it a hobby and whatever the world
            likes to do, make it a business. ~Warren Buffet"
          </em>
        </div>
      </div>
    </section>
  );
};

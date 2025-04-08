import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Naman Gupta</strong>. I'm an
              undergraduate student currently building my skillset through
              academic projects and hands-on learning. As a fresher, I’m
              constantly working on improving my work ethic, communication, and
              adaptability through real-world experiences and challenges.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My journey into the world of technology began with a strong
              passion for problem-solving, which led me to pursue the Computer
              Systems Technology program. Despite its challenges, I remained
              determined and forged lasting friendships that supported me
              throughout this demanding program
            </ScrollAnimation>
            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within my team  navigating through different hackathons 
              has been an incredibly rewarding and unique experience for me. I
              am eager to continue exploring exciting tech in the future,
              with a particular interest in web development 
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;

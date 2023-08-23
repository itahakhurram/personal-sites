import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="abt">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                
                <br />Welcome to my personal website! With nearly 2 years of cooperative experience and a focus on data analytics and development, I'm currently a Data Science student at Wilfrid Laurier University, set to graduate at the end of 2023. Passionate about software design, programming, and data architecture, I've mastered languages like Python, Java, C, and more. I thrive on challenges that enhance my skills and eagerly embrace new technologies. Join me as I strive to reach new heights in the ever-evolving tech landscape.  
 <br />
                <Col className="d-flex justify-content-left flex-wrap">
                  
                  <div>
                    <a href="https://drive.google.com/file/d/1Klud9JZMNOVGhoXqMhiHvc4F8zv85xQ0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
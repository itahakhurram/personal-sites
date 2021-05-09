import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.png";
import Tilt from 'react-parallax-tilt';
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Laurier Data Science Society</Card.Title>
                </div>
                <div><br/>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Project Manager</strong>
                    <br />
                    
                    
                    <strong>Duration:</strong> June 2020 - Present
                    <br/>
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>Causal inference research using statistical models to assess COVID-19 impact on mobility and economy </li>
                      <li>With a team consisting of 4 students built an accurate final report after cleaning data and visualized data sets by applying basic modeling techniques and statistical analysis tools e.g R and Microsoft Excel
                      </li>
               
                  

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
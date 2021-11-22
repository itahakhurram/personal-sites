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
                <Card.Img variant="top" src={L_ACCENTURE} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Bank of Montreal</Card.Title>
                </div>
                <div><br/>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Junior Application Analyst</strong>
                    <br />
                    
                    
                    <strong>Duration:</strong> September 2021 - Present
                    <br/>
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>Responsible for development of IVR and CTI (Computer-Telephony Integration) software, supporting all lines of business including card activation, sales, service, payments, marketing, fraud, collections, and merchant disputes. </li>
                      <li>Developed the IVR applications using the Genesys Composer and used Tomcat as application servers.</li>
                      <li>Prepared the test cases and test plans for various phases of testing, debugged the application-level issues using NDF logs and environmental level issues using Configuration, Reporting, Log DB, SCS sever level logs</li>
                      <li>Developed IVR reports for Business using VBA, for pulling the call stats, and displaying it in a spread sheet along with the containment rate of IVR applications.</li>
                  

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
import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.png";
import Tilt from 'react-parallax-tilt';
import L_vv from "../../assets/img/experience/vv.png";
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
                    <strong className="body-title-style ">Business Analyst</strong>
                    <br />
                    
                    
                    <strong>Duration:</strong> August 2023 - Present
                    <br/>
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>•	Conducted comprehensive data analysis using tools such as Excel, SQL, and Tableau, enabling strategic insights for informed decision-making and contributing to the optimization of operational processes. </li>
                      <li>•	Participated in requirements gathering sessions and facilitated effective communication between stakeholders and development teams, streamlining project timelines and ensuring the timely delivery of software enhancements.</li>
                      <li>•	Contributed to the enhancement of customer experience by analyzing customer feedback data and proposing improvements to digital interfaces, leading to a 15% increase in customer satisfaction scores.</li>
                  

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>


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
                    <strong className="body-title-style ">Application Support Analyst</strong>
                    <br />
                    
                    
                    <strong>Duration:</strong> May 2023 - August 2023
                    <br/>
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>Streamlined project implementation by collaborating with development teams on understanding project requirements, identifying dependencies, and devising deployment plans. Result: Reduced project implementation time by 20%. </li>
                      <li>Enhanced decision-making and business performance by analyzing cross-business data through visualization tools, statistics, and stakeholder engagement, leading to the identification, and tracking of key performance indicators (KPIs). Impact: Contributed to a 15% increase in operational efficiency.</li>
                      <li>Generated actionable insights for senior management by developing and maintaining robust data models, producing reports that facilitated strategic decision-making. Conducted regular data audits, bolstering data integrity, and ensuring accurate analysis. Outcome: Enabled a 25% improvement in data accuracy and informed decision-making.</li>
                  

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>


      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" src={L_vv} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">VerticalScope Inc.</Card.Title>
                </div>
                <div><br/>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Developer/QA intern</strong>
                    <br />
                    
                    
                    <strong>Duration:</strong> April 2022 - January 2023
                    <br/>
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>Attained 93% accuracy in developing a comment filtering feature, successfully deployed across 6 VS products. Additionally, resolved 30+ bug tickets across three products, optimizing website functionality for VS customers. </li>
                      <li>Automated ticket processing from the Regression Backlog, ensuring seamless QA Automation infrastructure updates.</li>
                      <li>Produced performance visualization dashboards using Google Data Studio, leveraging data fusion from Google Analytics. Employed SQL queries via Google BigQuery, driving insights to facilitate informed business choices.</li>
                      <li>Implemented A/B testing on commerce sites using A/B Tasty to make informed decisions on website design changes.</li>
                  

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>


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
                    
                    
                    <strong>Duration:</strong> September 2021 - December 2021
                    <br/>
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>Collaborated for development of existing IVR and CTI (Computer-Telephony Integration) software, supporting all lines of business including card activation, sales, service, payments, marketing, fraud, collections, and merchant disputes. </li>
                      <li>Developed the IVR applications using the Genesys Composer and used Tomcat as application servers.</li>
                      <li>Customized testing with comprehensive test cases, resolving application-level issues using NDF logs and environmental concerns via Configuration, Reporting, Log DB, and server log</li>
                      <li>•	Created IVR reports using VBA, extracting call stats for business insights and process enhancement.</li>
                  

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
import React from "react";
import {
  CertificateContainer,
  CertificateDetails,
  Container,
  InstructorContainer,
  WorkshopOverview,
  WorkshopTitle,
  WorkshopTopic,
  WorkshopTopics,
} from "./styledComponents";

import ticks from "../../assets/ticks.png";
import certificate from "../../assets/certificate.png";
import Home from "../../pages/Home";
// import Events from "../Events";
// import { HomeContainer } from "../../pages/Home/styledComponents";

const Workshop = ({ workshop }) => {
  return (
    <>
      <Container>
        <WorkshopOverview>{workshop.overview}</WorkshopOverview>
        <div>
          <WorkshopTitle>
            What you'll <span>learn</span>
          </WorkshopTitle>
          <WorkshopTopics>
            {workshop.whatYouWillLearn.map((item, index) => (
              <WorkshopTopic key={index}>
                <img src={ticks} alt="Tick" />
                <p>{item}</p>
              </WorkshopTopic>
            ))}
          </WorkshopTopics>
        </div>
        <div>
          <WorkshopTitle>
            Earn a <span>certificate</span> of completion
          </WorkshopTitle>
          <CertificateContainer>
            <img src={certificate} alt="Certificate" />
            <CertificateDetails>
              <div>
                <h2>Official Certification</h2>
                <p>
                  Validate your learning journey with an official certificate
                  for each completed workshop.
                </p>
              </div>
              <div>
                <h2>Showcase Your Achievement</h2>
                <p>
                  Share your certificate with your network to celebrate your
                  success and inspire others.
                </p>
              </div>
            </CertificateDetails>
          </CertificateContainer>
        </div>
        <div>
          <WorkshopTitle>
            About <span>Instructor</span>
          </WorkshopTitle>
          <InstructorContainer>
            {workshop.instructor.map((item, index) => (
              <li key={index}>
                <div>
                  <img src={item.image} alt={item.name} />
                  <div className="instructor-details">
                    <h2>{item.name}</h2>
                    <p>{item.role}</p>
                  </div>
                </div>
                <p>{item.description}</p>
              </li>
            ))}
          </InstructorContainer>
        </div>
      </Container>
      <div>
        <WorkshopTitle style={{ padding: "16px 24px" }}>
          Upcoming <span>Events</span>
        </WorkshopTitle>
        {/* <Events /> */}
        <Home showAll={3} />
      </div>
    </>
  );
};

export default Workshop;

import React, { useState } from "react";
import {
  AboutDescription,
  AboutHeading,
  CertificateContainer,
  CertificateDetails,
  Container,
  EventsTitle,
  InstructorContainer,
  TabsContainer,
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

const tabs = [
  { id: 1, name: "Overview", link: "overview" },
  { id: 2, name: "About Instructor", link: "instructor" },
  { id: 3, name: "Upcoming Events", link: "events" },
  { id: 4, name: "About AGH", link: "about" },
];

const Workshop = ({ workshop }) => {
  const [active, setActive] = useState("overview");

  const handleTabClick = (link) => {
    setActive(link);
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <TabsContainer>
        {tabs.map((tab) => (
          <a
            key={tab.id}
            className={active === tab.link ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleTabClick(tab.link);
            }}
            href={`#${tab.link}`}
          >
            {tab.name}
          </a>
        ))}
      </TabsContainer>
      <Container>
        <div id="overview">
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
        </div>
        <div id="instructor">
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
      <div id="events">
        <EventsTitle>
          Upcoming <span>Events</span>
        </EventsTitle>
        <Home showAll={3} />
      </div>
      <div id="about">
        <Container>
          <WorkshopTitle>
            About <span>AGH</span>
          </WorkshopTitle>
          <AboutDescription>
            At Aptitude Guru Hem (AGH), we are dedicated to equipping students
            with the essential skills and confidence to excel in their careers.
            Our expert-led training in aptitude, reasoning, and coding prepares
            learners to tackle every challenge — from company interview
            assessments to renowned coding platforms.
          </AboutDescription>
          <AboutHeading>
            A Symbol of Excellence in Placement Training
          </AboutHeading>
          <AboutDescription>
            Aptitude Guru Hem stands as a symbol of excellence in placement
            training, dedicated to helping students unlock their potential and
            achieve career success. Through focused aptitude and coding
            sessions, AGH empowers learners with the practical skills,
            confidence, and mindset needed to excel in competitive assessments
            and professional opportunities.
          </AboutDescription>
        </Container>
      </div>
    </>
  );
};

export default Workshop;

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { FaCircleCheck } from "react-icons/fa6";

import mockData from "../../data/mockData";

import circle1 from "../../assets/circle1.png";
import calender from "../../assets/calender.png";
import clock from "../../assets/clock.png";
import people from "../../assets/people.png";
import backIcon from "../../assets/backIcon.png";
import bottomImage1 from "../../assets/bottomImage1.png";
import bottomImage2 from "../../assets/bottomImage2.png";
import LMSImage from "../../assets/LMSImage.png";

import {
  BackContainer,
  BottomContainer,
  CircleImage,
  EnrollSection,
  LmsDetails,
  MainContainer,
  OriginalPrice,
  Price,
  RegisterButton,
  SuccessButton,
  SuccessContainer,
  WorkshopContainer,
  WorkshopDescription,
  WorkshopInfo,
  WorkshopInfoDetails,
  WorkshopPrice,
  WorkshopPricingSection,
  WorkshopTitle,
} from "./styledComponents";
import Workshop from "../../components/Workshop";

const WorkshopPage = () => {
  const [register, setRegister] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  const workshop = mockData.find((item) => item.id === parseInt(id, 10));
  console.log(workshop);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <MainContainer>
        <CircleImage src={circle1} alt="circle" className="circle" />

        <WorkshopContainer>
          <BackContainer onClick={handleClick}>
            <img src={backIcon} alt="Back" className="back-icon" />
            Back
          </BackContainer>
          <WorkshopTitle>{workshop.title}</WorkshopTitle>
          <WorkshopDescription>{workshop.description}</WorkshopDescription>
          <WorkshopInfo>
            <WorkshopInfoDetails>
              <img src={calender} alt="Dates" />
              <p>{workshop.dates}</p>
            </WorkshopInfoDetails>
            <WorkshopInfoDetails>
              <img src={clock} alt="Time" />
              <p>{workshop.time}</p>
            </WorkshopInfoDetails>
          </WorkshopInfo>
          <WorkshopPricingSection>
            {register ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key="success"
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <SuccessContainer>
                    <SuccessButton disabled={true}>Register Now</SuccessButton>
                    <div>
                      <FaCircleCheck className="check-icon" />
                      <p>You're already registered for this workshop.</p>
                    </div>
                  </SuccessContainer>
                </motion.div>
              </AnimatePresence>
            ) : (
              <>
                <WorkshopPrice>
                  <Price>
                    {workshop.price}
                    <span> + GST</span>
                  </Price>
                  <OriginalPrice>{workshop.originalPrice}</OriginalPrice>
                </WorkshopPrice>
                <RegisterButton onClick={() => setRegister(true)}>
                  Register Now
                </RegisterButton>
                <EnrollSection>
                  <img src={people} alt="students" />
                  <p>250 already enrolled</p>
                </EnrollSection>
              </>
            )}
          </WorkshopPricingSection>
        </WorkshopContainer>
      </MainContainer>

      <Workshop workshop={workshop} success={register} />

      <MainContainer>
        <img src={bottomImage1} alt="bottomImage1" className="bottom-image-1" />
        <img src={bottomImage2} alt="bottomImage2" className="bottom-image-2" />
        <BottomContainer>
          <LmsDetails>
            <h1>
              Our <span>LMS Platform</span>
            </h1>
            <p>
              AGH LMS is a centralized digital platform designed to deliver
              structured Aptitude, Coding, Soft Skills, Domain-Specific, and
              Career-Focused training to students from Engineering and Arts &
              Science streams.
            </p>
            <button>Explore Now</button>
          </LmsDetails>
          <img src={LMSImage} alt="LMS" />
        </BottomContainer>
      </MainContainer>
    </>
  );
};

export default WorkshopPage;

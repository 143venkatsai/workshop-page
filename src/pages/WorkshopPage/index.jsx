import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ChevronLeft } from "lucide-react";

import mockData from "../../data/mockData";

import circle1 from "../../assets/circle1.png";
import calender from "../../assets/calender.png";
import clock from "../../assets/clock.png";
import people from "../../assets/people.png";
import backIcon from "../../assets/backIcon.png";

import {
  BackContainer,
  CircleImage,
  EnrollSection,
  MainContainer,
  OriginalPrice,
  Price,
  RegisterButton,
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
            <WorkshopPrice>
              <Price>
                {workshop.price}
                <span> + GST</span>
              </Price>
              <OriginalPrice>{workshop.originalPrice}</OriginalPrice>
            </WorkshopPrice>
            <RegisterButton>Register Now</RegisterButton>
            <EnrollSection>
              <img src={people} alt="students" />
              <p>250 already enrolled</p>
            </EnrollSection>
          </WorkshopPricingSection>
        </WorkshopContainer>
      </MainContainer>
      <Workshop workshop={workshop} />
    </>
  );
};

export default WorkshopPage;

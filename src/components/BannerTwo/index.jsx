import React from "react";

import {
  BannerContainer,
  BannerImage,
  BannerSection,
} from "./styledComponents";

import bannerTwo from "../../assets/bannerTwo.png";
import bannerCircle1 from "../../assets/bannerCircle1.png";
import bannerCircle2 from "../../assets/bannerCircle2.png";

const BannerTwo = () => {
  return (
    <>
      <BannerContainer>
        <img src={bannerCircle1} alt="circle" className="circle1" />
        <img src={bannerCircle2} alt="circle" className="circle2" />
        <BannerSection>
          <div>
            <h1>
              Master <span>New Skills</span> with Expert-Led Workshops
            </h1>
            <p>
              Build a strong foundation in programming and aptitude — learn,
              practice, and grow with every session.
            </p>
          </div>

          <BannerImage src={bannerTwo} alt="banner" />
        </BannerSection>
      </BannerContainer>
    </>
  );
};

export default BannerTwo;

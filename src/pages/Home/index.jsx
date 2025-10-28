import React from "react";

import { FaVideo, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { IoBook } from "react-icons/io5";

import { TopContainer } from "./styledComponents";

import BannerOne from "../../components/BannerOne";
import BannerTwo from "../../components/BannerTwo";
import WorkshopCard from "../../components/WorkShopCard";
import BannerThree from "../../components/BannerThree";

const workshopDetails = [
  {
    id: 1,
    icon: <FaVideo />,
    top: "Interactive",
    main: "Live Class",
    iconColor: "#FC2947",
  },
  {
    id: 2,
    icon: <FaUserGraduate />,
    top: "Expert",
    main: "Mentorship",
    iconColor: "#298BFC",
  },
  {
    id: 3,
    icon: <PiCertificateFill />,
    top: "Verified",
    main: "Certificate",
    iconColor: "#00DBA8",
  },
  {
    id: 4,
    icon: <IoBook />,
    top: "Best",
    main: "Resources",
    iconColor: "#FFBF76",
  },
  {
    id: 5,
    icon: <FaChalkboardTeacher />,
    top: "Skilled",
    main: "Trainers",
    iconColor: "#6A4FFF",
  },
];

const Home = () => {
  return (
    <>
      {/* <BannerOne /> */}
      <BannerTwo />
      {/* <BannerThree />  */}
      <TopContainer>
        <div className="top">
          <p>Why Join </p>
          <h2>AGH Workshops</h2>
        </div>
        <ul>
          {workshopDetails.map((item) => (
            <li key={item.id}>
              <span style={{ color: item.iconColor, fontSize: "25px" }}>
                {item.icon}
              </span>
              <div>
                <p>{item.top}</p>
                <p className="main">{item.main}</p>
              </div>
            </li>
          ))}
        </ul>
      </TopContainer>
      <WorkshopCard />
    </>
  );
};

export default Home;

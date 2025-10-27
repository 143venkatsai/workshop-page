import React from "react";
import mockData from "../../data/mockData";
import {
  Card,
  CardContainer,
  CardDetails,
  DateSection,
  HomeContainer,
  Image,
  IconValue,
  TimeSection,
  Title,
  CardImage,
  PriceContainer,
  Price,
  OriginalPrice,
  FreeTag,
  BottomSection,
  EnrollSection,
  EnrollIcon,
  EnrollText,
  Button,
  TopContainer,
} from "./styledComponents";
import calender from "../../assets/calender.png";
import clock from "../../assets/clock.png";
import people from "../../assets/people.png";
import videoImg from "../../assets/videoImg.png";
// import mentor from "../../assets/mentor.png";
// import verify from "../../assets/verify.png";
// import resource from "../../assets/resource.png";
// import trainer from "../../assets/trainer.png";

import graduate from "../../assets/graduate.png";
import address from "../../assets/address.png";
import book from "../../assets/book.png";
import teacher from "../../assets/teacher.png";
import BannerOne from "../../components/BannerOne";

const workshopDetails = [
  { id: 1, icon: videoImg, top: "Interactive", main: "Live Class" },
  { id: 2, icon: graduate, top: "Expert", main: "Mentorship" },
  { id: 3, icon: address, top: "Verified", main: "Certificate" },
  { id: 4, icon: book, top: "Best", main: "Resources" },
  { id: 5, icon: teacher, top: "Skilled", main: "Trainers" },
];

const Home = ({ showAll }) => {
  const [data, setData] = React.useState(mockData);
  React.useEffect(() => {
    if (showAll) {
      setData(mockData.slice(0, showAll));
    }
  }, [showAll]);
  return (
    <>
      <BannerOne />
      <TopContainer>
        <div className="top">
          <p>Why Join </p>
          <h2>AGH Workshops</h2>
        </div>
        <ul>
          {workshopDetails.map((item) => (
            <li key={item.id}>
              <img src={item.icon} alt={item.main} />
              <div>
                <p>{item.top}</p>
                <p className="main">{item.main}</p>
              </div>
            </li>
          ))}
        </ul>
      </TopContainer>
      <HomeContainer>
        <CardContainer>
          {data.map((item) => (
            <Card key={item.id} to={`/workshop/${item.id}`}>
              <CardImage src={item.image} alt={item.title} />
              <CardDetails>
                <Title title={item.title}>
                  {item.title.length > 30
                    ? `${item.title.slice(0, 29)}...`
                    : item.title}
                </Title>
                <DateSection>
                  <Image src={calender} alt="calendar" />
                  <IconValue>{item.dates}</IconValue>
                </DateSection>
                <TimeSection>
                  <Image src={clock} alt="clock" />
                  <IconValue>{item.time}</IconValue>
                </TimeSection>
                <div>
                  {item.free ? (
                    <PriceContainer>
                      <Price>{item.price}</Price>
                      <OriginalPrice>{item.originalPrice}</OriginalPrice>
                      <FreeTag>Free</FreeTag>
                    </PriceContainer>
                  ) : (
                    <PriceContainer>
                      <Price>
                        {item.price}
                        <span> + GST</span>
                      </Price>
                      <OriginalPrice>{item.originalPrice}</OriginalPrice>
                    </PriceContainer>
                  )}
                </div>
                <BottomSection>
                  <EnrollSection>
                    <EnrollIcon src={people} alt="students" />
                    <EnrollText>{item.enrolled} already enrolled</EnrollText>
                  </EnrollSection>
                  <Button>{item.registerButton}</Button>
                </BottomSection>
              </CardDetails>
            </Card>
          ))}
        </CardContainer>
      </HomeContainer>
    </>
  );
};

export default Home;

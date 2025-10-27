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
} from "./styledComponents";
import calender from "../../assets/calender.png";
import clock from "../../assets/clock.png";
import people from "../../assets/people.png";

const Home = ({ showAll }) => {
  const [data, setData] = React.useState(mockData);
  React.useEffect(() => {
    if (showAll) {
      setData(mockData.slice(0, showAll));
    }
  }, [showAll]);
  return (
    <>
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

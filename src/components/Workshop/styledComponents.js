import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  margin: auto;
  padding: 20px 0px;

  @media (max-width: 786px) {
    padding: 0px 20px;
  }
`;

export const WorkshopOverview = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  color: #262626;
`;

export const WorkshopTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #212121;
  letter-spacing: -0.05px;
  line-height: 140%;

  span {
    color: #fc2947;
  }
`;

export const WorkshopTopics = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  padding: 0px;
`;

export const WorkshopTopic = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    height: 10px;
    width: 18px;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    color: #4b4444;
    margin: 0;
  }
`;

export const CertificateContainer = styled.div`
  display: flex;
  //   align-items: center;
  gap: 40px;

  img {
    height: 240px;
    width: 390px;
    border: 1px solid #dcdcdc;
    padding: 8px;
  }

  @media (max-width: 786px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const CertificateDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #343434;
    line-height: 150%;
    margin: 0;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    color: #4b4444;
    line-height: 150%;
    margin: 0;
  }
`;

export const InstructorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
    list-style: none;
    padding: 0px;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 12px;
    border: 1px solid #dcdcdc;
    border-radius: 12px;
    padding: 16px 32px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  img {
    height: 59px;
    width: 59px;
    border-radius: 50%;
  }

  .instructor-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #343434;
    line-height: 150%;
    margin: 0;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    color: #4b4444;
    line-height: 150%;
    margin: 0;
  }
`;

export const EventsTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #212121;
  letter-spacing: -0.05px;
  line-height: 140%;
  max-width: 1200px;
  margin: auto;
  margin: 40px auto 20px auto;

  span {
    color: #fc2947;
  }

  @media (max-width: 786px) {
    margin: 40px 24px 20px 24px;
  }
`;

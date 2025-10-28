import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1200px;
  margin: auto;
  padding: 20px 0px;

  scroll-behaviour: smooth;
  // scroll-margin-top: 100px;

  @media (max-width: 786px) {
    padding: 0px 20px;
    // scroll-margin-top: 80px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    padding: 20px 40px;
  }
`;

export const WorkshopOverview = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  color: #262626;

  @media (max-width: 786px) {
    font-size: 16px;
  }
`;

export const WorkshopTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #212121;
  letter-spacing: -0.05px;
  line-height: 140%;
  margin: 0;
  span {
    color: #fc2947;
  }

  @media (max-width: 786px) {
    font-size: 24px;
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

  @media (max-width: 786px) {
    p {
      font-size: 16px;
    }
  }
`;

export const CertificateContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;

  img {
    height: 240px;
    width: 390px;
    border: 1px solid #dcdcdc;
    padding: 8px;
    box-sizing: border-box;
  }

  @media (max-width: 786px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    img {
      width: 100%;
      height: auto;
      max-width: 100%;
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

    @media (max-width: 786px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;
    color: #4b4444;
    line-height: 150%;
    margin: 0;

    @media (max-width: 786px) {
      font-size: 16px;
    }
  }
`;

export const InstructorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 20px;

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

    @media (max-width: 786px) {
      padding: 16px 24px;
    }
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

  .role {
    font-size: 20px;
    font-weight: 400;
    color: #4b4444;
    line-height: 150%;
    margin: 0;

    @media (max-width: 786px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;
    color: #4b4444;
    line-height: 150%;
    margin: 0;

    @media (max-width: 786px) {
      font-size: 16px;
    }
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
  margin: 20px auto 20px auto;

  span {
    color: #fc2947;
  }

  @media (max-width: 786px) {
    margin: 40px 24px 10px 24px;
    font-size: 24px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    padding: 0px 40px;
  }
`;

export const AboutDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #262626;
  line-height: 150%;
  letter-spacing: -0.05px;
  margin: 0;
  margin-top: -10px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: justify;
    text-justify: inter-word;
  }
`;

export const AboutHeading = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #212121;
  letter-spacing: -0.05px;
  line-height: 140%;
  margin: 0;
`;

export const TabsContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  a {
    font-size: 16px;
    font-weight: 500;
    color: #6f7176;
    cursor: pointer;
    line-height: 120%;
    padding: 12px 20px;
    border-bottom: 1px solid #f1f2f3;
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
  }

  a.active {
    color: #2583c0;
    border-bottom: 3px solid #2583c0;
  }

  a:hover {
    color: #2583c0;
  }

  @media (max-width: 786px) {
    width: 90%;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    padding: 20px 40px;
  }
`;

export const MeetContainer = styled.div`
  background-color: #ccffed;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 6px;
  padding: 8px 16px;
  margin-top: 20px;

  img {
    width: 24px;
    height: 20px;
  }

  p {
    font-size: 15px;
    font-weight: 600;
    font-style: Italic;
    color: #057a63;
    line-height: 160%;
    margin: 0;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 20px;

    p {
      font-size: 14px;
    }

    img {
      margin-top: 5px;
    }
  }
`;

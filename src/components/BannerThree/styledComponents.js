import styled from "styled-components";

export const BannerContainer = styled.div`
  background-color: #f4f4f4;
  position: relative;

  .circle1 {
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
  }

  .circle2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 150px;
    height: 150px;
  }

  @media (max-width: 768px) {
    .circle1 {
      width: 80px;
      height: 80px;
    }

    .circle2 {
      width: 75px;
      height: 75px;
    }
  }
`;

export const BannerSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0px auto;
  padding: 50px 0px;

  div h1 {
    font-size: 48px;
    font-weight: 600;
    color: #212121;
    margin: auto;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  span {
    color: #fc2947;
  }

  p {
    font-size: 24px;
    font-weight: 400;
    color: #646464;
    margin-top: 20px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 24px;

    div {
      order: 2;
      margin-top: 20px;
    }

    img {
      order: 1;
      height: 155px;
    }
  }
`;

export const BannerImage = styled.img`
  object-fit: cover;
  max-width: 588px;
  max-height: 292px;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

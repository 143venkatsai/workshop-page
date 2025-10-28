import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;

  h1 {
    font-size: 40px;
    font-weight: 600;
    color: #212121;
    text-align: center;
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
    margin: auto;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 20px 40px;
  }
`;

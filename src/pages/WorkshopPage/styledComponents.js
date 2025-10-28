import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #f4f4f4;
  position: relative;

  .bottom-image-1 {
    position: absolute;
    right: 0;
    width: 200px;
    height: 240px;
    z-index: 0;
  }

  .bottom-image-2 {
    position: absolute;
    lefft: 0;
    bottom: 0;
    width: 200px;
    height: 240px;
    z-index: 0;
  }

  @media (max-width: 786px) {
    .bottom-image-1 {
      width: 100px;
      height: 120px;
    }

    .bottom-image-2 {
      width: 200px;
      height: 300px;
    }
  }
`;

export const CircleImage = styled.img`
  position: absolute;
  height: 300px;
  width: auto;
  right: 0;

  @media (max-width: 768px) {
    height: 80px;
    width: auto;
  }
`;

export const WorkshopContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0px;

  @media (max-width: 768px) {
    padding: 39px 24px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    padding: 20px 40px;
  }
`;

export const BackContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #212121;
  font-size: 20px;

  .back-icon {
    width: 9px;
    height: 17px;
  }
`;

export const WorkshopTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.05px;
  color: #212121;
  margin-bottom: 12px;

  @media (max-width: 786px) {
    font-size: 24px;
  }
`;

export const WorkshopDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #262626;
  margin-top: 0px;
  max-width: 700px;
  line-height: 150%;
  margin-bottom: 0px;

  @media (max-width: 786px) {
    font-size: 16px;
  }
`;

export const WorkshopInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 10px;

  @media (max-width: 786px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
    margin-top: 20px;
  }
`;

export const WorkshopInfoDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    height: 17px;
    width: 17px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: #6f7176;
  }

  @media (max-width: 786px) {
    margin-top: -10px;
    margin-bottom: -10px;
  }
`;

export const WorkshopPricingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0px;
    gap: 0px;
  }
`;

export const WorkshopPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Price = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #343434;

  span {
    font-size: 16px;
    font-weight: 700;
    color: #fc2947;
  }
`;

export const OriginalPrice = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: #adacac;
  text-decoration: line-through;
`;

export const RegisterButton = styled.button`
  background-color: #298bfc;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  padding: 14px 30px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  @media (max-width: 786px) {
    padding: 12px 40px;
  }
`;

export const EnrollSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    height: 14px;
    width: 20px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    color: #6f7176;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 56px;
  padding: 64px 0px;
  position: relative;
  z-index: 1;
  margin-top: 30px;

  img {
    height: 371px;
    width: 572px;
  }

  @media (max-width: 768px) {
    padding: 39px 24px;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      height: auto;
    }
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    padding: 20px 40px;

    img {
      height: 300px;
    }
  }
`;

export const LmsDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  h1 {
    font-size: 32px;
    font-weight: 600;
    color: #212121;
    letter-spacing: -0.05px;
    line-height: 140%;
    margin: 0;
  }

  span {
    color: #fc2947;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
  }
  button {
    background-color: #fc2947;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border: none;
    padding: 14px 20px;
    border-radius: 8px;
    cursor: pointer;
    align-self: flex-start;
  }
`;

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  div .check-icon {
    color: #008000;
    height: 20px;
    width: 20px;
  }

  div p {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.05px;
    color: #6f6f6f;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
    gap: 0px;

    div p {
      font-size: 16px;
    }
  }
`;

export const SuccessButton = styled.button`
  background-color: #b3b3b3;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  padding: 14px 30px;
  border-radius: 8px;
  border: none;

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 786px) {
    padding: 12px 40px;
  }
`;

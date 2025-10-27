import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 0px;

  @media (max-width: 786px) {
    padding: 24px;
    // width: 100%;
  }
`;

export const CardContainer = styled.ul`
  display: grid;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled(Link)`
  border: 1px solid #dcdcdc;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 205px;
  object-fit: cover;
  border-bottom: 1px solid #dcdcdc;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #212121;
  margin-bottom: 0px;

  @media (max-width: 786px) {
    font-size: 20px;
  }
`;

export const DateSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 0px;
  margin-bottom: -14px;
`;

export const TimeSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const Image = styled.img`
  height: 20px;
  width: 20px;
`;

export const IconValue = styled.p`
  font-size: 16px;
  color: #5b6780;
  line-height: 1;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -10px;
  margin-bottom: 0px;
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

  @media (max-width: 786px) {
    font-size: 24px;
  }
`;

export const OriginalPrice = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: #adacac;
  text-decoration: line-through;
  margin-left: 12px;

  @media (max-width: 786px) {
    font-size: 20px;
  }
`;

export const FreeTag = styled.p`
  background-color: #dff1e4;
  color: #1b7938;
  font-size: 20px;
  font-weight: 600;
  padding: 4px 20px;
  border-radius: 4px;
  margin-left: auto;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #dcdcdc;
  padding: 16px 0px;
  margin-top: 0px;
`;

export const EnrollSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const EnrollIcon = styled.img`
  width: 20px;
  height: 14px;
`;

export const EnrollText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #5b6780;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  background-color: #298bfc;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  padding: 16px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 12px 10px;
  }
`;

import styled from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #dcdcdc;
  max-width: 1200px;
  margin: 48px auto;
  border-radius: 16px;
  padding: 24px 32px;

  box-sizing: border-box;

  div h2,
  p {
    margin: 0;
  }

  div p,
  h2 {
    font-size: 32px;
    color: #343434;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 20px;
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
  }

  ul img {
    height: 22px;
    width: 25px;
  }

  ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 139px;
    gap: 20px;
  }

  ul li:not(:last-child) {
    padding-right: 20px;
  }

  ul li:not(:last-child) {
    border-right: 1px solid #dcdcdc;
  }

  ul li p {
    text-align: center;
    color: #343434;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
  }

  ul li p.main {
    font-size: 20px;
    font-weight: 500;
    line-height: 120%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 24px;
    padding: 20px;

    .top {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .top p,
    h2 {
      font-size: 24px;
    }

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
      overflow-x: auto;
      overflow-y: hidden;
      width: 100%;
      padding-bottom: 8px;
      margin-top: 24px;
      &::-webkit-scrollbar {
        display: none;
      }
      & {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    }

    ul li {
      flex: 0 0 auto;
      width: 139px;
    }

    ul li:not(:last-child) {
      padding-right: 0px;
      border-right: none;
    }
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    margin: 20px 40px;
  }
`;

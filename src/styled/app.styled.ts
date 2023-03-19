import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
`;

export const Header = styled.header`
  color: white;
  font-family: "Lato";
  padding: 10px;
`;

export const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  font-size: 34px;

  //linea
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 0 auto;
  }
`;

export const Main = styled.main`
  width: 100%;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10rem;
  }
`;

export const Img = styled.img`
  max-width: 200px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
  animation: spin 2.5s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

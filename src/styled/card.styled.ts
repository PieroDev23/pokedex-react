import styled from "styled-components";

export const CardContainer = styled.div`
  border: 10px solid ${(props) => props.theme.bc};
  font-family: "Lato";
  padding: 15px;
  max-width: 350px;
  width: 90%;
  display: flex;
  flex-direction: column;
  color: #171a21;
  border-radius: 15px;
  background-color: ${(props) => props.theme.bg};
`;

CardContainer.defaultProps = {
  theme: {
    bg: "#fffff",
    bc: "00000",
  },
};

export const CardHeader = styled.div`
  display: grid;
  border: 3px solid #292531;
  grid-template-columns: repeat(5, 1fr);
  background-color: rgba(70, 69, 69, 0.575);
  border-radius: 10px;
  padding: 15px;
  color: #ffff;
  gap: 15px;
`;

CardHeader.defaultProps = {
  theme: {
    main: "#2C2B2D",
  },
};

export const Thumbnail = styled.img`
  max-width: 150px;
  width: 90%;
  display: block;
`;

export const CardBody = styled.div`
  margin-top: 10px;
`;

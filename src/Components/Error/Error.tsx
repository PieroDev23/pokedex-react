import styled from "styled-components";

interface ErrorProps{
  children: string
}


const ErrorMessage = styled.div`
  color: #ffff;
  background-color: #e84855;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  text-align: center;
`;

export default function ErrorMsg({ children }: ErrorProps) {
  return <ErrorMessage>{children}</ErrorMessage>;
}

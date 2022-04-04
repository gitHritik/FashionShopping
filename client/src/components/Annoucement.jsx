import styled from "styled-components";

const Annoucement = () => {
  return <Container>Super Deal! Free Shipping On Order Over $45</Container>;
};
const Container = styled.div`
  background-color: teal;
  font-size: 14px;
  height: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

export default Annoucement;

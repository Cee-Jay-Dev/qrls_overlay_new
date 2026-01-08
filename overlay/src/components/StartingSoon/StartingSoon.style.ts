import background from "../../assets/screens/starting_soon.png";
import styled from "styled-components";

export const BackImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
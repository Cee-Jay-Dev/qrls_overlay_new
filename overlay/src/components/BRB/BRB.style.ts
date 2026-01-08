import styled from "styled-components";

export const BackImage = styled.div<{ background: string }>`
  position: absolute;
  inset: 0;

  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

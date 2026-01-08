import styled from "styled-components";
import background from "../../assets/background.png";

export const BackImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  transform: translateZ(0);
  will-change: transform;
`;

export const CasterScreenArea = styled.div`
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translateX(-50%) translateZ(0);
  transform-origin: top center;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CasterPiece = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Bourgeois;
`;

export const CasterBox = styled.div`
  position: relative;
  width: 500px;
  height: 550px;
  background: linear-gradient(to top, #0d0f0e, #1a1e26);
  border-radius: 20px;
  margin-left: 40px;
  overflow: hidden;

  transform: translateZ(0);
  will-change: transform;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 5px;
    background: linear-gradient(to left, #0d66ad, #137ece);

    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;

    pointer-events: none;
    z-index: 2;
  }

  iframe {
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    border: none;
    border-radius: 20px;
    background: black;
    z-index: 1;

    transform: translateZ(0);
    will-change: transform;
  }
`;

export const CasterBackground = styled.div`
  width: 500px;
  height: 80px;
  margin-top: 20px;
  margin-left: 40px;
  border-radius: 20px;
  background: linear-gradient(to left, #0d66ad, #137ece);

  transform: translateZ(0);
`;

export const CasterTitle = styled.div`
  margin-left: 25px;
  font-size: 40px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
`;

export const CasterSocial = styled.div`
  margin-left: 25px;
  margin-top: -5px;
  font-size: 25px;
  font-weight: 600;
  color: #2f363d;
  text-transform: uppercase;
`;

export const CasterScreenBackground = styled.div`
  position: absolute;
  width: 900px;
  height: 90px;
  top: 50px;
  left: 50%;
  transform: translateX(-50%) translateZ(0);
  transform-origin: top center;
  border-radius: 20px;

  background: linear-gradient(to left, #0d66ad, #137ece);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CasterScreenTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  text-align: center;
`;
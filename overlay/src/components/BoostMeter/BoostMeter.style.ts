import styled from "styled-components";
import logo from "../../assets/qrls_logo.png";

export const BoostMeterWrapper = styled.div`
  position: fixed;
  bottom: 3%;
  right: 3%;
  width: 270px;
  height: 270px;
  font-family: Bourgeois;
  transform: scale(0.8) translateZ(0);
  will-change: transform;
`;

export const QRLS_Logo = styled.div`
  position: absolute;
  bottom: 15%;
  right: 20%;
  width: 60%;
  height: 60%;
  background-image: url(${logo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
`;

export const BoostSvg = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(135deg);
`;

export const CircleBackground2 = styled.circle`
  fill: #0E0F11;
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: rgba(0, 0, 0, 1);
  stroke-width: 8.5;
`;

export const CircleBackground3 = styled.circle`
  fill: none;
  stroke: rgba(255, 255, 255, 0.3);
  stroke-width: 10;
`;

export const BoostCircleFill = styled.circle<{ gradientId: string }>`
  fill: none;
  stroke-width: 8;
  stroke: url(#${({ gradientId }) => gradientId});
  transition: stroke-dashoffset 0.15s linear;
  will-change: stroke-dashoffset;
`;

export const BoostTextFlare = styled.div<{ $isBlue: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 110px;
  height: 110px;
  background: ${({ $isBlue }) => ($isBlue ? "#4aa3df" : "#ff8c42")};
  opacity: 0.80;
  border-radius: 50%;
  transform: translate(-50%, -50%) translateZ(0);
  filter: blur(26px);
  pointer-events: none;
  will-change: opacity;
`;

export const BoostTopText = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 25px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
`;

export const BoostText = styled.div`
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 55px;
  font-weight: 700;
  color: white;
`;

import styled from "styled-components";

export const StatBoardWrapper = styled.div<{ isBlue: boolean }>`
  position: fixed;
  top: 5%;
  ${({ isBlue }) => (isBlue ? "left: 1%;" : "right: 1%;")}

  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: Bourgeois;
  text-transform: uppercase;
`;

export const PlayerNameBox = styled.div<{
    isSpectated: boolean;
    gradient: string;
    isBlue: boolean;
}>`
  min-width: 240px;
  height: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 6px 12px;

  background: ${({ isSpectated, gradient }) =>
        isSpectated ? gradient : "linear-gradient(to top, #0D0F0E, #1A1E26)"};

  color: white;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 18px;

  text-align: ${({ isBlue }) => (isBlue ? "left" : "right")};
  align-items: ${({ isBlue }) => (isBlue ? "flex-start" : "flex-end")};

  border-top-right-radius: ${({ isBlue }) => (isBlue ? "10px" : "0")};
  border-bottom-right-radius: ${({ isBlue }) => (isBlue ? "10px" : "0")};

  border-top-left-radius: ${({ isBlue }) => (!isBlue ? "10px" : "0")};
  border-bottom-left-radius: ${({ isBlue }) => (!isBlue ? "10px" : "0")};
`;

export const BoostBar = styled.div`
  width: 100%;
  height: 12px;
  background: #222;
  margin-top: 3px;
  overflow: hidden;
`;

export const BoostFill = styled.div<{
    boost: number;
    gradient: string;
    isSpectated: boolean;
}>`
  height: 100%;
  width: ${({ boost }) => Math.max(0, Math.min(boost, 100))}%;
  background: ${({ isSpectated, gradient }) =>
        isSpectated ? "#ffffff" : gradient};
  transition: width 0.2s linear, background 0.15s ease;
`;

export const TeamStripe = styled.div<{ gradient: string }>`
  width: 5px;
  height: 42px;
  background: ${({ gradient }) => gradient};
`;

export const PlayerRow = styled.div<{ isBlue: boolean }>`
  display: flex;
  flex-direction: ${({ isBlue }) => (isBlue ? "row" : "row-reverse")};
  align-items: center;
`;
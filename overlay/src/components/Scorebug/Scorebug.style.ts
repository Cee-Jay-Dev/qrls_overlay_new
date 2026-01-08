import styled, { keyframes, css } from "styled-components";
import background from "../../assets/replay.png";

export const ScorebugContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: top center;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopTitleBar = styled.div`
    display: flex;
    width: 890px;
    height: 25px;
    background: #0E0F11;
    justify-content: center;
    align-items: center;
    color: #7D98AC;
    letter-spacing: 5px;
    font-size: 15px;
    font-weight: 600;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
`

export const ScorebugWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Bourgeois;
`;

export const LeftSide_LogoBox = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(to top, #0D0F0E, #1A1E26);
  border-bottom-left-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const LeftSide = styled.div`
    width: 300px;
    height: 70px;
    background: linear-gradient(to left, #0D66AD, #137ECE);
`

export const LeftSide_NameBox = styled.div`
    position: relative;
    top: 5px;
    width: 300px;
    height: 65px;
    border-top-right-radius: 10px;
    background: linear-gradient(to top right, #175785, #1D1F2C);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 35px;
    font-weight: 600;
    color: white;
    text-transform: uppercase;

    span {
        transform: translateY(-4px);
    }
`
export const LeftScoreBox = styled.div`
    width: 70px;
    height: 70px;
    background: linear-gradient(to right, #0D66AD, #137ECE);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 60px;
    font-weight: 700;
    color: white;

    span {
        transform: translateY(-4px);
    }
`

export const ClockContainer = styled.div`
  width: 150px;
  height: 70px;

  background: linear-gradient(to top, #0D0F0E, #1A1E26);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 50px;
  font-weight: 700;
  color: white;

  span {
    transform: translateY(-4px);
  }
`;

export const RightSide = styled.div`
    width: 300px;
    height: 70px;
    background: linear-gradient(to right, #C75A0A, #F08C2E);
`

export const RightScoreBox = styled.div`
    width: 70px;
    height: 70px;
    background: linear-gradient(to left, #C75A0A, #F08C2E);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 60px;
    font-weight: 700;
    color: white;

    span {
        transform: translateY(-4px);
    }
`

export const RightSide_NameBox = styled.div`
    position: relative;
    top: 5px;
    left: 0px;
    width: 300px;
    height: 65px;
    border-top-left-radius: 10px;
    background: linear-gradient(to top left, #7A3E12, #1D1F2C);
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 35px;
    font-weight: 600;
    color: white;
    text-transform: uppercase;

    span {
        transform: translateY(-4px);
    }
`

export const RightSide_LogoBox = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(to top, #0D0F0E, #1A1E26);
  border-bottom-right-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const BottomBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const BottomCenterBox = styled.div`
    display: flex;
    width: 290px;
    height: 35px;
    background: #101019;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`

export const TextContainer = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-evenly;
  align-items: center;
`;


export const BestText = styled.div`
    color: #7D98AC;
    letter-spacing: 5px;
    font-size: 15px;
    font-weight: 600;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
`;

export const DividerDotText = styled.div`
    color: #7D98AC;
    letter-spacing: 5px;
    font-size: 15px;
    font-weight: 600;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
`;


export const GameText = styled.div`
    color: #7D98AC;
    letter-spacing: 5px;
    font-size: 15px;
    font-weight: 600;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
`;


export const BottomLeftBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 25px;
    background: #0E0F11;
    border-bottom-left-radius: 10px;
    transform: translateY(-5px);
`

export const BottomRightBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 25px;
    background: #0E0F11;
    border-bottom-right-radius: 10px;
    transform: translateY(-5px);
`

export const GameScoreIndicator = styled.div<{
    win: boolean;
    team: "blue" | "orange";
}>`
  margin-left: 5px;
  width: 40px;
  height: 13px;
  border-radius: 3px;

  background: ${({ win, team }) => {
        if (!win) return "rgba(255,255,255,0.05)";

        return team === "blue"
            ? "linear-gradient(to right, #0D66AD, #137ECE)"
            : "linear-gradient(to right, #C8511B, #E76F2B)";
    }};

  transition: background 0.25s ease, opacity 0.25s ease;
`;

export const ReplayContainer = styled.div<{ isVisible: boolean }>`
    position: absolute;
    width: 100%;
    height: 100%;

    transform: translateY(${({ isVisible }) => (isVisible ? "0%" : "200%")});
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);

    display: flex;
    flex-direction: column;
    pointer-events: none;
`;

export const BackImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CenterBoxCont = styled.div<{ isVisible: boolean }>`
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%) scale(1.5);
  transform-origin: top center;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};

  transition:
    opacity 300ms ease,
    visibility 300ms ease;
`;

export const CenterBox = styled.div`
    width: 800px;
    height: 35px;
`

export const StatLineOneCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Bourgeois;
  justify-content: center;
`

export const StatLineOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 23px;
  padding-right: 23px;
`

export const CenterBoxPlayerName = styled.div`
    color: #ffffff;
    letter-spacing: 3px;
    font-size: 20px;
    font-weight: 600;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
`

export const CenterBoxSmallPlayerName = styled.div`
    color: #ffffff;
    letter-spacing: 3px;
    font-size: 15px;
    font-weight: 600;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
`

export const CenterStatsContainer = styled.div<{ team: 0 | 1; }>`
    width: 500px;
    height: 5px;
    background: ${({ team }) => {
        return team === 0
            ? "linear-gradient(to top, #175785, #1D1F2C)"
            : "linear-gradient(to top, #7A3E12, #1D1F2C)";
    }};
`

export const BottomStatsCenterBox = styled.div<{ team: 0 | 1; }>`
    width: 500px;
    height: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: ${({ team }) => {
        return team === 0
            ? "linear-gradient(to top, #0D66AD, #137ECE)"
            : "linear-gradient(to top, #C8511B, #E76F2B)";
    }};
`
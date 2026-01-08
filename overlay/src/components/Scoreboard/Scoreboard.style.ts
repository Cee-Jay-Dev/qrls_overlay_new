import styled from "styled-components";
import background from "../../assets/background.png";

export const BackImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ScorebugCon = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: top center;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScorebugWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Bourgeois;
`;

export const Blue_LogoBox = styled.div`
  width: 110px;
  height: 110px;
  background: linear-gradient(to top, #0D0F0E, #1A1E26);
  border-bottom-left-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const BlueTeamNameBack = styled.div`
    width: 500px;
    height: 110px;
    background: linear-gradient(to left, #0D66AD, #137ECE);
`

export const BlueTeamName = styled.div`
    position: relative;
    top: 10px;
    width: 500px;
    height: 100px;
    border-top-right-radius: 20px;
    background: linear-gradient(to top right, #175785, #1D1F2C);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 60px;
    font-weight: 600;
    color: white;
    text-transform: uppercase;

    span {
        transform: translateY(-4px);
    }
`

export const BlueScoreBox = styled.div`
    width: 110px;
    height: 110px;
    background: linear-gradient(to right, #0D66AD, #137ECE);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 90px;
    font-weight: 700;
    color: white;

    span {
        transform: translateY(-4px);
    }
`

export const VSContainer = styled.div`
  width: 250px;
  height: 110px;

  background: linear-gradient(to top, #0D0F0E, #1A1E26);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 90px;
  font-weight: 700;
  color: white;

  span {
    transform: translateY(-4px);
  }
`;

export const Orange_LogoBox = styled.div`
  width: 110px;
  height: 110px;
  background: linear-gradient(to top, #0D0F0E, #1A1E26);
  border-bottom-right-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const OrangeTeamNameBack = styled.div`
    width: 500px;
    height: 110px;
    background: linear-gradient(to right, #C75A0A, #F08C2E);
`

export const OangeTeamName = styled.div`
    position: relative;
    top: 10px;
    width: 500px;
    height: 100px;
    border-top-left-radius: 20px;
    background: linear-gradient(to top left, #7A3E12, #1D1F2C);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 60px;
    font-weight: 600;
    color: white;
    text-transform: uppercase;

    span {
        transform: translateY(-4px);
    }
`

export const OrangeScoreBox = styled.div`
    width: 110px;
    height: 110px;
    background: linear-gradient(to left, #C75A0A, #F08C2E);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 90px;
    font-weight: 700;
    color: white;

    span {
        transform: translateY(-4px);
    }
`

export const StreamTitle = styled.div`
    display: flex;
    width: 1470px;
    height: 40px;
    background: #0E0F11;
    justify-content: center;
    align-items: center;
    color: #7D98AC;
    letter-spacing: 5px;
    font-size: 25px;
    font-weight: 600;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`


export const BottomBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const BottomCenterBox = styled.div`
    display: flex;
    width: 470px;
    height: 55px;
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
    font-size: 25px;
    font-weight: 600;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
`;

export const DividerDotText = styled.div`
    color: #7D98AC;
    letter-spacing: 5px;
    font-size: 25px;
    font-weight: 600;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
`;


export const GameText = styled.div`
    color: #7D98AC;
    letter-spacing: 5px;
    font-size: 25px;
    font-weight: 600;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
`;


export const BottomLeftBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 35px;
    background: #0E0F11;
    border-bottom-left-radius: 10px;
    transform: translateY(-10px);
`

export const BottomRightBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 35px;
    background: #0E0F11;
    border-bottom-right-radius: 10px;
    transform: translateY(-10px);
`

export const GameScoreIndicator = styled.div<{
    win: boolean;
    team: "blue" | "orange";
}>`
  margin-left: 10px;
  width: 80px;
  height: 23px;
  border-radius: 5px;

  background: ${({ win, team }) => {
        if (!win) return "rgba(255,255,255,0.05)";

        return team === "blue"
            ? "linear-gradient(to right, #0D66AD, #137ECE)"
            : "linear-gradient(to right, #C8511B, #E76F2B)";
    }};

  transition: background 0.25s ease, opacity 0.25s ease;
`;

export const StatsContainer = styled.div`
  position: absolute;
  top: 340px;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: top center;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Bourgeois;
`;

export const LeftPlayerNameBox = styled.div`
    width: 610px;
    height: 80px;
    background: linear-gradient(to left, #0D66AD, #137ECE);
    border-top-left-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const STATContainer = styled.div`
  width: 250px;
  height: 80px;

  background: linear-gradient(to top, #0D0F0E, #1A1E26);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 40px;
  font-weight: 700;
  color: white;

  span {
    transform: translateY(-4px);
  }
`;

export const RightPlayerNameBox = styled.div`
    width: 610px;
    height: 80px;
    background: linear-gradient(to right, #C75A0A, #F08C2E);
    border-top-right-radius: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

export const LeftStatsValueBox = styled.div`
    width: 610px;
    height: 430px;
    background: linear-gradient(to bottom, rgba(10, 10, 10, 0.85), rgba(20, 20, 20, 0.85));
    border-bottom-left-radius: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

export const StatTitlesBox = styled.div`
  width: 250px;
  height: 430px;

  background: linear-gradient(to bottom, rgba(10, 10, 10, 0.85), rgba(20, 20, 20, 0.85));

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RightStatsValueBox = styled.div`
    width: 610px;
    height: 430px;
    background: linear-gradient(to bottom, rgba(10, 10, 10, 0.85), rgba(20, 20, 20, 0.85));
    border-bottom-right-radius: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

export const StatsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;

  font-size: 40px;
  font-weight: 700;
  color: white;
`

export const DisplayStatsPerBack = styled.div`
    width: 230px;
    height: 10px;
    background: black;
    border-radius: 3px;
    margin-top: 5px;

    display: flex;
    flex-direction: row;
    align-items: center;
`

export const DisplayStatsBlueSide = styled.div<{width: number}>`
    width: ${({ width }) => `${width}px`};
    height: 10px;
    background: linear-gradient(to left, #0D66AD, #137ECE);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`

export const DisplayStatsOrangeSide = styled.div<{ width: number }>`
    width: ${({ width }) => `${width}px`};
    height: 10px;
    background: linear-gradient(to right, #C75A0A, #F08C2E);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`

export const StatsColumn = styled.div`
    width: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StatsNameTitle = styled.div`
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;

  font-size: clamp(18px, 2.5vw, 40px);
  font-weight: 700;
  color: white;
  text-align: center;

  transform-origin: center;
`;

export const StatsValue = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`
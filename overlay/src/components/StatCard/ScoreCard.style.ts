import styled from "styled-components";

export const StatCardContainer = styled.div<{ $isVisible: boolean }>`
    position: absolute;
    bottom: 0;
    left: 0;

    transform: translateY(${({ $isVisible }) => ($isVisible ? "0%" : "120%")})
        translateZ(0);
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};

    transition:
        transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
        opacity 0.25s ease;

    will-change: transform, opacity;
    pointer-events: none;
`;

export const StatCardWrapper = styled.div`
    display: flex;
    align-items: center;
    font-family: Bourgeois;
`;

export const StatCardBoostNameBox = styled.div<{ gradient: string }>`
    width: 250px;
    height: 70px;
    background: ${({ gradient }) => gradient};
    border-top-right-radius: 10px;
`;

export const NameTitle = styled.div`
    color: #ffffff;
    letter-spacing: 3px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    padding-top: 10px;
`;

export const BoostBarBack = styled.div`
    position: relative;
    left: 10px;
    top: 15px;
    width: 230px;
    height: 10px;
    background: linear-gradient(to top, #0D0F0E, #1A1E26);
    border-radius: 3px;
    overflow: hidden;
`;

export const BoostBarFill = styled.div<{ $scale: number }>`
    height: 100%;
    width: 100%;
    background: #ffffff;
    border-radius: 3px;

    transform: scaleX(${({ $scale }) => $scale});
    transform-origin: left;
    transition: transform 0.15s linear;

    will-change: transform;
`;

export const StatCardStatsBackground = styled.div<{ gradient: string }>`
    position: relative;
    top: 5px;
    display: flex;
    width: 450px;
    height: 60px;
    background: ${({ gradient }) => gradient};
    border-top-right-radius: 10px;
`;

export const StatCardStatsContainer = styled.div`
    display: flex;
    width: 450px;
    height: 55px;
    background: linear-gradient(to top, #0D0F0E, #1A1E26);
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const StatsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 15px;
`;

export const StatsTitle = styled.div`
    color: #7D98AC;
    letter-spacing: 3px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
`;

export const StatsValue = styled.div`
    color: #ffffff;
    letter-spacing: 3px;
    font-size: 25px;
    font-weight: 600;
    text-transform: uppercase;
`;

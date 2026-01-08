import styled from "styled-components";

export const TransitionContainer = styled.div<{ $active: boolean }>`
    position: absolute;
    inset: 0;
    z-index: 9999;
    pointer-events: none;

    opacity: ${({ $active }) => ($active ? 1 : 0)};
    visibility: ${({ $active }) => ($active ? "visible" : "hidden")};

    transition: opacity 200ms ease;
    will-change: opacity;
`;

export const TransitionVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;

    transform: translateZ(0);
    backface-visibility: hidden;
`;

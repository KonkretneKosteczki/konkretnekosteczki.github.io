import styled from "@emotion/styled";

export const ACanvas = styled.canvas`
    width: 100vw;
    height: calc(100vh - ${({theme}) => theme.header.navigationHeight}px);
`;

export const CanvasContainer = styled.div`
    height: 300vh;
    background: #080404;
`;

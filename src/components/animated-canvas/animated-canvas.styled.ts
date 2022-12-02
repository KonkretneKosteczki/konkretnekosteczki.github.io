import styled from "@emotion/styled";

export const ACanvas = styled.canvas`
    width: 100vw;
    height: calc(100vh - ${({theme}) => theme.header.navigationHeight}px);
    
    top: ${({theme}) => theme.header.navigationHeight}px;
    position: sticky;
`;

export const CanvasContainer = styled.div`
    position: relative;
    height: 300vh;
`;

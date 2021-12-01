import styled from "@emotion/styled";

export const ContentContainer = styled.div`
    color: ${({theme}) => theme.colors.Light};
    max-width: 1140px;
    margin: auto;
`;

export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.FadedDark};
`

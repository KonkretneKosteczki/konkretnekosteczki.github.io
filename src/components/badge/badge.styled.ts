import styled from "@emotion/styled";

export const Image = styled.img`
    display: block;
    width: 100px;
    max-height: 100%;
`;

export const BadgeText = styled.span`
    font-weight: ${(props) => props.theme.fonts.primary.weights.bold};
    color: ${({theme}) => theme.badge.color}
`

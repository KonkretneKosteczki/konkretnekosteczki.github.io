import styled from "@emotion/styled";
import {IBaseTheme} from "../../themes";

export interface IParallaxScrollerElementProps {height: string, backgroundImage: string; blur: boolean};

export const ScrollerElement = styled.div`
    height: ${(props: IParallaxScrollerElementProps & {theme: IBaseTheme}) => `calc(${props.height} - ${props.theme.header.navigationHeight})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${(props: IParallaxScrollerElementProps) => props.backgroundImage});
    filter: ${(props: IParallaxScrollerElementProps) => props.blur ? "blur(20px)" : "none"};
    transition: ${(props: IParallaxScrollerElementProps) => props.blur ? "none" : "filter 0.3s ease-out"};
`

export const StaticElement = styled(ScrollerElement)`
    background-attachment: fixed;
`;

import styled from "@emotion/styled";

export const Navigation = styled.ul`
    top: 0;
    margin: 0;
    position: sticky;
    flex-wrap: wrap;
    text-transform: uppercase;
    padding: 16px;
    height: calc(${(props) => props.theme.header.navigationHeight}px - 32px); // excluded double padding
    background: #fff;
    z-index: 1;
`;

export const NavigationElement = styled.li`
    display: inline-block;   
`

export const NavigationElementLink = styled.a`
    color: #000;
    padding-right: 50px;
    transition: all .3s;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    
    &:after {
        content: "_"
    }
    &:not(:hover) {
        &:after {
            visibility: hidden;
        }
    }
    &:hover {
        &:after {
            animation-name: toggle;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }
    }
    @keyframes toggle {
        from {
            visibility: hidden;
        }
        50% {
            visibility: hidden;
        }
        to {
            visibility:visible;
        }
    }
`

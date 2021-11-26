import styled from "@emotion/styled";

export const Navigation = styled.ul`
    top: 0;
    margin: 0;
    position: sticky;
    flex-wrap: wrap;
    text-transform: uppercase;
    padding: 16px;
    height: calc(${(props) => props.theme.header.navigationHeight} - 32px); // excluded double padding
    background: #fff;
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
`

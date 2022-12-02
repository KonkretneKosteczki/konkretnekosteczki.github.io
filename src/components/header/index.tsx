import React from "react";
import {Navigation, NavigationElement, NavigationElementLink} from "./header.styled";
import Profile from "../profile";
import { ContentContainer } from "../../app.styled";
import Sticky from "react-stickynode";

const navigation = {
    "#hello": "Hello",
    "#resume": "Resume",
    "#portfolio": "Portfolio",
    "#contact": "Contact"
} as const;

const Header: React.FC = () => {
    return (
        <>
            <Profile/>
            <Sticky innerZ={1}>
                <Navigation>
                    <ContentContainer>
                        {Object.entries(navigation).map(([link, name]) => (
                            <NavigationElement key={link}>
                                <NavigationElementLink href={link}>
                                    {name}
                                </NavigationElementLink>
                            </NavigationElement>
                        ))}
                    </ContentContainer>
                </Navigation>
            </Sticky>
        </>
    );
};

export default Header;

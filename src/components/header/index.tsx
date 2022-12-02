import React from "react";
import {Navigation, NavigationElement, NavigationElementLink} from "./header.styled";
import Profile from "../profile";
import { ContentContainer } from "../../app.styled";

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
        </>
    );
};

export default Header;

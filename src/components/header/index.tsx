import React from "react";
import {Navigation, NavigationElement, NavigationElementLink} from "./header.styled";
import Profile from "../profile";

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
                {Object.entries(navigation).map(([link, name]) => (
                    <NavigationElement key={link}>
                        <NavigationElementLink href={link}>
                            {name}
                        </NavigationElementLink>
                    </NavigationElement>
                ))}
                {/*<div className="menu__wrapper col-md-12 d-lg-none">*/}
                {/*    <button type="button" className="menu__mobile-button">*/}
                {/*        <span><i className="fa fa-bars" aria-hidden="true"></i></span>*/}
                {/*    </button>*/}
                {/*</div>*/}
            </Navigation>
        </>
    );
};

export default Header;

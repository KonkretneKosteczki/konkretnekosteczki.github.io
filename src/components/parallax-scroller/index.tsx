import React from "react";
import ParallaxScrollerElement from "./parallax-scroller.element";
import LazyLoad from "react-lazyload";

const ParallaxScroller: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const childrenArray = React.Children.toArray(children);

    return (
        <>
            {React.Children.map(childrenArray, (child, index) => {
                if (!React.isValidElement(child)) return null;
                const height = child.props["data-height"] || "100vh";
                return (
                    <LazyLoad height={height} offset={200}>
                        <ParallaxScrollerElement isStatic={index % 2 === 0}>{child}</ParallaxScrollerElement>
                    </LazyLoad>
                )
            })}
        </>
    );
};

export default ParallaxScroller;

import React from "react";
import {ScrollerElement, StaticElement} from "./parallax-scroller.styled";
import useProgressiveImg from "../../hooks/progressive-image";

const ParallaxScrollerElement: React.FC<{children: React.ReactElement, isStatic: boolean}> = ({children, isStatic}) => {
    const [image, {blur}] = useProgressiveImg(children.props["data-image-placeholder"], children.props["data-image"])
    const height = children.props["data-height"] || "100vh";

    return (
        isStatic
            ? <StaticElement height={height} backgroundImage={image} blur={blur}>{children}</StaticElement>
            : <ScrollerElement height={height} backgroundImage={image} blur={blur}>{children}</ScrollerElement>
    )
};

export default ParallaxScrollerElement;

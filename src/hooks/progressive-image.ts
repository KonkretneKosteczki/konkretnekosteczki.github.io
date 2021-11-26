import {useEffect, useState} from "react";

const useProgressiveImg = (imagePlaceholder: string, highQualityImage: string): [string, {blur: boolean}] => {
    const [src, setSrc] = useState(imagePlaceholder);

    useEffect(() => {
        setSrc(imagePlaceholder);
        const img = new Image();
        img.src = highQualityImage;
        img.onload = () => {
            setSrc(highQualityImage)
        };
    }, [imagePlaceholder, highQualityImage]);

    return [src, {blur: src === imagePlaceholder}];
};

export default useProgressiveImg;

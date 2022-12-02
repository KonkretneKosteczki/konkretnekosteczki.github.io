import {useEffect, useState} from "react";
import pLimit from "p-limit";

export function useMultipleImages(context: __WebpackModuleApi.RequireContext): {isLoading: boolean, total: number, loadedImages: Array<HTMLImageElement | void>} {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [loadedImages, setLoadedImages] = useState<Array<HTMLImageElement | void>>(new Array(context.keys().length));

    useEffect(() => {
        const limit = pLimit(10);
        const localLoadedImages: Array<HTMLImageElement> = [];
        const imagePaths = context.keys().map<string>(context);
        Promise.all(imagePaths.map((path, index) => limit(() => new Promise<HTMLImageElement>((res) => {
            const image = new Image();
            image.onload = () => res(image);
            image.src = path;
        }).then((image) => {
            localLoadedImages[index] = image;
            setLoadedImages(localLoadedImages);
        })))).then(() => setIsLoading(false))
    }, [context]);

    return {isLoading, total: context.keys().length, loadedImages};
}

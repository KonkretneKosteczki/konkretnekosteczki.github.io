import React, {useEffect, useRef, useState} from "react";
import {motion, useScroll} from "framer-motion";
import {useMultipleImages} from "../../hooks/multiple-images";
import {ACanvas, CanvasContainer} from "./animated-canvas.styled";
import {useTheme} from "@emotion/react";

export const AnimatedCanvas: React.FC = () => {
    const {header: {navigationHeight}} = useTheme();
    const {total, loadedImages} = useMultipleImages(require.context('../../assets/images/d20/', false, /\.(png|jpe?g|svg)$/));
    const defaultImage = loadedImages[0];
    const [currentlyRenderedImageIndex, setCurrentlyRenderedImageIndex] = useState<number>(-1);
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const canvasContainerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: canvasContainerRef,
        offset: ["start start", "end end"] // starts animating when start (top) of the canvas container reaches start (top) of the screen, ends when bottom reaches bottom
    });

    scrollYProgress.onChange((progressPercentage) => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) return;
        const imageIndex = Math.round(progressPercentage * (total - 1))
        const imageToRender = loadedImages[imageIndex];
        if (!imageToRender || imageIndex === currentlyRenderedImageIndex) return;
        setCurrentlyRenderedImageIndex(imageIndex);
        fitImageToCanvas(canvas, imageToRender);
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) return;
        context.fillStyle = "#080404";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }, [canvasRef])

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !defaultImage || currentlyRenderedImageIndex !== -1) return;
        setCurrentlyRenderedImageIndex(0);
        fitImageToCanvas(canvas, defaultImage);
    }, [currentlyRenderedImageIndex, defaultImage]);

    function fitImageToCanvas(canvas: HTMLCanvasElement, image: HTMLImageElement): void {
        const context = canvas.getContext("2d");
        if (!context) return;

        // canvas bigger than image
        if (image.height < canvas.height && image.width < canvas.width)
            return context.drawImage(image, (canvas.width - image.width) / 2, (canvas.height - image.height) / 2, image.width, image.height);

        // canvas smaller than image
        const heightRatio = canvas.height / image.height;
        const widthRatio = canvas.width / image.width;

        const scaledImageWidth = widthRatio > heightRatio
            ? image.width * canvas.height / image.height
            : canvas.width;
        const scaledImageHeight = widthRatio < heightRatio
            ? image.height * canvas.width / image.width
            : canvas.height;
        context.drawImage(image, (canvas.width - scaledImageWidth) / 2, (canvas.height - scaledImageHeight) / 2, scaledImageWidth, scaledImageHeight);
    }

    return (
        <motion.div>
            <CanvasContainer ref={canvasContainerRef}>
                <ACanvas ref={canvasRef} width={window.screen.availWidth} height={window.screen.availHeight - navigationHeight}/>
            </CanvasContainer>
        </motion.div>
    )
}

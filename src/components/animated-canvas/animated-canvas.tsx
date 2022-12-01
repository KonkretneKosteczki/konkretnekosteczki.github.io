import React, {useEffect, useRef} from "react";
import {motion, useScroll} from "framer-motion";
import {ACanvas, CanvasContainer} from "./animated-canvas.styled";

const images = require.context('../../assets/images/d20/', false, /\.(png|jpe?g|svg)$/);
const imagePaths = images.keys().map<string>(images);
const loadedImages: Array<Promise<HTMLImageElement>> = imagePaths.map((path) => {
    const image = new Image();
    image.src = path;
    return new Promise((res) => image.onload = () => res(image));
})

export const AnimatedCanvas: React.FC = () => {
    const canvasRef = useRef(null)
    const canvasContainerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: canvasContainerRef,
        offset: ["start start", "end end"]
    });

    scrollYProgress.onChange((progressPercentage) => {
        const canvas = canvasRef.current as HTMLCanvasElement | null;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) return console.log("NO CONTEXT");
        Promise.all(loadedImages).then((images) => {
            const imageToRender = images[Math.floor(progressPercentage * images.length)];
            if (!imageToRender) return;
            context.drawImage(imageToRender, canvas.width / 2 - 400, canvas.height / 2 - 400, 800, 800)
        })
    })
    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement | null;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) return console.log("NO CONTEXT");
        context.fillStyle = "#080404";
        context.fillRect(0, 0, canvas.width, canvas.height);
        Promise.all(loadedImages).then(([image]) => {
            context.drawImage(image, canvas.width / 2 - 400, canvas.height / 2 - 400, 800, 800)
        })
    }, [canvasRef])

    return (
        <motion.div>
            <CanvasContainer ref={canvasContainerRef}>
                <ACanvas ref={canvasRef} width={window.screen.availWidth} height={window.screen.availHeight - 112}/>
            </CanvasContainer>
        </motion.div>
    )
}

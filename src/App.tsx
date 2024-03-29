import React from 'react';
import {ThemeProvider} from "@emotion/react";
import {MainTheme} from "./themes/main.theme";
import "./App.css"
import ParallaxScroller from "./components/parallax-scroller";
import Header from "./components/header";
import {AppContainer, ContentContainer} from "./app.styled";
import {AnimatedCanvas} from "./components/animated-canvas/animated-canvas";

function App() {
    return (
        <ThemeProvider theme={MainTheme}>
            <AppContainer>
                <Header/>
                <AnimatedCanvas />
                <ParallaxScroller>
                    {new Array(10)
                        .fill(null)
                        .map((_, id) => (
                            <div key={id} data-image-placeholder={`https://picsum.photos/192/108?index=${id}`} data-image={`https://picsum.photos/1920/1080?index=${id}`}>
                                <ContentContainer>
                                    TEST2
                                </ContentContainer>
                            </div>
                        ))
                    }
                </ParallaxScroller>
                {/*<UserBadge/>*/}
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;

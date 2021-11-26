import {IBaseTheme, EFontKeys, TThemeFonts} from "./index";
import OpenSansRegular from "../assets/fonts/OpenSans/OpenSans-Regular.woff2";
import OpenSansSemiBold from "../assets/fonts/OpenSans/OpenSans-SemiBold.woff2";
import OpenSansBold from "../assets/fonts/OpenSans/OpenSans-Bold.woff2";

const mainFonts: TThemeFonts = {
    [EFontKeys.Primary]: {
        family: "'Source Sans Pro'",
        genericFamily: "sans-serif",
        weights: {light: 400, regular: 400, medium: 500, bold: 700},
        local: {400: OpenSansRegular, 600: OpenSansSemiBold, 700: OpenSansBold}
    }
};

export const MainTheme: Readonly<IBaseTheme> = {
    breakpoints: {
        mobile: "360px",
        tablet: "672px",
        laptop: "1020px",
        desktop: "1440px"
    },
    fonts: mainFonts,
    badge: {
        color: "red"
    }
};

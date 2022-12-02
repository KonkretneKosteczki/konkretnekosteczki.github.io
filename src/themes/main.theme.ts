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

const colorsDark = {
    Light: "#7A85AD",
    FadedLight: "#515E90",
    Neutral: "#303E73",
    FadedDark: "#172557",
    Dark: "#07123A"
}

// const colorsLight = {
//     Dark: "#554D00",
//     FadedDark: "#807615",
//     Neutral: "#807615",
//     FadedLight: "#D4CB6A",
//     Light: "#FFF7AA",
// }

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
    },
    colors: colorsDark,
    header: {
        navigationHeight: 56
    }
};

import CSS from "csstype";

export enum Breakpoints {
    Mobile = "mobile",
    Tablet = "tablet",
    Laptop = "laptop",
    Desktop = "desktop"
}

export type ThemeBreakpoints = Record<Breakpoints, string>;

export enum EFontKeys {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary"
}

export enum EFontWeightKeys {
    Light = "light",
    Regular = "regular",
    Medium = "medium",
    Bold = "bold"
}

export interface IFont {
    url?: string; // External url to the font, i.e: to google fonts
    local?: Record<number, string>; // object of weight-base64 pairs
    family: string;
    genericFamily: "serif" | "sans-serif" | "cursive" | "fantasy" | "monospace";
    weights: Record<EFontWeightKeys, number>;
}

export type TThemeFonts = {[EFontKeys.Primary]: IFont} & Partial<Record<EFontKeys, IFont>>

export interface IBaseTheme {
    breakpoints: ThemeBreakpoints;
    fonts: TThemeFonts;
    badge: {color: CSS.Property.Color};
    colors: {
        Dark: CSS.Property.Color;
        FadedDark: CSS.Property.Color;
        Neutral: CSS.Property.Color;
        FadedLight: CSS.Property.Color;
        Light: CSS.Property.Color;
    }
    header: {
        navigationHeight: CSS.Property.Height;
    }
}

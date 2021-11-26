import '@emotion/react'
import {IBaseTheme} from "./themes";

declare module '@emotion/react' {
    export interface Theme extends IBaseTheme {}
}

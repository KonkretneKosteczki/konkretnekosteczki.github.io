import "jest-extended";
export {}; // Ensure this is treated as a module.

declare global {
    declare module "*.svg" {
        const content: string;
        export default content;
    }

    declare module "*.png" {
        const content: string;
        export default content;
    }

    declare module "*.woff2" {
        const content: string;
        export default content;
    }

    declare module "*.ttf" {
        const content: string;
        export default content;
    }
}

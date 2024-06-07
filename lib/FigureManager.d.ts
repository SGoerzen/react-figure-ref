import React, { CSSProperties, HTMLProps } from "react";
export interface FmFigureProps {
    caption: string;
    label: string;
    style?: CSSProperties;
    className?: string;
    alt?: string;
}
export interface FmFigureRefProps extends HTMLProps<HTMLAnchorElement> {
    label: string;
}
type FmConstructorProps = {
    figures: {
        label: string;
        imageSrc: string;
    }[];
    prefix?: string;
};
export declare class FigureManager {
    private readonly _prefix;
    private _figureNumber;
    private _figures;
    constructor({ figures, prefix }: FmConstructorProps);
    FigureRef: ({ label, ...props }: FmFigureRefProps) => React.JSX.Element;
    Figure: ({ caption, label, style, className, alt }: FmFigureProps) => React.JSX.Element;
}
export {};

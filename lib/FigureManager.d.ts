import React from "react";
export interface FmFigureProps {
    caption: string;
    label: string;
}
export interface FmFigureRefProps {
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
    FigureRef: ({ label }: FmFigureRefProps) => React.JSX.Element;
    Figure: ({ caption, label }: FmFigureProps) => React.JSX.Element;
}
export {};

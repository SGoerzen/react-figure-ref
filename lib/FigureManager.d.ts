import React from "react";
import { FigureProps } from "./components/Figure";
import { FigureRefProps } from "./components/FigureRef";
export type FmFigureProps = Omit<FigureProps, "src" | "label" | "caption"> & {
    caption: string;
    label: string;
};
export type FmFigureRefProps = Omit<FigureRefProps, "children">;
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
    Figure: ({ caption, label, ...props }: FmFigureProps) => React.JSX.Element;
}
export {};

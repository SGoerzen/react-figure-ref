import React, { CSSProperties } from "react";
import { Property } from "csstype";
export interface FigureProps {
    src: string;
    caption: React.ReactElement;
    label?: string;
    width?: Property.Width;
    maxWidth?: Property.MaxWidth;
    style?: CSSProperties;
    figureStyle?: CSSProperties;
    className?: string;
    alt?: string;
    align?: Property.TextAlign;
    autoPlay?: boolean;
    loop?: boolean;
}
export declare function Figure({ src, caption, label, style, figureStyle, className, alt, align, width, maxWidth, autoPlay, loop }: FigureProps): React.JSX.Element;

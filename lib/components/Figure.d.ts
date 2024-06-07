import React, { CSSProperties } from "react";
export interface FigureProps {
    src: string;
    caption: React.ReactElement;
    label?: string;
    style?: CSSProperties;
    className?: string;
    alt?: string;
}
export declare function Figure({ src, caption, label, style, className, alt }: FigureProps): React.JSX.Element;

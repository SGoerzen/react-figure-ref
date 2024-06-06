import React from "react";
export interface FigureProps {
    src: string;
    caption: React.ReactElement;
    label?: string;
}
export declare function Figure({ src, caption, label }: FigureProps): React.JSX.Element;

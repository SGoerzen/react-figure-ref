import React, { HTMLProps } from "react";
export interface FigureRefProps extends HTMLProps<HTMLAnchorElement> {
    children: string;
    label: string;
}
export declare function FigureRef({ children, label, className, ...props }: FigureRefProps): React.JSX.Element;

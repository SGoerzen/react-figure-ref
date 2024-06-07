import React, {HTMLProps} from "react";

export interface FigureRefProps extends HTMLProps<HTMLAnchorElement> {
    children: string;
    label: string;
}

export function FigureRef({children, label, className, ...props}: FigureRefProps) {
    return <a {...props} className={'figure-ref' + ' ' + (className ?? "")} href={'#' + label}>{children}</a>;
}
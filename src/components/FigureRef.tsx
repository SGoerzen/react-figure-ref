import React from "react";

export interface FigureRefProps {
    children: string;
    label: string;
}

export function FigureRef({children, label}: FigureRefProps) {
    return <a href={'#' + label}>{children}</a>;
}
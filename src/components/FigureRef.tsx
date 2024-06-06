
interface FigureRefProps {
    children: string;
    label: string;
}

export default function FigureRef({children, label}: FigureRefProps) {
    return <a href={'#' + label}>{children}</a>;
}
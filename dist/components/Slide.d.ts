/// <reference types="react" />
interface IProps {
    content: JSX.Element;
    offsetRadius: number;
    index: number;
    animationConfig: object;
}
export default function Slide({ content, offsetRadius, index, animationConfig }: IProps): JSX.Element;
export {};

import { Component } from "react";
import PropTypes from "prop-types";
interface IState {
    index: number;
    goToSlide: number | null;
    prevPropsGoToSlide: number;
    newSlide: boolean;
}
interface IProps {
    slides: Slide[];
    goToSlide?: number;
    showNavigation: boolean;
    offsetRadius: number;
    animationConfig: object;
}
declare class Carousel extends Component<IProps, IState> {
    state: IState;
    goToIn?: number;
    static propTypes: {
        slides: PropTypes.Validator<(PropTypes.InferProps<{
            key: PropTypes.Requireable<any>;
            content: PropTypes.Requireable<object>;
        }> | null)[]>;
        goToSlide: PropTypes.Requireable<number>;
        showNavigation: PropTypes.Requireable<boolean>;
        offsetRadius: PropTypes.Requireable<number>;
        animationConfig: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        offsetRadius: number;
        animationConfig: {
            tension: number;
            friction: number;
        };
    };
    static getDerivedStateFromProps(props: IProps, state: IState): {
        prevPropsGoToSlide: number | undefined;
        goToSlide: number | undefined;
        newSlide: boolean;
    } | null;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    modBySlidesLength: (index: number) => number;
    moveSlide: (direction: 1 | -1) => void;
    getShortestDirection(from: number, to: number): -1 | 0 | 1;
    handleGoToSlide: () => void;
    clampOffsetRadius(offsetRadius: number): number;
    getPresentableSlides(): Slide[];
    render(): JSX.Element;
}
export default Carousel;

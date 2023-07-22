import { Slider } from "./Slider";
import { HeadingTitle } from "./styles";

export function Popular() {
    return (
        <>
            <HeadingTitle>Popular Picks</HeadingTitle>
            <Slider file="popular" tags="indian,non-veg" pageCount="3" />
        </>
    );
}

{HeadingTitle}
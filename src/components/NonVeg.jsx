import { Slider } from "./Slider";
import { HeadingTitle } from "./styles";

export function NonVeg(){
    return ( 
        <>
            <HeadingTitle>Non-Veg</HeadingTitle>
            <Slider file="vegitarian" tags="indian,vegitarian" pageCount="4"/>
        </>
     );
}

{HeadingTitle}
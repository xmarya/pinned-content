import styled from "styled-components"
import { Colours } from "../Types/Colours"

type Props = {
    children: React.ReactNode,
    backgroundColour: Colours,
}

const ColouredBackground = styled.div<{$backgroundColour: string}>`
/*
    inherit means that the value used by the parent is used.
    currentColor follows closest color property value,
*/
    background-color: ${props => props.$backgroundColour};
`;
const TransparentBackground = styled.div<{$backgroundColour: string}>`
    --bg-colour: ${props => props.$backgroundColour};
    background: linear-gradient(0deg,
    var(--bg-colour) 5%,
    rgba(255, 50, 44, 0) 35%,
    rgba(255, 50, 44, 0) 65%,
    var(--bg-colour) 95%);
`;

export default function Background({backgroundColour = "inherit", children}: Props) {
    return (
        <>
        <ColouredBackground $backgroundColour={backgroundColour}/>
            {children}
        <TransparentBackground $backgroundColour={backgroundColour}/>
        </>
    )
}


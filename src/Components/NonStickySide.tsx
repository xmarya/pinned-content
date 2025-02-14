import GridWrapper from "./GridWrapper"

type Props = {
    children: React.ReactNode,
}


export default function NonStickySide({children}: Props) {
    return (
        <GridWrapper>
            {children}
        </GridWrapper>
    )
}


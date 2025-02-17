import GridWrapper from "./GridWrapper"

type Props = {
    children: React.ReactNode,
}

export default function StickySide({children}: Props) {
    return (
        <GridWrapper>
            {children}
        </GridWrapper>
    )
}


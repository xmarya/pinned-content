import styled from "styled-components"

type Props = {
    children: React.ReactNode,
}

const StyledGridWrapper = styled.div`
    max-width: 100rem;
    margin-inline: auto;
    /* padding-inline: 2rem; */

`;
const Grid = styled.div`
    display: grid;
    // the max-width / the number of columns => 1000 / 12 = 83.333 convert into rem => 8.3333
    grid-template-columns: repeat(12, minmax(min(8.3333rem, 100%), 1fr));
    /* grid-template-columns: repeat(12, minmax(min(40rem, 100%), 1fr)); */
    gap: 2rem;

`;

export default function GridWrapper({children}:Props) {
    return (
        <StyledGridWrapper>
            <Grid>
                {children}
            </Grid> 
        </StyledGridWrapper>
    )
}


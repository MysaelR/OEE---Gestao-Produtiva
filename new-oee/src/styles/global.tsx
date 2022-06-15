import styled, { css } from "styled-components";

interface UniversalI {
    grid?: boolean,
    flex?: boolean,
    absolute?: boolean,
    relative?: boolean,
    mTop?: number,
    mBottom?: number,
    mLeft?: number,
    mRight?: number

}

export const UniversalDiv = styled.div<UniversalI>`
    display: ${(element: UniversalI) => element.flex ? 'flex' : element.grid ? 'grid' : 'flex'};
    position: ${(element: UniversalI) => element.absolute ? 'absolut' : element.relative ? 'relative' : 'relative'};
    margin-top: ${(element: UniversalI) => element.mTop}vh;
    margin-bottom: ${(element: UniversalI) => element.mBottom}vh;
    margin-left: ${(element: UniversalI) => element.mLeft}vw;
    margin-right: ${(element: UniversalI) => element.mRight}vw;
    flex-direction: column;
`

export const AligntCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
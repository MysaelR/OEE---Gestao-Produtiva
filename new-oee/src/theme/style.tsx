import styled, { css } from "styled-components";

import Lateral from "../components/menu/lateral";

interface ActiveI {
    active: boolean
}


export const LateralModifield = styled(Lateral)`
   width: 100%;
`

export const Container = styled.div`
    min-height: 100vh;
    /* position: relative; */
   

`

export const Area = styled.div`
    display: flex;



`



export const Page = styled.div`
    flex: 1;
    padding-left: 70px;
    padding-top: 70px;
    margin-top: 10vh;
    margin-left: 5vw;
    margin-right: 3vw;

    @media only screen and (max-width: 800px) {
        padding-left: 10px;
        margin-left: 0vw;
    }

`
export const PageMargins = styled.div`
    

`
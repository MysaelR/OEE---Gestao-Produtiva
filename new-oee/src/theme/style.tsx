import styled, { css } from "styled-components";

interface ActiveI {
    active: boolean
}

export const Container = styled.div`
    min-height: 100vh;
`

export const Area = styled.div`
    display: flex;
`

export const LateralMenu = styled.div`
    flex: 1;
    background-color: #F4F4F4;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 12px 12px 0px;
    max-width: ${(element: ActiveI) => element.active ? '200px' : '50px'};
    height: 60vh;
    margin-top: 5vh;
    word-break: break-all;
    padding-bottom: 5vh;
    padding-top: 15vh;
    transition: 0.3s;


    @media only screen and (max-width: 800px) {
        display: none;
    }

`

export const Page = styled.div`
    flex: 1;
    padding-left: 70px;
    padding-top: 70px;
`

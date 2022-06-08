import styled from 'styled-components'

import Background from '../assets/login/background.png'

interface InputControllI {
    top?: number
}

interface TextControllI {
    size?: number;
    bolder?: boolean;
    lHeight?: number;
}

export const PrincipalDivLogin = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgb(244 244 245);
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;

    @media only screen and (max-width: 450px) {
        /* background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center; */
        background: #052554;
    } 
`
export const GridDivLogin = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;

`


export const FlexDivLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
    margin-top: 6vh;

    @media only screen and (max-width: 500px) {
        margin-top: -15vh;
    } 

`

export const ContainerLogin = styled.div`
    position: relative;   
    width: 40vw;
    height: 60vh;
    border-radius: 15px;
    border: 1px solid lightgray;
    background-color: #FFF;
    flex-direction: column;

    @media only screen and (max-width: 600px) {
        width: 80vw;
        height: 45vh;
    } 
`

export const HeaderLogin = styled.div`
    position: absolute;
    border: 1px solid lightblue;
    width: 100%;
    height: 30%;
`
export const HeaderLoginText = styled.p<TextControllI>`
    font-size: ${(element: TextControllI) => element.size}vh;
    color: #E66B25;
    font-weight: ${(element: TextControllI) => element.bolder === true && 'bolder'};
    height: 5vh;
    line-height:  ${(element: TextControllI) => element.lHeight}%;


/*     @media only screen and (max-width: 500px) {
        font-size: 9px;
    } 

    @media only screen and (min-width: 1500px) {
        font-size: 9px;
    }

    @media only screen and (min-width: 2000px) {
        font-size: 12px;
    } 

    @media only screen and (min-width: 3000px) {
        font-size: 20px;
    } */

`

export const ContainerTop = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start; 
    line-height: 100%;
    font-size: 12px;
`
export const ContainerMed = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-end;
    font-size: 12px;
    line-height: 100%;
`

export const ContainerBase = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-end;
    font-size: 12px;
    line-height: 100%;
`


export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    height: 7vh;
`

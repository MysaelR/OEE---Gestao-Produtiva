import styled, { css } from 'styled-components';
import { ReactComponent as Logo } from '../assets/login/logo.svg';
import Background from '../assets/login/background.png';




interface DivControllI {
    top?: number;
    w?: number;
}

interface TextControllI {
    size?: number;
    bolder?: boolean;
    lHeight?: number;
}

interface OptionSelectedLoginI {
    active?: boolean;
    bRight?: boolean;
}


export const SystemLogo = styled(Logo)`
    fill: #E66B25;
    margin-top: 1vh;
    width: 9vw;
    @media only screen and (max-width: 600px) {
        position: absolute;
        margin-top: 110vh;
        fill: #FFF;
        width: 25vw;
    }
    @media only screen and (min-width: 2000px) {
        height: 5vh;
    }
`


export const PrincipalDivLogin = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
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
    font-family: 'Montserrat', sans-serif;

    @media only screen and (max-width: 450px) {
        /* background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center; */
        background: #052554;
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

export const MaxContainerLateralSpace = styled.div`
    position: relative;
    margin-left: 10%;
    width: 80%;
    height: 100%;
    /* border: 1px solid black; */

`

//HEADER
export const HeaderLogin = styled.div`
    position: absolute;
    /* border: 1px solid lightblue; */
    width: 100%;
    height: 20vh;
    @media only screen and (max-width: 600px) {
        height: 10vh;
    } 
`

export const GridDivLogin = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;

`

export const FlexDivLogin = styled.div<DivControllI>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
    margin-top: ${(element: DivControllI) => element.top}vh;
    width: ${(element: DivControllI) => element.w}vw;

    @media only screen and (max-width: 600px) {

    margin-top: ${(element: DivControllI) => (element.top && element.top * 0.6)}vh;
    width: ${(element: DivControllI) => (element.w && element.w * 4)}vw;

    } 
`

export const OptionLogin = styled.div<OptionSelectedLoginI>`
    
    height: 2vh;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3px;
   


`
export const OptionLoginText = styled.p<OptionSelectedLoginI>`
    color: ${(element: OptionSelectedLoginI) => element.active ? '#878A8C' : '#C7C7C7'};
    font-weight: 600;
    margin-top: -0.4vh;
    text-align: center;
    cursor: pointer;
    width: 100%;
    border-bottom: ${(element: OptionSelectedLoginI) => element.active ? '0.3vh solid #E66B25' : 'none'};
    border-collapse: separate;
    border-spacing: 15px;
    font-size: 2.2vh;

`

export const OptionLoginSeparateText = styled.div`
    height: 85%;
    border-right:${(element: OptionSelectedLoginI) => element.active && '0.3vh solid #C7C7C7'};
    margin-top: -2vh;
    width: 5%;
  
`

//BODY
export const BodyLogin = styled.div`
    /* border: 1px solid red; */
    margin-top: 20vh;
    height: 20vh;
    @media only screen and (max-width: 600px) {
        margin-top: 10vh;
        height: 20vh;
    } 
`

export const InputLogin = styled.div<DivControllI>`
    position: absolute;
    display: flex;
    align-items: center;

    width: 99%;
    border: 0.3vh solid #C7C7C7;
    border-radius: 8px;
    height: 4vh;
    margin-top: ${(element: DivControllI) => element.top}vh;
`
export const InputLoginContainerIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    height: 70%;
    border-right: 0.1vh solid #C7C7C7;
    /* background-color: lightcyan; */
`
export const InputLoginIcon = styled.img`

`
export const InputLoginAnchor = styled.a`
position: absolute;
margin-top: 16vh;
color: #878A8C;
text-decoration-line: underline;
`




//FOOTER
export const FooterLogin = styled.div`
    /* border: 1px solid green; */
    height: 20vh;
    @media only screen and (max-width: 600px) {
        height: 15vh;
    } 
`

export const ButtonLoginAndRegister = styled.button`
position: absolute;
bottom: 3vh;
background-color: #E66B25;
width: 100%;
padding: 1vh;
border: none;
color: white;
border-radius: 8px;
font-size: 2vh;

`






/* export const HeaderLoginText = styled.p<TextControllI>`
    font-size: ${(element: TextControllI) => element.size}vh;
    color: #E66B25;
    font-weight: ${(element: TextControllI) => element.bolder === true && 'bolder'};
    height: 5vh;
    line-height:  ${(element: TextControllI) => element.lHeight}%;
` */
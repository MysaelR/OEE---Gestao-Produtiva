import styled, { css } from 'styled-components';

import Background from '../assets/login/background.png';
import { ReactComponent as Logo } from '../assets/login/logo.svg';

interface ActivedI {
    active: boolean;
}

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

interface FormControllI {
    form: number;
}


export const SystemLogo = styled(Logo) <FormControllI>`
    fill: #E66B25;
    margin-top: 1vh;
    width: 9vw;

    @media only screen and (max-width: 1000px) {
        width: 12vw;

    }
    @media only screen and (max-width: 600px) {
        position: absolute;
        margin-top: ${(element: FormControllI) => element.form === 1 ? '110vh' : '80vh'};
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
// 40vw 

export const ContainerLogin = styled.div<FormControllI>`
    position: relative;   
    width: 40vw;
    height: ${(element: FormControllI) => element.form === 1 ? '60vh' : element.form === 2 ? '45vh' : element.form === 3 ? '60vh' : '60vh'};
    border-radius: 15px;
    border: 1px solid lightgray;
    background-color: #FFF;
    flex-direction: column;

    @media only screen and (max-width: 1000px) {
        width: 60vw;
        height: ${(element: FormControllI) => element.form === 1 ? '45vh' : element.form === 2 ? '28vh' : element.form === 3 ? '45vh' : '45vh'};
    }

    @media only screen and (max-width: 600px) {
        width: 80vw;
        height: ${(element: FormControllI) => element.form === 1 ? '45vh' : element.form === 2 ? '25vh' : element.form === 3 ? '45vh' : '45vh'};
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
export const HeaderLogin = styled.div<FormControllI>`
    position: absolute;
    /* border: 1px solid lightblue; */
    width: 100%;
    height: ${(element: FormControllI) => element.form === 1 ? '20vh' : element.form === 2 ? '20vh' : element.form === 3 ? '16vh' : '20vh'};

    @media only screen and (max-width: 1000px) {
        height: ${(element: FormControllI) => element.form === 1 ? '15vh' : element.form === 2 ? '15vh' : element.form === 3 ? '15vh' : '45vh'};
    } 
    @media only screen and (max-width: 600px) {
        height: ${(element: FormControllI) => element.form === 1 ? '10vh' : element.form === 2 ? '10vh' : element.form === 3 ? '10vh' : '45vh'};
    } 
`

export const GridDivLogin = styled.div<FormControllI>`
    display: grid;
    align-items: center;
    justify-content: ${(element: FormControllI) => (element.form === 3 ? "start" : "center")};

`

export const FlexDivLogin = styled.div<DivControllI>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
    margin-top: ${(element: DivControllI) => element.top}vh;
    width: ${(element: DivControllI) => element.w}vw;

    @media only screen and (max-width: 1000px) {

    margin-top: ${(element: DivControllI) => (element.top && element.top * 0.4)}vh;
    width: ${(element: DivControllI) => (element.w && element.w * 3)}vw;

    } 


    @media only screen and (max-width: 600px) {

    margin-top: ${(element: DivControllI) => (element.top && element.top * 0.6)}vh;
    width: ${(element: DivControllI) => (element.w && element.w * 4)}vw;

    } 
`

export const TitleRegisterLogin = styled.p`
    color: #E66B25;
    font-size: 4vh;
    font-weight: bolder;
    line-height: 0;
    margin-top: 8vh;
    padding: 0;
    @media only screen and (max-width: 1000px) {

    } 

    @media only screen and (max-width: 600px) {
      
    } 
`

export const SubTitleRegisterLogin = styled.p`
    color: #E66B25;
    line-height: 0;
    margin: 0;
    font-size: 3vh;
    @media only screen and (max-width: 1000px) {

    } 

    @media only screen and (max-width: 600px) {
    
    } 
`

export const OptionLogin = styled.div<OptionSelectedLoginI>`
    
    height: 2vh;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3px;
   
    @media only screen and (max-width: 1000px) {
        height: auto;
        margin-top: 1vh;
    } 
    @media only screen and (max-width: 600px) {
        height: 2vh;
        margin-top: 0;
    } 


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
export const BodyLogin = styled.div<FormControllI>`
    /* border: 1px solid red; */
    margin-top: ${(element: FormControllI) => element.form === 1 ? '20vh' : element.form === 2 ? '20vh' : element.form === 3 ? '16vh' : '20vh'};
    height: ${(element: FormControllI) => element.form === 1 ? '20vh' : element.form === 2 ? '10vh' : element.form === 3 ? '28vh' : '20vh'};

    @media only screen and (max-width: 1000px) {
        margin-top: 15vh;
        height: ${(element: FormControllI) => element.form === 1 ? '15vh' : element.form === 2 ? '7vh' : element.form === 3 ? '15vh' : '15vh'};
    } 

    @media only screen and (max-width: 600px) {
        margin-top: 10vh;
        height: ${(element: FormControllI) => element.form === 1 ? '20vh' : element.form === 2 ? '7vh' : element.form === 3 ? '20vh' : '15vh'};
    
    } 
`

export const InputErrorMsg = styled.p<ActivedI>`
    visibility: ${(element: ActivedI) => element.active ? 'visible' : 'hidden'};
    color: #C02B2B;
    font-size: 1.5vh;

    @media only screen and (max-width: 1000px) {
        font-size: 1.2vh;
    } 

    @media only screen and (max-width: 600px) {
       
    } 

`

export const InputLoginContainer = styled.div<DivControllI & ActivedI>`
    position: absolute;
    display: flex;
    align-items: center;

    width: 99%;
    border: 0.3vh solid;
    border-color: ${(element: ActivedI) => element.active ? '#C02B2B' : '#C7C7C7'};
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
    height: 70%;
`
export const InputLogin = styled.input` /* O input do HTML */
    height: 3.9vh;
    border-radius: 8px;
    width: 100%;
    padding-left: 1vw;
    font-size: 1.8vh;

    border: none;

    ::placeholder{
        color: #878A8C;
        font-size: 1.5vh;
    }

    :focus{
        box-shadow: 0;
        outline: 0;
    }
`

export const InputLoginAnchor = styled.a<FormControllI>`/* o "Esqueci minha senha" */
    position: absolute;
    margin-top: ${(element: FormControllI) => element.form === 3 ? '15' : '15'}vh;
    color: #878A8C;
    font-size: 1vw;
    margin-left: ${(element: FormControllI) => element.form === 3 ? '45%' : '0'};

    text-decoration-line: underline;
    cursor: pointer;
    

:hover{
    color: #052554;
}

@media only screen and (max-width: 1000px) {
    font-size: 1.8vw;
   }
   @media only screen and (max-width: 600px) {
    font-size: 2.5vw;
   } 
`








//FOOTER
export const FooterLogin = styled.div<FormControllI>`
    /* border: 1px solid green; */
    height: ${(element: FormControllI) => element.form === 1 ? '20vh' : element.form === 2 ? '15vh' : element.form === 3 ? '16vh' : '20vh'};
    @media only screen and (max-width: 1000px) {
       
        height: ${(element: FormControllI) => element.form === 1 ? '15vh' : element.form === 2 ? '6vh' : element.form === 3 ? '15vh' : '45vh'};
    }
    @media only screen and (max-width: 600px) {
        height: ${(element: FormControllI) => element.form === 1 ? '15vh' : element.form === 2 ? '8vh' : element.form === 3 ? '15vh' : '45vh'};
    } 
`

export const ButtonLoginAndRegister = styled.button<DivControllI>`
    position: absolute;
    top: ${(element: DivControllI) => element.top}vh;
    background-color: #E66B25;
    width: 100%;
    padding: 1vh;
    border: none;
    color: white;
    border-radius: 8px;
    font-size: 2vh;
    cursor: pointer;

`






/* export const HeaderLoginText = styled.p<TextControllI>`
    font-size: ${(element: TextControllI) => element.size}vh;
    color: #E66B25;
    font-weight: ${(element: TextControllI) => element.bolder === true && 'bolder'};
    height: 5vh;
    line-height:  ${(element: TextControllI) => element.lHeight}%;
` */
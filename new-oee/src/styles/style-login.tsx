import styled from 'styled-components'

import Background from '../assets/login/background.png'

interface InputControllI {
    top?: number
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
    height: 15%;
`


